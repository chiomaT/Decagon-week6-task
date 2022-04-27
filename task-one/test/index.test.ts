import app from "../app";
import request from "supertest";
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
    it("returns status code 200 if all parameters are passed", async () => {
      const res = await request(app).post("/companies").send(products);
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
    });
  });
});
describe("getAll request", () => {
  describe("given the product exist", () => {
    it("returns status code 200 if all product does exist", async () => {
      const res = await request(app).get(`/companies`);
      expect(res.statusCode).toEqual(200);
    });
  });
});
describe("getById request", () => {
  describe("given the product exist", () => {
    it("returns status code 200 if the product does exist", async () => {
      const id = 1;
      const res = await request(app).get(`/companies/${id}`);
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
    });
  });
  describe("given the product does not exist", () => {
    it("returns status code 404 if the product does not exist", async () => {
      const id = 70;
      const res = await request(app).get(`/companies/${id}`);
      expect(res.statusCode).toEqual(404);
    });
  });
});
describe("update request", () => {
  describe("given the product does not exist", () => {
    it("returns status code 404 if the product does not exist", async () => {
      const id = 60;
      const res = await request(app).put(`/companies/${id}`).send({
        organization: "hello",
      });
      expect(res.statusCode).toEqual(404);
    });
  });
  describe("updated successfully", () => {
    it("returns status code 200 if the product is updated successfully", async () => {
      const id = 1;
      let res = await request(app).put(`/companies/${id}`).send({
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
    });
  });
});
describe("delete request", () => {
  describe("given the product does not exist", () => {
    it("returns status code 404 if the product does not exist", async () => {
      const id = 60;
      const res = await request(app).delete(`/companies/${id}`);
      expect(res.statusCode).toEqual(400);
    });
  });
  describe("deleted successfully", () => {
    it("returns status code 200 if the product is deleted successfully", async () => {
      const id = 1;
      const res = await request(app).delete(`/companies/${id}`);
      expect(res.statusCode).toEqual(200);
    });
  });
});
