const express=require('express');
const router=express.Router()

const cricketController=require('../controller/record');

router.post('/addData' , cricketController.postData);
router.post('/updateData/:id' , cricketController.updatePlayerData);
router.get('/getData/:name' , cricketController.getPlayerData);
module.exports = router;