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
exports.deleteCompany = exports.updateCompany = exports.createCompany = exports.getCompanyById = exports.getAllCompanies = void 0;
const utils_1 = require("../data/utils");
//GET ALL COMPANIES
const getAllCompanies = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(function (resolve, reject) {
        let companies;
        try {
            companies = (0, utils_1.readFile)();
        }
        catch (error) {
            (0, utils_1.writeFile)([]);
            companies = (0, utils_1.readFile)();
        }
        resolve(JSON.parse(companies));
    });
});
exports.getAllCompanies = getAllCompanies;
//GET A PARTICULAR COMPANY BY ID
const getCompanyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise((resolve, reject) => {
        const company = companies.find((c) => c.id === id);
        resolve(company);
    });
});
exports.getCompanyById = getCompanyById;
//CREATE COMPANY
const createCompany = (company) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise(function (resolve, reject) {
        let generateId;
        let createdDate = new Date().toISOString();
        let updatedDate = new Date().toISOString();
        if (companies.length === 0) {
            generateId = 1;
        }
        else {
            generateId = Number(companies[companies.length - 1].id) + 1;
        }
        const newCompany = Object.assign({ id: generateId, createdAt: createdDate, updatedAt: updatedDate }, company);
        companies.push(newCompany);
        (0, utils_1.writeFile)(companies);
        resolve(newCompany);
    });
});
exports.createCompany = createCompany;
//UPDATE COMPANY
const updateCompany = (id, company) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise(function (resolve, reject) {
        let updatedDate = new Date().toISOString();
        const index = companies.findIndex((d) => d.id === id);
        companies[index] = Object.assign({ id, updatedAt: updatedDate }, company);
        (0, utils_1.writeFile)(companies);
        resolve(companies[index]);
    });
});
exports.updateCompany = updateCompany;
//DELETE COMPANY
const deleteCompany = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise(function (resolve, reject) {
        companies = companies.filter((e) => e.id !== id);
        console.log(companies);
        (0, utils_1.writeFile)(companies);
        resolve();
    });
});
exports.deleteCompany = deleteCompany;
