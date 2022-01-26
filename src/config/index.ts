import dotenv from "dotenv";

dotenv.config();

export default {
	// port
	PORT: process.env.PORT || 4000,
	// token
	TOKEN: process.env.TOKEN || "tokentest",
	// database
	DATABASE: "db_alkemy_nodejs",
	USERNAME: "root",
	PASSWORD: "",
	HOST: "localhost",
};
