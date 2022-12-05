import express from 'express';
import cors from "cors";

import { sentencesRoutes } from "./api/sentences/sentences-routes.js";
import { wordTypeRoutes } from "./api/word-types/word-type-routes.js";
import { wordRoutes } from "./api/words/word-routes.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/api/test", (req, res) => {
    res.send({
        host: process.env.HOST,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        DB: process.env.DB
    });
});


app.use("/api/sentences", sentencesRoutes);
app.use("/api/wordTypes", wordTypeRoutes);
app.use("/api/words", wordRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

