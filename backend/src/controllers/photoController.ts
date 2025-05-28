import { Request, Response } from 'express';

export const getPhotoList = async (_: Request, res: Response) => {
    res.send('photo list');
}

export const getPhotoById = async (req: Request, res: Response) => {
    res.send('photo by id');
}

export const createPhoto = async (req: Request, res: Response) => {
    res.send('photo created');
}