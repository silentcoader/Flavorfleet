const express = require('express')
const router = express.Router()

router.post('/foodData', (req,res)=> {
    try {
        res.send([global.fooditem,global.foodcategory])
    } catch (error) {
        console.error(error.message);
        res.sendStatus("Server Error")
    }
})

module.exports = router;