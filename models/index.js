const User =require('./User');
const Post = require('./Post');

//create model associations between models User and Post (this is a one-to-many relationship) This association creates the reference for the id column in the User model to link to the corresponding foreign key pair, which is the user_id in the Post model.
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//make the reverse association, definite relationship of the post model to the user model. Inferred constraint is that a post can belong to one user, but not many users.
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };