/* eslint-disable no-unused-vars */
const Service = require('./Service');
var pets = require('../data/data.js');

const getPetForPetId = function (petId) {
  const pet = pets.find(pet => pet.id == petId);
  return pet;
}

/**
* Add a new pet to the store
*
* body Pet Pet object that needs to be added to the store
* no response value expected for this operation
* */
const add_pet = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      const pet = body;
      pet.id = pets.length + 1;
      pets.push(pet);
      resolve(Service.successResponse({
        body,
      }));
    } catch (e) {
      console.log('catch addPet ', e);
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a pet
*
* petId Long Pet id to delete
* apiUnderscorekey String  (optional)
* no response value expected for this operation
* */
const delete_pet = ({ petId, apiUnderscorekey }) => new Promise(
  async (resolve, reject) => {
    try {
      pets = pets.filter(function (value, index, arr) {
        return value.id != petId;
      });
      resolve(Service.successResponse({
        petId,
        apiUnderscorekey,
      }));
    } catch (e) {
      console.log('catch deletePet', e);
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
*
* status List Status values that need to be considered for filter
* returns List
* */
const find_pets_by_status = ({ status }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse(pets));
    } catch (e) {
      console.log('catch findPetsByStatus', e);
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*
* tags List Tags to filter by
* returns List
* */
const find_pets_by_tags = ({ tags }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        tags,
      }));
    } catch (e) {
      console.log('catch findPetsByTags', e);
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find pet by ID
* Returns a single pet
*
* petId Long ID of pet to return
* returns Pet
* */
const get_pet_by_id = ({ petId }) => new Promise(
  async (resolve, reject) => {
    let pet = getPetForPetId(petId)
    try {
      if (pet === undefined) {
        resolve(Service.notFoundResponse({ petId, }));
      } else {
        resolve(Service.successResponse(pet));
      }
    } catch (e) {
      console.log('catch getPetById', e);
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an existing pet
*
* body Pet Pet object that needs to be added to the store
* no response value expected for this operation
* */
const update_pet = ({ body }) => new Promise(
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
/**
* Updates a pet in the store with form data
*
* petId Long ID of pet that needs to be updated
* name String Updated name of the pet (optional)
* status String Updated status of the pet (optional)
* no response value expected for this operation
* */
const update_pet_with_form = ({ petId, name, status }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        petId,
        name,
        status,
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
* uploads an image
*
* petId Long ID of pet to update
* additionalMetadata String Additional data to pass to server (optional)
* file File file to upload (optional)
* returns ApiResponse
* */
const upload_file = ({ petId, additionalMetadata, file }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        petId,
        additionalMetadata,
        file,
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
  add_pet,
  delete_pet,
  find_pets_by_status,
  find_pets_by_tags,
  get_pet_by_id,
  update_pet,
  update_pet_with_form,
  upload_file,
};
