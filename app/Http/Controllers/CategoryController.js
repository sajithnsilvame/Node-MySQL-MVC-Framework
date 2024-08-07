const Category = require("../Models/Category");

class CategoryController {
  // Store a newly created resource in storage.
  static async store(req, res) {
    // write your code here
  }

  // Get all the resources in storage.
  static async getAllCategories(req, res) {
    try {
      // Fetch all categories
      const categories = await Category.findAll({
        attributes: ["term_id", "name", "slug", "term_group"],
      });

      // Respond with the fetched categories
      res.status(200).json(categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
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

module.exports = CategoryController;
