const path = require("path");
const rootDir = require("./utils/pathUtils");
const cors = require("cors");
require('dotenv').config();
const env = process.env;

const express = require("express");
const {error} = require("./controllers/error");

const { default: mongoose } = require("mongoose");
const todoItemsRouter = require("./routes/todoitemsRouter");



const DB_PATH = process.env.MONGODB_URI;


const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(rootDir, "public")));


app.use('/api/todo', todoItemsRouter);

app.use(error);

const PORT = process.env.PORT || 3000;

mongoose.connect(DB_PATH).then(() => {
    console.log('Connect to mongo db');
    app.listen(PORT, () => {
        console.log(`Server running on the address http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log('Error while connecting Database', error);
})


