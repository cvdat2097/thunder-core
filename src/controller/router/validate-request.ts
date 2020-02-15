import { validationResult } from 'express-validator';

export default (validations: Array<any>) => {
  return async (req: any, res: any, next: any) => {
    await Promise.all(validations.map(v => v.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json(errors);
  };
};
