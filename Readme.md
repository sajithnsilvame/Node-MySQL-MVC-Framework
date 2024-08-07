## MVC Architecture with Node.js and Express.js-MySQL DB support

This project implements the Model-View-Controller (MVC) architectural pattern using Node.js and Express.js. MVC is a widely used design pattern for structuring web applications, providing a clear separation of concerns between the different components of the application.

### Components:

- **Model**: Represents the data and business logic of the application. Models interact with the database or any external data source.

- **View**: Responsible for presenting the data to the user. Views are typically rendered using templates and are served to the client.

- **Controller**: Acts as an intermediary between the Model and the View. Controllers handle user input, process requests, and update the Model accordingly. They also decide which View to render in response to a request.

### Features:

- **Easy Generation**: This project provides commands to generate Controllers, Models, and Middleware effortlessly using npm scripts. This simplifies the creation of new components and ensures adherence to the MVC architecture.

- **Express.js Integration**: Built on top of Express.js, a popular web framework for Node.js, making it easy to handle HTTP requests, routes, and middleware.

### Getting Started:

1. Clone this repository `https://github.com/sajithnsilvame/Node-MySQL-MVC-Framework.git`
2. Install dependencies using `npm install`.
3. Setup the database credentials in the `.env` file. Choose either MongoDB or MySQL and configure the respective database credentials:

    
    **For MySQL:**
    ```
    MYSQL_DB_HOST = localhost
    MYSQL_DB_USER = your_db_username
    MYSQL_DB_PASSWORD = your_db_password
    MYSQL_DB_NAME = your_db_name
    ```

4. Start the server using `npm run start`.
5. Visit `http://localhost:8000` in your browser to view the application.


### Usage:

- **Generating Components**: Use npm scripts to generate Controllers, Models, and Middleware. For example:
  - To generate a new Controller: `npm run make:controller <controller_name>`
  
    Example: `npm run make:controller ProductController`

  - To generate a new Model: `npm run make:model <model_name>`

    Example: `npm run make:model Product`
  
  - To generate new Controller & Model: `npm run make:controller <controller_name>`

    Example: `npm run make:controller:model Product`

  - To generate a new Middleware: `npm run make:middleware <middleware_name>`

    Example: `npm run make:middleware: AuthMiddleware`

- **Make Migtation & migrate to the database** 
  - To generate a new Model with migration files: `npm run make:model <Model_Name> -- -m`

    Example: `npm run make:model Product -- -m`

  - Migrate the files to the MySQL Database: `npm run migrate`

- **Work with Seeders**
  - To Make a seeder file: `npm run make:seeder <Seeder_Name>`

    Example: `npm run make:seeder ProductSeeder`

  - To seed the database: `npm run seed`  

- **Creating Routes**: routes are defined in the appropriate Controller files within the `routes` directory. Each route specifies the corresponding Controller action to handle the request.

```const { Router } = require("express");
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

```

- **Interacting with the Database**: Implement database operations within the Model files. Use ORMs (Object-Relational Mappers) like Sequelize for seamless interaction with relational or non-relational databases.

### Contributing:

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.

#### Author

- GitHub: [https://github.com/sajithnsilvame](https://github.com/sajithnsilvame)
- Twitter: [https://x.com/SajithNSilvame](https://x.com/SajithNSilvame)
- LinkedIn: [https://www.linkedin.com/in/sajith-nishantha-silva](https://www.linkedin.com/in/sajith-nishantha-silva)
- Facebook: [https://www.facebook.com/sajithnsilva.me](https://www.facebook.com/sajithnsilva.me)
- Instagram: [https://www.instagram.com/sajithnsilvame](https://www.instagram.com/sajithnsilvame)

#### License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


