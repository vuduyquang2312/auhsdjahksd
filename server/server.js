const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");
const initTelegramBot = require("./telegram/bot");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Lưu io instance vào app để có thể sử dụng trong routes
app.set("io", io);

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDB connection error:", error));

// Khởi động bot Telegram
initTelegramBot(io);

// Routes
app.use("/api", bookingRoutes);

// Socket.IO
io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
