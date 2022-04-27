import { readFileSync, writeFileSync } from "fs";
import path from "path";

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

const dataPath = path.join(__dirname, "database.json");

export const writeFile = (data: any) => {
  writeFileSync(dataPath, JSON.stringify(data));
};

export const readFile = () => {
  return readFileSync(dataPath, { encoding: "utf8", flag: "r" });
};
