const express = require('express');
const user_routes = express();

const bodyParser = require('body-parser');
user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({ extended: true }));

//


const user_controller = require('../controllers/userControllers');

// Insert API::- POST

user_routes.post('/insertData', user_controller.insert_data);

// UPDATE API::-  PUT

user_routes.put('/updateData', user_controller.update_data);

// Delete API::- DELETE

user_routes.delete('/deleteData/:id', user_controller.delete_data);

// Get Single Data

user_routes.get('/getData/:id', user_controller.get_data);

// Get All Data::

user_routes.get('/getAllData', user_controller.get_all_data);


module.exports = user_routes;

