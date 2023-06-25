// Imports
const router = require('express').Router();
const { Comment, User, Post } = require('../models');

// CREATE Comment
router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create({
      comment_body: req.body.comment_body,
      user_id: req.session.user_id || req.body.user_id,
      post_id: req.body.post_id,
    });

    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// READ all Comments

// UPDATE Comment

// DELETE Comment

// Exports
module.exports = router;
