const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const userController = require('../Controllers/user.js')


router.get('/user', auth.isAuthorized, userController.index)
router.put('/user/:key', auth.isAuthorized, userController.update)
router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

// router.post('/verify', function(req, res){
//   var token = req.body.token
//   // console.log(req.body.token)
//   if (!token) {
//     return res.status(403).send({ auth: false, message: 'No token provided.' });
//   }
    
//   jwt.verify(token, 'RuamSahng', function(err, decoded) {
//     if (err) {
//       return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//     }
//     // if everything good, save to request for use in other routes
//     req.userId = decoded.id;
//     return res.status(500).send({ userId: decoded.id, message: 'Succes' });
//     // next();
//   });
// });

module.exports = router;