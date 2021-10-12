const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      id: Joi.string().required(),
      email: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required()
    }
  },
};
