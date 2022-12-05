import { WordController} from "./word-controller.js";
import express from "express";

const controller = new WordController();
const wordRoutes = express.Router();

wordRoutes.get('/:id', controller.words);

export { wordRoutes };
