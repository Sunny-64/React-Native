const express = require("express"); 

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const {
    userRoutes, 
    notesRoutes, 
    authRoutes
} = require("./src/routes"); 

app.use("/", userRoutes); 
app.use("/notes", notesRoutes); 
app.use("/auth", authRoutes); 

module.exports = app; 