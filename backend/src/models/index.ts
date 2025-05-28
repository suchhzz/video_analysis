import Photo from './photo';
import sequelize from '../sequelize';
import { Sequelize } from 'sequelize';

Photo.initialize(sequelize);

const db = {
    sequelize,
    Sequelize,
    Photo,
};

export default db;
