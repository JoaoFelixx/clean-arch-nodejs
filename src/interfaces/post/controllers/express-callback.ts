import { Request, Response } from 'express'

const makeCallback = (request: Request, response: Response) => {
  (func: Function) => {
    func(request)
  }
}

export { makeCallback };