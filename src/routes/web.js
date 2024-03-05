const express = require('express');
const {getHomePage,getABC,getTest} = require('../controllers/homeController');
const router = express.Router();

router.get('/',getHomePage);
router.get('/abc',getABC);
router.get('/test',getTest);




module.exports = router;