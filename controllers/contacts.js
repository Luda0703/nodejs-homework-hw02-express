
const contacts = require('../models/contacts');

const {HttpError, ctrlWrapper} = require('../helpers');

  const getAll = async (req, res, next) => {
    // try { 
        const result = await contacts.listContacts();
      res.json(result);
    // } catch (error) {
    //   next(error);
    // }
  }

  const getById = async (req, res, next) => {
    // try {
      const {contactId} = req.params;
      const result = await contacts.getContactById(contactId);
      if(!result) {
        throw HttpError(404, 'Not found');
      }
      res.json(result);
    // } catch (error) {
    //   next(error);
    // }
  }

  const add = async (req, res, next) => {
    // try {
    //   const {error} = addSchema.validate(req.body);
    //   if(error) {
    //     throw HttpError(400, {"message": "missing required name field"});
    //   }
      const result = await contacts.addContact(req.body);
      res.status(201).json(result);
  
    // } catch (error) {
    //   next(error)
    // }
  }

  const removeById = async (req, res, next) => {
    // try {
      const {contactId} = req.params;
      const result = await contacts.removeContact(contactId);
      if(!result) {
        throw HttpError(404, "Not found");
      }
      res.json({
        message: "contact deleted"
      })
    // } catch (error) {
    //   next(error)
    // }
  }

  const updateById = async (req, res, next) => {
    // try {
    //  const {error} = addSchema.validate(req.body);
    //  if(error) {
    //    throw HttpError(400, {"message": "missing fields"});
    //  }
     const {contactId} = req.params;
     const result = await contacts.updateContact(contactId, req.body);
     if(!result) {
       throw HttpError(404, "Not found");
     }
     res.json(result);
 
    // } catch (error) {
    //  next(error);
    // }
 }

  module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    removeById: ctrlWrapper(removeById),
    updateById: ctrlWrapper(updateById),
  }