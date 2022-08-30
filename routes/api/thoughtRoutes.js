const router = require('express').Router();

const { thoughts, users } = require('../models');

module.exports = {
    getThoughts(req, res) {
      thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
      thoughts.findOne({ _id: req.params.thougthId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new post
    createThought(req, res) {
      thoughts.create(req.body)
        .then((thought) => {
          return user.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
          );
        })
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'thought created, but found no user with that ID' })
            : res.json('Created the thought')
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  };