const {Server} = require('socket.io');
const setupSocket = (server)=>{
    const io = new Server(server,{
        cors:{
            origin:'*',
            methods:['GET', 'POST', 'PUT', 'DELETE'],
        },
    });
    // Namespaces for sellers, customers, and admin
    const sellers = io.of('/sellers');
    const customers = io.of('/customers');

    // Sellers namespace
    sellers.on('connection', (socket) => {
        console.log('Seller connected:', socket.id);

        // Join a room specific to the seller's ID
        socket.on('joinRoom', (sellerId) => {
            socket.join(sellerId);
            console.log(`Seller ${socket.id} joined room: ${sellerId}`);
        });
        socket.on('disconnect', () => {
            console.log('Seller disconnected:', socket.id);
        });
    });
    
    // Customers namespace
    customers.on('connection', (socket) => {
        console.log('Customer connected:', socket.id);

        // Join a room specific to the customer's ID
        socket.on('joinRoom', (customerId) => {
            socket.join(customerId);
            console.log(`Customer ${socket.id} joined room: ${customerId}`);
        });

        // Notify sellers about a new order
        socket.on('placeOrder', ({ sellerId, orderDetails }) => {
            sellers.to(sellerId).emit('newOrder', orderDetails);
        });

        socket.on('disconnect', () => {
            console.log('Customer disconnected:', socket.id);
        });
    });
};
module.exports = {setupSocket};                                         
