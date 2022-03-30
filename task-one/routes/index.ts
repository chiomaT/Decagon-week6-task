import express, { Application, Request, Response, NextFunction } from "express";
let router = express.Router();
import {
  get,
  findById,
  create,
  update,
  remove,
} from "../controller/companyController";
/* GET home page. */
router.get("/companies", get);
router.get("/companies/:id", findById);
router.post("/companies", create);
router.put("/companies/:id", update);
router.delete("/companies/:id", remove);

export default router;
