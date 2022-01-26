import app from "./app";
import { testDataBase } from "./libs/index"; // eliminar
function main() {
	app.listen(app.get("port"));
	console.log("Server run on port: " + app.get("port"));
	// test db
	testDataBase();
}

main();
