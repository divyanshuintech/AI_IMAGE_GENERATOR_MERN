import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import express from "express"
import PostRouter from "./routes/post.routes.js"
import GenerateImageRouter from "./routes/generate.routes.js"

const app = express();

//Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.use("/api/post", PostRouter)
app.use("/api/generate", GenerateImageRouter)


//Default get route
app.get("/", async (req, res) => {
    res.status(200).send({ message: "Hello Developer!" });
});

//Function to connect database
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("Database Connected Successfully!"))
        .catch((err) => {
            console.log("Database Connection Failed!!")
            console.log(err)
        })
}


//Function to start the server
const startServer = async () => {
    try {
        connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on Port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log(error)
    }
}

startServer();