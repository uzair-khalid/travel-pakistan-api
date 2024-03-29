/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const router = express.Router();

const {
	createUser,
	fetchUser,
	fetchUsersGraphData,
	fetchAllUsers,
} = require('../controllers/user');
const { verifyDuplicateUsername, verifyUser } = require('../helpers/middlewares');

router.post('/sign-up', verifyDuplicateUsername, createUser);
router.post('/sign-in', verifyUser, fetchUser);
router.get('/users-graph', fetchUsersGraphData);
router.get('/users', fetchAllUsers);

module.exports = router;
