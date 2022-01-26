import { Sequelize } from "sequelize";
import config from "../config/index";
const sequelize = new Sequelize(
	config.DATABASE,
	config.USERNAME,
	config.PASSWORD,
	{
		host: config.HOST,
		dialect: "mysql",
	}
);

export default sequelize;
