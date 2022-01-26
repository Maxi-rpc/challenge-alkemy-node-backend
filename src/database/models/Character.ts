import { DataTypes } from "sequelize";
import sequelize from "../index";

const Character = sequelize.define("character", {
	imagen: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	edad: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	peso: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	historia: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});

export default Character;
