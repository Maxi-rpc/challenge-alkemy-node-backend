import { createUser, loginUser } from "./auth.models";

export const authModel = {
	create: createUser,
	login: loginUser,
};
