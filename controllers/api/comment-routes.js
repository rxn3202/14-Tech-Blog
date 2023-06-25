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
router.get('/', async (req, res) => {
    try {
      const comments = await Comment.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Post,
            attributes: ['id'],
          },
        ],
      });
  
      res.status(200).json(comments);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

// UPDATE Comment
router.put('/:id', async (req, res) => {
    try {
      const [rowsAffected] = await Comment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (rowsAffected === 0) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json({ message: 'Comment updated!' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

// DELETE Comment
router.delete('/:id', async (req, res) => {
    try {
      const rowsAffected = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (rowsAffected === 0) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json({ message: 'Comment deleted!' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  
// Exports
module.exports = router;
