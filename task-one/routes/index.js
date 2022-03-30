"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const companyController_1 = require("../controller/companyController");
/* GET home page. */
router.get("/companies", companyController_1.get);
router.get("/companies/:id", companyController_1.findById);
router.post("/companies", companyController_1.create);
router.put("/companies/:id", companyController_1.update);
router.delete("/companies/:id", companyController_1.remove);
exports.default = router;
