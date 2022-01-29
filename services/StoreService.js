/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
*
* orderId String ID of the order that needs to be deleted
* no response value expected for this operation
* */
const delete_order = ({ orderId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        orderId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
*
* returns Map
* */
const get_inventory = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
*
* orderId Long ID of pet that needs to be fetched
* returns Order
* */
const get_order_by_id = ({ orderId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        orderId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Place an order for a pet
*
* body Order order placed for purchasing the pet
* returns Order
* */
const place_order = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  delete_order,
  get_inventory,
  get_order_by_id,
  place_order,
};
