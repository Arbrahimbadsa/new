
/*****************************    Boilerplate config     *************************/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

// app
const app = express();

// middlewears
app.use(morgan('dev')); // allows you to see the requests in the console
app.use(bodyParser.json()); // allows to get the frontend the json data
app.use(cookieParser());

// cors 
app.use(cors()); // eliminates cors errors

/****************************************************************************************/


// bring up the routes
const posts = require('./routes/posts');

// use routes
app.use('/api', posts);

// port
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Server started at port ${port}`));