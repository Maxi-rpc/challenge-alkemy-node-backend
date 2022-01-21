import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index";

const encryptarPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};

const createToken = (email: string) => {
	const token: string = jwt.sign(
		{
			email: email,
		},
		config.TOKEN
	);
	return token;
};

export const loginUser = async (email: string, password: string) => {
	//let hashPass = await encryptarPassword(password);
	//let compare = await bcrypt.compare(password, hashPass);
	// buscar en db email y pass

	let token = createToken(email);
	return token;
};

export const createUser = (email: string, password: string) => {
	let data: Boolean = true;
	//crear en db

	return data;
};
