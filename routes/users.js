var express = require('express');
var router = express.Router();
const user = require('../models/userModel');

/**
 * GET users listing.
 */
router.get('/users', function(req, res, next) {
  user.getUsers((err, data) => {
      res.json(data);
  })
});

/**
 * POST new user
 */
router.post('/users/new', (req, res) => {
  const userData = {
      id: null,
      usuario: req.body.usuario,
      email: req.body.email,
      contrasenia: req.body.contrasenia
  };
  user.insertUser(userData, (err, data) => {
      if(data && data.insertedID) {
          res.json({
              success: true,
              msg: 'Inserted user',
              data: data
          })
      } else {
          res.json({
              success: false
          })
      }
  });
});

/**
 * Update existing user
 */
router.put('/users/update/:id', (req, res) => {
  const userData = {
      id: req.params.id,
      usuario: req.body.usuario,
      email: req.body.email,
      contrasenia: req.body.contrasenia
  };
  user.updateUser(userData, (err, data) => {
      if(data && data.msg) {
          res.json({
              success: true,
              msg: 'Updated user',
              data: data
          })
      } else {
          res.json({
              success: false
          })
      }
  });
});

/**
 * Delete user
 */
router.delete('/users/delete/:id', (req, res) => {
  user.deleteUser(req.params.id, (err, data) => {
      if(data && (data.msg === "Deleted user" || data.msg === "Nonexistent user")) {
          res.json({
              success: true,
              data
          })
      } else {
          res.json({
              success: false
          })
      }
  });
});


module.exports = router;