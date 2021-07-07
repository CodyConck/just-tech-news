const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Post model
class Post extends Model {}

//create fields/columns for Post model
Post.init(
    {
        //defines the Post schema, identified the ID column as primary key and set to autoincrement
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //defined the title column as string value
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        //defined the post url field as String, ensured url is a verified link by using isURL:true
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isURL: true
            }
          },
          //column that determines who posted article, uses references property to establish relationship bt this post and the user by referencing User model, specifically the id column that is defined by the 'key' property
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        }
    },
    {
        sequelize, 
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;