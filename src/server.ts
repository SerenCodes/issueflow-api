import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import organisationRoutes from "./routes/organisationRoutes";
import projectRoutes from "./routes/projectRoutes";
import issueRoutes from "./routes/issueRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/organisations", organisationRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/issues", issueRoutes);


app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});