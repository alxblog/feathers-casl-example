const { authenticate } = require('@feathersjs/authentication').hooks;
const { defineAbilitiesFor } = require('../authentication/authentication.abilities')

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword('password')],
    update: [hashPassword('password'), authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      /* context => {
        // console.log('context', context)
        const user = context.result;
        console.log('user', user)
        if (!user) return context;
        const ability = defineAbilitiesFor(user);
        // context.result.ability = ability;
        // context.result.rules = ability.rules;

        return context;
      }, */
      // Make sure the password field is never sent to the client      
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
