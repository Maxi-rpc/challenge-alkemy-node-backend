import { DataTypes } from "sequelize";
import sequelize from "../index";

const User = sequelize.define("user", {
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default User;
