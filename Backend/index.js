import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import { app, server } from "./SocketIO/server.js";
import { fileURLToPath } from "url";

dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);



// deployment

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const rootPath = path.join(__dirname, ".."); // ⬅ go to project root

  app.use(express.static(path.join(rootPath, "frontend", "dist")));

  app.use((req, res) => {
    res.sendFile(
      path.join(rootPath, "frontend", "dist", "index.html")
    );
  });
}



server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});

