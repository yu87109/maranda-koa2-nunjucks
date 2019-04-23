"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nunjucks_1 = require("nunjucks");
function Koa2Nunjucks(ViewPath, app, EnvOptions) {
    var FileLoader = new nunjucks_1.FileSystemLoader(ViewPath);
    var Env = new nunjucks_1.Environment(FileLoader, Object.assign({
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
    return app;
}
exports.Koa2Nunjucks = Koa2Nunjucks;
