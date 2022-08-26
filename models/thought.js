const { Schema, model } = require("mongoose");
const reactionSchema = require('./reaction');


const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
        get: timestamp => timestamp,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema,
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
thoughtsSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
});

const thoughts = model("thoughts", thoughtsSchema);

module.exports = thoughtsSchema;
