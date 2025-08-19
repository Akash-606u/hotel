import express from "express";
import bodyParser from "body-parser";
import db from "./db.js"; // Use import for ES Modules
import Person from "./models/Person.js";
import MenuItem from "./models/MenuItem.js";
import personRoutes from "./routes/personRoutes.js";
import menuItemRoutes from "./routes/menuItemRoutes.js"; 

const app = express();

app.use(bodyParser.json()); //req.body

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to Our hotel");
});



app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes);
// Start server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
