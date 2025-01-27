const connectDB = require('../../utils/dbMongodb');

connectDB();

require('./customer');
require('./market');
require('./Products');