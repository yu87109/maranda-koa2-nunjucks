"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks_1 = require("nunjucks");
function Koa2Nunjucks(ViewPath, app, EnvOptions) {
    const FileLoader = new nunjucks_1.FileSystemLoader(ViewPath);
    const Env = new nunjucks_1.Environment(FileLoader, Object.assign({
        autoescape: false,
        throwOnUndefined: false,
        trimBlocks: true,
        lstripBlocks: true,
        watch: true,
        noCache: true,
    }, EnvOptions));
    app.context.render = function (ViewName, RenderData) {
        this.response.body = Env.render(ViewName, RenderData);
        this.response.type = 'text/html';
    };
}
exports.Koa2Nunjucks = Koa2Nunjucks;
