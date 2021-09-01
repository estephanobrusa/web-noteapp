const app = require("./app");

//server listening
app.listen(
  app.get("port"),
  console.log("server listening on port:", app.get("port"))
);
