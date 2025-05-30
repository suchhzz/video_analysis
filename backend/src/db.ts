import sequelize from "./sequelize";

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to DB has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;