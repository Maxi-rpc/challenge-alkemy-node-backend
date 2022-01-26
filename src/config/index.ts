import dotenv from "dotenv";

dotenv.config();

export default {
	// port
	PORT: process.env.PORT || 4000,
	// token
	TOKEN: process.env.TOKEN || "tokentest",
	// database
	DATABASE: process.env.DATABASE || "db_alkemy_nodejs",
	//USERNAME: process.env.USERNAME || "root",
	USERNAME: "root",
	PASSWORD: process.env.PASSWORD || "",
	HOST: process.env.HOST || "localhost",
};
