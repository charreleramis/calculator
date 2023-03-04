
const express = require('express');
const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const { pool } = require("../../config/queries");


// @route   GET "/"
// @descr   Index route
// @access  Public
router.get('/', (req, res) => {
    res.send('App route');
});


router.get('/sample', (req, res) => {
    try {
        pool.query('SELECT * FROM users', (error, results) => {
            if (error) {
              throw error
            }
            console.log(results.rows);
        })

        return res.send({ 'data': {'name': 'cha' }});
    } catch (error) {
        console.log(error);
    }
});


// @route   GET app/user
// @descr   User entry to database
// @access  Public
router.post('/user', [
    check('os', 'OS is required').not().isEmpty()
] , async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { os } = req.body;
        if( os == "ios" || os == "android") {
            const uid = uuidv4();
            const timestamp = new Date(1677810764494).toISOString();

            const data = {'user': { 'uuid': uid }}
            jwt.sign(
                data, 
                config.get('jwtSecret'), 
                { expiresIn: 360000 },
                (err, token) => {
                    if( err ) throw err;
                    pool.query('INSERT INTO users (uid, token, timestamp) VALUES ($1, $2, $3 )', [`${uid}`, `${token}`, `${timestamp}` ]);
                    return res.json({'user': { 'uuid': uid, 'token': token }});
                }
                );

        } else {
            return res.status(400).send('Invalid Post data')
        }
    } catch (error) {
        console.log(error);
    }
});


// @route   GET app/user
// @descr   Get the history list
// @access  Private
router.get('/user/:uid', auth , async (req, res) => {
    try {
        const { uid } = req.params;

        // const data = await pool.query(`SELECT * FROM history where uid = '${uid}'`);
        // if(data) {
        //     return data.rows;
        // } else {
        //     return res.send([]);
        // }

        pool.query(`SELECT * FROM history where uid = '${uid}'`, (error, results) => {
            if (error) {
              throw error
            }
            if(results) {
                return res.send(results.rows);
            } else {
                return res.send([]);
            }
        })

    } catch (error) {   
        console.log(error);
    }
});


// @route   POST app/user
// @descr   Insert data to database
// @access  Private
router.post('/user/:uid/transaction', [
    auth,
    check('calculation', 'Calculation is required').not().isEmpty(),
    check('total', 'Total is required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { calculation, total } = req.body;
        const { uid } = req.params;
        
        const id = uuidv4();
        const timestamp = new Date(1677810764494).toISOString();
        const isimportant = false;

        pool.query('INSERT INTO history (id, calculation, total, timestamp, uid, isimportant) VALUES ($1, $2, $3, $4, $5, $6)', [`${id}`, `${calculation}`, `${total.toString()}`, `${timestamp}`, `${uid}`, `${isimportant}` ]);

        return res.send('user transaction');
    } catch (error) {
        console.log(error);
    }
});


// @route   DELETE app/user/id/transaction
// @descr   Delete data to database
// @access  Private
router.delete('/user/:uid/transaction', auth, async (req, res) => {
    try {
        const { uid } = req.params;
        pool.query(`DELETE FROM history where uid = '${uid}'`);
        res.send('user delete transaction');
    } catch (error) {
        console.log(error);
    }
});



// @route   POST app/user/update
// @descr   Update is important in history
// @access  Private
router.post('/user/update', auth, async (req, res) => {
    try {
        const { isimportant, historyId } = req.body;

        console.log(isimportant, historyId);

        pool.query('UPDATE history SET isimportant = $1 WHERE id = $2', [isimportant, historyId]);
        
        console.log(`Data updated successfully`);

        res.send('user delete transaction');

    } catch (error) {
        console.log(error);
    }
});



// @route   GET app/user/all
// @descr   Test get all the history
// @access  Public
router.get('/user/all', async (req, res) => {
    try {
        console.log('all data');
        const data = await pool.query(`SELECT * FROM history`);
        res.send(data.rows);
    } catch (error) {
        console.log(error);
    }
});



module.exports =  router;