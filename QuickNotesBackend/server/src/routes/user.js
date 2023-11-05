const router = require("express").Router(); 

const {userController} = require("./../controllers")

router.get("/", (req, res) => {
    res.status(200).json({
        message : "user Route"
    })
})

router.post("/", userController.register); 

module.exports = router; 