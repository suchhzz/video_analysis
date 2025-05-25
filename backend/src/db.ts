import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('video_analysis', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to DB has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;