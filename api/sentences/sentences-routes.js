import { SentencesController } from "./sentences-controller.js";
import express from "express";

const controller = new SentencesController();
const sentencesRoutes = express.Router();

sentencesRoutes.get('/', controller.sentences);
sentencesRoutes.post('/', controller.create);

export { sentencesRoutes };
