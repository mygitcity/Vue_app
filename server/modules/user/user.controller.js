const User = require('./user.model');

/**
 * Get user
 * @returns {User}
 */
async function get(req, res) {
  const {userId} = req.params;

  return User.get(userId)
    .then((user) => {
      res.json(user)
    })
    .catch(e => next(e));
}

/**
 * Create new user
 * @property {string} req.body.id - The id of user.
 * @property {string} req.body.email - The email of user.
 * @returns {User}
 */
 async function create(req, res, next) {
  const rs = await User.get(req.body.id);

  if(rs.length > 0){
    return res.status(400).send("User existed.")
  }

  const user = new User({
    id: req.body.id,
    email: req.body.email
  });


  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

module.exports = { get, create };
