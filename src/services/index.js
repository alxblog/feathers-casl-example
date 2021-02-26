const users = require('./users/users.service.js');
const tasks = require('./tasks/tasks.service.js');
const posts = require('./posts/posts.service.js');
const authentication = require('./authentication/authentication.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tasks);
  app.configure(posts);
  app.configure(authentication);
};
