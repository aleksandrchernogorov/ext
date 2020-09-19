const mongoose = require('mongoose');
const express = require('express');
const Profiles = require('./userModel');
const Exercises = require('./exerciseModel.js');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.route('/new-user')
.post((req, res, next) => {
  console.log(req.body)
  Profiles.create(req.body)
  .then((user) => {
    res.json(user);
  }, err => res.json(err))
  .catch(err => res.json(err));
});

userRouter.route('/add')
.post((req, res, next) => {
  Exercises.create(req.body)
  .then((exercise) => {
    res.json(exercise);
  }, err => res.json(err))
  .catch(err => res.json(err));
});

userRouter.route('/log')
.get((req, res, next) => {
  Exercises.findOne(req.params.userId)
  .then((exlist) => {
    res.json(exlist);
  }, err => res.json(err))
  .catch(err => res.json(err));
});

module.exports = userRouter;