"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.findById = exports.get = void 0;
const model_1 = require("../model/model");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield (0, model_1.getAllCompanies)();
        res.status(200).json(companies);
    }
    catch (error) {
        console.log(error);
    }
});
exports.get = get;
//GET COMPANY BY ID
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, model_1.getCompanyById)(parseInt(req.params.id));
        if (!company) {
            res.status(404).json("company does not exist");
        }
        else {
            res.status(200).json(company);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.findById = findById;
//CREATE COMPANY
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = {
            organization: req.body.organization,
            products: req.body.products,
            marketValue: req.body.marketValue,
            address: req.body.address,
            ceo: req.body.ceo,
            country: req.body.country,
            noOfEmployees: req.body.noOfEmployees,
            employees: req.body.employees,
        };
        const companies = yield (0, model_1.createCompany)(company);
        res.status(200).json(companies);
    }
    catch (error) {
        console.error(error);
    }
});
exports.create = create;
//UPDATE COMPANY
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, model_1.getCompanyById)(parseInt(req.params.id));
        if (!company) {
            res.status(404).json("company does not exist");
        }
        else {
            const update = {
                organization: req.body.organization || company.organization,
                createdAt: company.createdAt,
                products: req.body.products || company.products,
                marketValue: req.body.marketValue || company.marketValue,
                address: req.body.address || company.address,
                ceo: req.body.ceo || company.ceo,
                country: req.body.country || company.country,
                noOfEmployees: req.body.noOfEmployees || company.noOfEmployees,
                employees: req.body.employees || company.employees,
            };
            const companies = yield (0, model_1.updateCompany)(parseInt(req.params.id), update);
            res.status(200).json(companies);
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.update = update;
//DELETE COMPANY
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, model_1.getCompanyById)(parseInt(req.params.id));
        if (!company) {
            res.status(400).json("Company does not exis");
        }
        else {
            yield (0, model_1.deleteCompany)(parseInt(req.params.id));
            res.status(200).json({ message: `Company ${req.params.id} removed` });
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.remove = remove;
