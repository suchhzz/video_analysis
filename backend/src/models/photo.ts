import { CreationOptional, DataTypes, Model, Optional, Sequelize } from 'sequelize';

type PhotoAttributes = {
    id: number;
    url: string;
    createdAt?: Date;
    updatedAt?: Date;
}

type PhotoCreationAttributes = Optional<PhotoAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export default class Photo extends Model<PhotoAttributes, PhotoCreationAttributes> {
    declare id: CreationOptional<number>;
    declare url: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    static initialize(sequelize: Sequelize) {
        Photo.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            }
        }, {
            sequelize,
            tableName: 'photos',
            timestamps: true,
        })
    }
}