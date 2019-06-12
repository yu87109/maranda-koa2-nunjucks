"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks_1 = __importDefault(require("nunjucks"));
exports.Nunjucks = nunjucks_1.default;
const koa_1 = __importDefault(require("koa"));
exports.Koa = koa_1.default;
class NunjucksKoa extends koa_1.default {
    constructor(viewPaths, viewOptions) {
        super();
        this.context.nunjucks = new nunjucks_1.default.Environment(new nunjucks_1.default.FileSystemLoader(viewPaths), viewOptions);
    }
}
exports.NunjucksKoa = NunjucksKoa;
