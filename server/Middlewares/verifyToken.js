const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  if (req.url === '/api/login' || req.method === 'OPTIONS') {
    next()
    return
  }
  let token = req.headers['authorization']
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' })
  }
  jwt.verify(token, 'RuamSahng', function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    }
    req.userId = decoded._id
    req.userObject = decoded
    next()
  })
}
