const { authenticate } = require('@feathersjs/authentication').hooks;
const { authorize } = require('feathers-casl').hooks;

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [
      (context) => {
        console.log(context.params.user) //debug purpose
        console.log(context.params.ability) //debug purpose
      },
      authorize({
        checkAbilityForInternal: true,
      }) // make sure this hook runs always last
    ],
    get: [
      authorize({
        checkAbilityForInternal: true,
      }) // make sure this hook runs always last
    ],
    create: [
      authorize({
        checkAbilityForInternal: true,
      }) // make sure this hook runs always last
    ],
    update: [
      authorize({
        checkAbilityForInternal: true,
      }) // make sure this hook runs always last
    ],
    patch: [
      authorize({
        checkAbilityForInternal: true,
      }) // make sure this hook runs always last
    ],
    remove: [
      authorize({
        checkAbilityForInternal: true,
      }) // make sure this hook runs always last
    ]
  },

  after: {
    all: [
      authorize({
        checkAbilityForInternal: true,
      }), // make sure this hook runs always first
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
