const { Router } = require("express");
const UserController = require("../app/Http/Controllers/UserController.js"); // Changed to .js
const AuthMiddleware = require("../app/Http/Middlewares/AuthMiddleware.js");
const PostController = require("../app/Http/Controllers/PostController.js");
const CategoryController = require("../app/Http/Controllers/CategoryController.js");
const Route = Router();

// define all the API routes here

// Root route
Route.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// User routes
Route.get("/users", [AuthMiddleware, UserController.getAllUsers]);


// Posts routes
Route.get("/posts", [PostController.getAllPosts]);

// Category routes
Route.get("/categories", [CategoryController.getAllCategories]);

module.exports = Route;
