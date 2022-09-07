const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtControllers");

// /api/students
router.route("/").get(getThoughts).post(createThought);

// /api/students/:studentId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route("/:ThoughtId/reactions").post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:ThoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
