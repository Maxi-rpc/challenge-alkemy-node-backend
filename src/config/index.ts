import dotenv from "dotenv";

dotenv.config();

export default {
	PORT: process.env.PORT || 4000,
	TOKEN: process.env.TOKEN || "tokentest",
};
