import { Request, Response } from "express";
import {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../model/model";

export const get = async (req: Request, res: Response) => {
  try {
    const companies = await getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    console.log(error);
  }
};

//GET COMPANY BY ID
export const findById = async (req: Request, res: Response) => {
  try {
    const company: any = await getCompanyById(parseInt(req.params.id));
    if (!company) {
      res.status(404).json("company does not exist");
    } else {
      res.status(200).json(company);
    }
  } catch (error) {
    console.log(error);
  }
};

//CREATE COMPANY
export const create = async (req: Request, res: Response) => {
  try {
    const {
      organization,
      products,
      marketValue,
      address,
      ceo,
      country,
      noOfEmployees,
      employees,
    } = req.body;
    const company: any = {
      organization,
      products,
      marketValue,
      address,
      ceo,
      country,
      noOfEmployees,
      employees,
    };
    const companies = await createCompany(company);
    res.status(201).json(companies);
  } catch (error) {
    console.error(error);
  }
};

//UPDATE COMPANY
export const update = async (req: Request, res: Response) => {
  try {
    const company: any = await getCompanyById(parseInt(req.params.id));
    if (!company) {
      res.status(404).json("company does not exist");
    } else {
      // const { organization,products,marketValue,address,ceo,country,noOfEmployees,employees } = req.body
      const update: any = {
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

      //const update2: any = {...company, ...req.body}

      const companies = await updateCompany(parseInt(req.params.id), update);
      res.status(200).json(companies);
    }
  } catch (error) {
    console.error(error);
  }
};

//DELETE COMPANY
export const remove = async (req: Request, res: Response) => {
  try {
    const company: any = await getCompanyById(parseInt(req.params.id));
    if (!company) {
      res.status(400).json("Company does not exis");
    } else {
      await deleteCompany(parseInt(req.params.id));
      res.status(200).json({ message: `Company ${req.params.id} removed` });
    }
  } catch (err) {
    console.error(err);
  }
};
