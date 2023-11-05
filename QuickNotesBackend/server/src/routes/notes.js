const router = require("express").Router(); 

const {authorization} = require("./../middlewares"); 
const {notesController} = require("./../controllers")

router.use(authorization); 

router.get("/", notesController.getUserNotes); 
router.post("/", notesController.create); 
router.get("/:id", notesController.getNotesById); 
router.put("/:id", notesController.update); 
router.delete("/:id", notesController.delete); 

module.exports = router; 