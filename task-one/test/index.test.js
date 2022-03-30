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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
let products = {
    organization: "helo",
    products: ["developers", "pizza"],
    marketValue: "90%",
    address: "hello",
    ceo: "honour",
    country: "2",
    noOfEmployees: 2,
    employees: ["james bond", "jackie chan"],
};
describe("post request", () => {
    describe("Post request with all parameters complete", () => {
        it("returns status code 200 if all parameters are passed", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).post("/companies").send(products);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
                updatedAt: expect.any(String),
                id: expect.any(Number),
                organization: "helo",
                createdAt: expect.any(String),
                products: ["developers", "pizza"],
                marketValue: "90%",
                address: "hello",
                ceo: "honour",
                country: "2",
                noOfEmployees: 2,
                employees: ["james bond", "jackie chan"],
            });
        }));
    });
    describe("Post request with all parameters not complete", () => {
        it("returns status code 400 if a parameter is missing", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default)
                .post("/companies")
                .send({
                organization: "hello",
                marketValue: "90%",
                address: "hello",
                noOfEmployees: 2,
                employees: ["james bond", "jackie chan"],
            });
            expect(res.statusCode).toEqual(400);
        }));
    });
});
describe("getAll request", () => {
    describe("given the product exist", () => {
        it("returns status code 200 if all product does exist", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get(`/companies`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual([
                {
                    updatedAt: expect.any(String),
                    id: expect.any(Number),
                    organization: "helo",
                    createdAt: expect.any(String),
                    products: ["developers", "pizza"],
                    marketValue: "90%",
                    address: "hello",
                    ceo: "honour",
                    country: "2",
                    noOfEmployees: 2,
                    employees: ["james bond", "jackie chan"],
                },
            ]);
        }));
    });
});
describe("getById request", () => {
    describe("given the product exist", () => {
        it("returns status code 200 if the product does exist", () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 1;
            const res = yield (0, supertest_1.default)(app_1.default).get(`/companies/${id}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
                updatedAt: expect.any(String),
                id: expect.any(Number),
                organization: "helo",
                createdAt: expect.any(String),
                products: ["developers", "pizza"],
                marketValue: "90%",
                address: "hello",
                ceo: "honour",
                country: "2",
                noOfEmployees: 2,
                employees: ["james bond", "jackie chan"],
            });
        }));
    });
    describe("given the product does not exist", () => {
        it("returns status code 400 if the product does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 70;
            const res = yield (0, supertest_1.default)(app_1.default).get(`/companies/${id}`);
            expect(res.statusCode).toEqual(400);
        }));
    });
});
describe("update request", () => {
    describe("given the product does not exist", () => {
        it("returns status code 400 if the product does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 60;
            const res = yield (0, supertest_1.default)(app_1.default).put(`/companies/${id}`).send({
                organization: "hello",
            });
            expect(res.statusCode).toEqual(400);
        }));
    });
    describe("updated successfully", () => {
        it("returns status code 200 if the product is updated successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 1;
            let res = yield (0, supertest_1.default)(app_1.default).put(`/companies/${id}`).send({
                organization: "hello",
            });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
                updatedAt: expect.any(String),
                id: expect.any(Number),
                organization: "hello",
                createdAt: expect.any(String),
                products: ["developers", "pizza"],
                marketValue: "90%",
                address: "hello",
                ceo: "honour",
                country: "2",
                noOfEmployees: 2,
                employees: ["james bond", "jackie chan"],
            });
        }));
    });
});
describe("delete request", () => {
    describe("given the product does not exist", () => {
        it("returns status code 400 if the product does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 60;
            const res = yield (0, supertest_1.default)(app_1.default).get(`/companies/${id}`);
            expect(res.statusCode).toEqual(400);
        }));
    });
    describe("deleted successfully", () => {
        it("returns status code 200 if the product is deleted successfully", () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 1;
            const res = yield (0, supertest_1.default)(app_1.default).delete(`/companies/${id}`);
            expect(res.statusCode).toEqual(200);
        }));
    });
});
