import { Request, Response } from 'express';

type CallbackParams = (req: Request, res: Response) => {}

export const makeCallBack = (controller: CallbackParams): CallbackParams => controller;