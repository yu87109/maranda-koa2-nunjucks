import {Environment, FileSystemLoader, ConfigureOptions} from 'nunjucks';
import Koa from 'koa';

interface CtxRender{
    render: (this:Koa<any,CtxRender>, ViewName:string, RenderData:{}) => void;
}
function Koa2Nunjucks<T extends CtxRender>(ViewPath:string, app:Koa<any,T>, EnvOptions?: ConfigureOptions){
    const FileLoader = new FileSystemLoader(ViewPath);
    const Env = new Environment(FileLoader, Object.assign({
        autoescape: false,
        throwOnUndefined: false,
        trimBlocks: true,
        lstripBlocks:true,
        watch: true,
        noCache: true,
    }, EnvOptions));
    app.context.render = function(this:Koa<any,CtxRender>, ViewName:string, RenderData:{}){
        this.response.body = Env.render(ViewName, RenderData);
        this.response.type = 'text/html';
    }
}
export {Koa2Nunjucks}