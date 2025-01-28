const connectDB = require('../../utils/dbMongodb');

connectDB();

require('./customer');
require('./market');
require('./Products');
require('./ProductMedia');
require('./category');
require('./feedback');
require('./cities');
require('./citiesproducts');
