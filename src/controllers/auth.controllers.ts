import { Request, Response } from "express";
import { validateString } from "../libs/index";
import { authModel } from "../models/index.models";

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	let data = {
		message: "",
		token: "",
	};

	if (!validateString(email) || !validateString(password)) {
		data.message = "Los campos no pueden estar vacios";
	} else {
		if ((data.token = await authModel.login(email, password))) {
			data.message = "Login correcto, incluir token en headers";
		} else {
			data.message = "Email o Password incorrectos";
		}
	}

	res.json(data);
};

export const register = (req: Request, res: Response) => {
	const { email, password } = req.body;
	res.json({
		message: "controller register",
		email: email,
		password: password,
	});
};
