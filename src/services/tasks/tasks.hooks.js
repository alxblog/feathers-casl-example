const { authenticate } = require('@feathersjs/authentication').hooks;
const { authorize } = require('feathers-casl').hooks;
const { defineAbilitiesFor } = require('../authentication/authentication.abilities')

const availableFields = (context) => {
  console.log('called')
  const { rawAttributes } = context.service.Model;
  return Object.keys(rawAttributes);
}

const modelName = (context) => {
  console.log("modelName", context.path)
  return (context.path)
}

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [
      authorize() // make sure this hook runs always last
    ],
    get: [
      authorize() // make sure this hook runs always last
    ],
    create: [
      authorize() // make sure this hook runs always last
    ],
    update: [
      authorize() // make sure this hook runs always last
    ],
    patch: [
      authorize() // make sure this hook runs always last
    ],
    remove: [
      authorize() // make sure this hook runs always last
    ]
  },

  after: {
    all: [
      context => {
        // console.log('context', context)
        const { user } = context.params;
        console.log('user', user)
        if (!user) return context;
        const ability = defineAbilitiesFor(user);
        context.params.ability = ability;
        context.params.rules = ability.rules;

        return context;
      },
      authorize(), // make sure this hook runs always first
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
