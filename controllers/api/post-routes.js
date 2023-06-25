// Imports
const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to create a new blog post
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to update an existing blog post

// Route to delete an existing blog post

// Exports
module.exports = router;
