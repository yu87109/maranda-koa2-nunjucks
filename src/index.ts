import {Environment, FileSystemLoader, ConfigureOptions} from  'nunjucks';
import Koa from 'koa';

class NunjucksKoa<StateT, CustomT> extends Koa<StateT, CustomT & NunjucksKoa.Ctx>{
    constructor();
    constructor(ViewPath?:string|string[], EnvOptions?: ConfigureOptions){
        super();
        if(ViewPath){NunjucksKoa.Init.call(this, ViewPath, EnvOptions)}
    }
}
namespace NunjucksKoa{
    export interface Ctx{
        render: (this:Koa.ParameterizedContext, ViewName:string, RenderData?:{})=>void;
    }
    export function Init<StateT, CustomT, T extends Koa<StateT, CustomT & NunjucksKoa.Ctx>>(this: T, ViewPath:string|string[], EnvOptions?: ConfigureOptions){
        const FileLoader = new FileSystemLoader(ViewPath);
        const Env = new Environment(FileLoader, Object.assign({
            autoescape: false,
            throwOnUndefined: false,
            trimBlocks: true,
            lstripBlocks:true,
            watch: true,
            noCache: true,
        }, EnvOptions));
        this.context.render = function(this:Koa.ParameterizedContext, ViewName:string, RenderData?:{}){
            this.response.body = Env.render(ViewName, Object.assign({}, this.state, RenderData));
            this.response.type = 'text/html';;
        } 
    }
}
export * from 'nunjucks'
export {Koa, NunjucksKoa}
