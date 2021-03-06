/*
 * Just Kidding
 * models/index.js
 * This script contains the necessary code to define the relational database for jk_db
 * Copyright 2022 Alicia Santidrian, Jess Huang, Leo Wong
 */

const Thread = require('./Thread');
const User = require('./User');
const Post = require('./Post');

Post.belongsTo(Thread, {
	foreignKey: 'thread_id',
});

Thread.hasMany(Post, {
	foreignKey: 'thread_id',
	onDelete: 'CASCADE',
});

Post.belongsTo(User, {
	foreignKey: 'user_id',
});

User.hasMany(Post, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

module.exports = { Thread, User, Post };
