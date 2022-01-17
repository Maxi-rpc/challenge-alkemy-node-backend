import bcrypt from "bcrypt";

export const encryptarPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const createUser = (email: string, password: string) => {
  let validarCampos: boolean;

  if (email === "" || password === "") {
    validarCampos = false;
  } else {
    validarCampos = true;
  }

  return validarCampos;
};
