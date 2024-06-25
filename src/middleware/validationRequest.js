import { AnyZodObject } from "zod";

export const validateRequest = (validSchema) => {
  return async (req, res, next) => {
    try{
      await validSchema.parseAsync({
        body: req.body,
      });
      next();
    }catch(err){
      next(err)
    }
  };
};