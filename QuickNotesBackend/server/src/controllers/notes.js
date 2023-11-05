const {Notes} = require('../models/index')

exports.create = async (req, res) => {

    const {title, note} = req.body; 

    if(!(title || note) || title.trim() === ""){
        return res.status(400).json({
            message : "invalid data", 
            success : false,
        }); 
    }

    try{
        const newNote = new Notes({
            ...req.body, 
            userId : req.user._id
        }); 
        await newNote.save(); 
        return res.status(200).json({
            success : true, 
            message : "Note Created"
        })
    }   
    catch(err){
        console.log(err); 
        return res.status(500).json({
            success : false, 
            message : err.message,
        })
    }
}

exports.update = async (req, res) => {
    const {title, note} = req.body; 
    const {id} = req.params; 
    
    if(!title && !note){
        return res.status(400).json({
            success : false, 
            message : "Atleast one field required"
        }); 
    }
    try{
        const userNote = await Notes.findById({_id : id}); 

        userNote.title = !title ? userNote.title : title; 
        userNote.note = !note ? userNote.note : note; 
        
        await userNote.save(); 

        res.status(200).json({
            success : true, 
            message : "note Updated"
        }); 
    }
    catch(err){
        console.log(err.message); 
        return res.status(500).json({
            success : false, 
            message : err.message,
        })
    }
}

exports.getUserNotes = async (req, res) => {
    try{
        const notes = await Notes.find({userId : req.user._id}); 
        return res.status(200).json({
            success : true, 
            message : "fetched user notes", 
            data : notes
        }); 
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success : false, 
            message : err.message
        })
    }
}

exports.getNotesById = async(req, res) => {
    try{
        const note = await Notes.findById(req.params.id); 
        return res.status(200).json({
            success : true, 
            message : "fetched note", 
            data : note
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success : false, 
            message : err.message
        })
    }
}

exports.delete = async (req, res) => {
    try{
        await Notes.deleteOne({_id : req.params.id});
        return res.status(200).json({
            success : true, 
            message : "note deleted", 
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success : false, 
            message : err.message
        })
    }
}