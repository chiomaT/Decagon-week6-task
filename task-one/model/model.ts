import { readFile, writeFile } from "../data/utils";

interface Company {
  organization: string;
  products: string[];
  marketValue: string;
  address: string;
  ceo: string;
  country: string;
  noOfEmployees: number;
  employees: string[];
}
//GET ALL COMPANIES
export const getAllCompanies = async () => {
  return new Promise(function (resolve, reject) {
    let companies: any;
    try {
      companies = readFile();
    } catch (error) {
      writeFile([]);
      companies = readFile();
    }
    resolve(JSON.parse(companies));
  });
};

//GET A PARTICULAR COMPANY BY ID
export const getCompanyById = async (id: number) => {
  let companies: any = await getAllCompanies();
  return new Promise((resolve, reject) => {
    const company = companies.find((c: { id: number }) => c.id === id);
    resolve(company);
  });
};

//CREATE COMPANY
export const createCompany = async (company: Company) => {
  let companies: any = await getAllCompanies();
  return new Promise(function (resolve, reject) {
    let generateId;
    let createdDate = new Date().toISOString();
    let updatedDate = new Date().toISOString();
    if (companies.length === 0) {
      generateId = 1;
    } else {
      generateId = Number(companies[companies.length - 1].id) + 1;
    }
    const newCompany = {
      id: generateId,
      createdAt: createdDate,
      updatedAt: updatedDate,
      ...company,
    };
    companies.push(newCompany);
    writeFile(companies);
    resolve(newCompany);
  });
};

//UPDATE COMPANY
export const updateCompany = async (id: number, company: Company) => {
  let companies: any = await getAllCompanies();
  return new Promise(function (resolve, reject) {
    let updatedDate = new Date().toISOString();
    const index = companies.findIndex((d: { id: number }) => d.id === id);
    companies[index] = {
      id,
      updatedAt: updatedDate,
      ...company,
    };
    writeFile(companies);
    resolve(companies[index]);
  });
};

//DELETE COMPANY
export const deleteCompany = async (id: number) => {
  let companies: any = await getAllCompanies();
  return new Promise<void>(function (resolve, reject) {
    companies = companies.filter((e: { id: number }) => e.id !== id);
    console.log(companies);
    writeFile(companies);
    resolve();
  });
};
