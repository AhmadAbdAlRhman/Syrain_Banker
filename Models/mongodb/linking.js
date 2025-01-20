const connectDB = require('../../utils/dbMongodb');

connectDB();

require('./customer');
require('./seller');