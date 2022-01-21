export const validateString = (valor: string) => {
	let isValid: Boolean = true;

	if (valor === "") {
		isValid = false;
	}

	return isValid;
};
