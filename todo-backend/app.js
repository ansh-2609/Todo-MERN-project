const path = require("path");
const rootDir = require("./utils/pathUtils");
const cors = require("cors");

const express = require("express");
const {error} = require("./controllers/error");

const { default: mongoose } = require("mongoose");
const todoItemsRouter = require("./routes/todoitemsRouter");



const DB_PATH = 'mongodb+srv://root:root26@airbnb-cluster.te04plt.mongodb.net/todo?retryWrites=true&w=majority&appName=airbnb-Cluster';


const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(rootDir, "public")));


app.use('/api/todo', todoItemsRouter);

app.use(error);

const PORT = 3000;

mongoose.connect(DB_PATH).then(() => {
    console.log('Connect to mongo db');
    app.listen(PORT, () => {
        console.log(`Server running on the address http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log('Error while connecting Database', error);
})


