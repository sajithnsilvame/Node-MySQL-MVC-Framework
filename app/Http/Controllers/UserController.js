const User = require("../Models/User"); // Adjust path as needed

class UserController {
  static async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      // Fetch all users but avoid sending sensitive data like passwords
      const users = await User.findAll({
        attributes: [
          "ID",
          "user_login",
          "user_nicename",
          "user_email",
          "user_url",
          "user_registered",
          "user_status",
          "display_name",
        ],
      });
      res.status(200).json(users);
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (err) {
      console.error("Error fetching user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async updateUserById(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updated = await User.update(updateData, {
        where: { id },
        returning: true,
      });

      if (!updated) {
        return res.status(404).json({ error: "User not found" });
      }

      const updatedUser = await User.findByPk(id);
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async deleteUserById(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({
        where: { id },
      });

      if (!deleted) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = UserController;
