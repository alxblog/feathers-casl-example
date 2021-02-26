const { authenticate } = require('@feathersjs/authentication').hooks;
const { authorize } = require('feathers-casl').hooks;

const availableFields = (context) => {
  const { rawAttributes } = context.service.Model;
  return Object.keys(rawAttributes);
}

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [
      (context) => (console.log('context', context)),
      authorize({
        checkAbilityForInternal: true,
        availableFields
      }) // make sure this hook runs always last
    ],
    get: [
      authorize({
        checkAbilityForInternal: true,
        availableFields
      }) // make sure this hook runs always last
    ],
    create: [
      authorize({
        checkAbilityForInternal: true,
        availableFields
      }) // make sure this hook runs always last
    ],
    update: [
      authorize({
        checkAbilityForInternal: true,
        availableFields
      }) // make sure this hook runs always last
    ],
    patch: [
      authorize({
        checkAbilityForInternal: true,
        availableFields
      }) // make sure this hook runs always last
    ],
    remove: [
      authorize({
        checkAbilityForInternal: true,
        availableFields
      }) // make sure this hook runs always last
    ]
  },

  after: {
    all: [
      authorize({
        checkAbilityForInternal: true,
        availableFields
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
