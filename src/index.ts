import Nunjucks from 'nunjucks';
import Koa from 'koa';

interface NunjucksCtx { nunjucks: Nunjucks.Environment }
class NunjucksKoa<StateT, CustomT extends NunjucksCtx> extends Koa<StateT, CustomT>{
    constructor(viewPaths: string[], viewOptions?: Nunjucks.ConfigureOptions) {
        super();
        this.context.nunjucks = new Nunjucks.Environment(new Nunjucks.FileSystemLoader(viewPaths), viewOptions);
    }
}

export { Nunjucks, Koa, NunjucksKoa }
