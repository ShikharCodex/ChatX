import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./utils/socket.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT || 3000;

// 🔥 FIX: recreate __filename and __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 🔥 Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../frontend/dist");

  app.use(express.static(frontendPath));

  // ✅ FIXED fallback (NO "*")
  
  app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}
// Start server
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server is Running on PORT " + PORT);
  });
});
