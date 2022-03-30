"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.writeFile = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const dataPath = path_1.default.join(__dirname, "./database.json");
const writeFile = (data) => {
    (0, fs_1.writeFileSync)(dataPath, JSON.stringify(data));
};
exports.writeFile = writeFile;
const readFile = () => {
    return (0, fs_1.readFileSync)(dataPath, { encoding: "utf8", flag: "r" });
};
exports.readFile = readFile;
