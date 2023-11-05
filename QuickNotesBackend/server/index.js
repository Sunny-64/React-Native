require("dotenv").config(); 
const app = require("./app");
const connectDatabase = require("./src/config/db")
const PORT = process.env.PORT || 3000;

const server = () => {
    connectDatabase().then(res => {
        app.listen(PORT, () => {
            console.log(`Server Started At PORT ${PORT}`);
        });
    }).catch(err => {
        console.log(err);
    });
}

server(); 