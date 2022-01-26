import sequelize from "../database/index";
export const validateString = (valor: string) => {
	let isValid: Boolean = true;

	if (valor === "") {
		isValid = false;
	}

	return isValid;
};

export const testDataBase = () => {
	sequelize
		.authenticate()
		.then(() => {
			console.log("Connect to database OK");
		})
		.catch((error) => {
			console.log("Error when connect to database" + error);
		});
};
