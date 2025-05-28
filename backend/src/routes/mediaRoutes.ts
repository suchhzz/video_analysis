import { getPhotoList, getPhotoById, createPhoto } from "../controllers/photoController";
import { Router } from "express";

const mediaRouter = Router();

mediaRouter.get('/photos', getPhotoList)
mediaRouter.get('/photos/:id', getPhotoById)
mediaRouter.post('/photos', createPhoto)

export default mediaRouter;