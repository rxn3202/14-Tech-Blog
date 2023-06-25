// Imports
const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Route to display the homepage
router.get("/", async (req, res) => {
    try {
 
      const blogPostData = await BlogPost.findAll({
        include: [
          {
            model: User,
            attributes: ["name"],
          },
          {
            model: Comment,
            attributes: ["comment_body"],
          },
        ],
      });
  
      const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
  
      res.render("homepage", {
        blogPosts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

// Route to display a single blog post

// Route to display the dashboard page

// Route to display the create page for a new blog post

// Route to display the edit page for an existing blog post
  
// Route to display the login page

// Export
module.exports = router;