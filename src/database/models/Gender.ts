import { DataTypes } from "sequelize";
import sequelize from "../index";

const Gender = sequelize.define("gender", {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	imagen: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default Gender;
