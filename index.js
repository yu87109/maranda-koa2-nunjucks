"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks_1 = require("nunjucks");
const koa_1 = __importDefault(require("koa"));
exports.Koa = koa_1.default;
class NunjucksKoa extends koa_1.default {
    constructor(ViewPath, EnvOptions) {
        super();
        if (ViewPath) {
            NunjucksKoa.Init.call(this, ViewPath, EnvOptions);
        }
    }
}
exports.NunjucksKoa = NunjucksKoa;
(function (NunjucksKoa) {
    function Init(ViewPath, EnvOptions) {
        const FileLoader = new nunjucks_1.FileSystemLoader(ViewPath);
        const Env = new nunjucks_1.Environment(FileLoader, Object.assign({
            autoescape: false,
            throwOnUndefined: false,
            trimBlocks: true,
            lstripBlocks: true,
            watch: true,
            noCache: true,
        }, EnvOptions));
        this.context.render = function (ViewName, RenderData) {
            this.response.body = Env.render(ViewName, Object.assign({}, this.state, RenderData));
            this.response.type = 'text/html';
            ;
        };
    }
    NunjucksKoa.Init = Init;
})(NunjucksKoa || (NunjucksKoa = {}));
exports.NunjucksKoa = NunjucksKoa;
__export(require("nunjucks"));
