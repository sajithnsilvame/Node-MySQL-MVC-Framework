const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const sequelize = require("./database/database.js"); 
const Routes = require("./routes/routers.js"); 

// Load environment variables
dotenv.config();


const app = express();

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// Connect to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Remote MySQL database connected");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1); // Exit process if the database connection fails
  });

// Set up routes
app.use("/", Routes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
