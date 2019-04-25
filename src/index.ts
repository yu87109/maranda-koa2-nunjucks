import {Environment, FileSystemLoader, ConfigureOptions} from 'nunjucks';
import Koa,{ParameterizedContext} from 'koa';

interface CtxRender{
    render: (this:ParameterizedContext, ViewName:string, RenderData:{}) => void;
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
    app.context.render = function(this:ParameterizedContext, ViewName:string, RenderData:{}){
        this.response.body = Env.render(ViewName, Object.assign({}, this.state, RenderData));
        this.response.type = 'text/html';
    }
}
export {Koa2Nunjucks}