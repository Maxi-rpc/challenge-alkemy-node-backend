import { DataTypes } from "sequelize";
import sequelize from "../index";

const Movie = sequelize.define("movie", {
	imagen: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	titulo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	fecha_creacion: {
		type: DataTypes.DATE,
	},
	calificacion: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

export default Movie;
