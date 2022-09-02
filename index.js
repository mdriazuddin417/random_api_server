/* 
console.log(values[parseInt(Math.random()*values.length)])
get/user/random
get/user/all
POST/user/save
patch/user/update
PATCH /user/bulk-update
DELETE /user/ delete
*/

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const data = require("./data/data.json");
const UserRouter = require("./routes/v1/user.route");
app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);

//===========================Common Server side Property==============
app.get("/", (req, res) => {
  res.send("Check Server Route");
});
app.all("*", (req, res) => {
  res.send("No route send");
});

app.listen(port, () => {
  console.log("Example running port ", port);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
