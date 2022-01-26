import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index";
import models from "../database/models/index";

const encryptarPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};

const comparePassword = async (password: string, hashPass: string) => {
	return await bcrypt.compare(password, hashPass);
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
	let token = "";
	// buscar en db
	const user = await models.User.findOne({ where: { email: email } });
	if (user) {
		// compare password
		const ifCompare = await comparePassword(password, user.password);
		if (ifCompare) {
			token = createToken(email);
		}
	}

	return token;
};

export const createUser = async (email: string, password: string) => {
	let user = {
		email: email,
		// hash pass
		password: await encryptarPassword(password),
	};
	let message = "";

	// buscar en db
	const ifExist = await models.User.findOne({ where: { email: user.email } });
	if (ifExist) {
		message = "email ya registrado";
	} else {
		// crear en db
		await models.User.create(user);
		message = "email registrado con exito";
	}

	return message;
};
