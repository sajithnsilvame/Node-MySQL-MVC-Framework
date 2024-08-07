const Post = require("../Models/Post");

class PostController {
  // Store a newly created resource in storage.
  static async store(req, res) {
    // write your code here
  }

  // Get all the resources in storage.
  static async getAllPosts(req, res) {
    try {
      // Fetch all posts
      const posts = await Post.findAll({
        attributes: [
          "ID",
          "post_author",
          "post_date",
          "post_content",
          "post_title",
          "post_excerpt",
          "post_status",
          "comment_status",
          "ping_status",
          "post_name",
          "guid",
          "post_type",
          "comment_count",
        ],
        // You can add conditions or ordering here if needed
        // where: { post_status: 'publish' }, // example condition
        // order: [['post_date', 'DESC']], // example ordering
      });

      // Respond with the fetched posts
      res.status(200).json(posts);
    } catch (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Get the specified resource in storage
  static async getById(req, res) {
    // write your code here
  }

  //  Update the specified resource in storage
  static async updateById(req, res) {
    // write your code here
  }

  //  Delete the specified resource from storage.
  static async deleteById(req, res) {
    // write your code here
  }
}

module.exports = PostController;
