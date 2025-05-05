import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemon.js";

const app = express();
app.use(cors());
app.use("/api/pokemon", pokemonRouter);

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
