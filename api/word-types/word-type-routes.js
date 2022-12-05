import express from "express";
import { WordTypeController } from "./word-type-controller.js";

const controller = new WordTypeController();
const wordTypeRoutes = express.Router();

wordTypeRoutes.get('/', controller.wordTypes);

export { wordTypeRoutes };
