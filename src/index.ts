import app from "./app";

function main() {
  app.listen(app.get("port"));
  console.log("Server run on port: " + app.get("port"));
}

main();
