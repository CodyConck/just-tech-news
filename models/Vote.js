const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//creating a through table that relates data from the User/Posts tables using primary keys
class Vote extends Model { }

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        //user_id field that holds primary key value of a user, used to indicate ownership by the User model. Connects Vote model data with User model
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //same as above, relates Vote model data to Post model
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);

module.exports = Vote;