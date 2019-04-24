#useage

npm i --save maranda-koa2-nunjucks

app.ts
```
import {CtxRender, Koa2Nunjucks} from 'maranda-koa2-nunjucks';
import Koa from 'koa';

const app = new Koa<any, others&CtxRender>();//if have other context
Koa2Nunjucks(ViewPath, app, {...});

app.use(async (ctx, next)=>{
    ctx.render(ViewName, RenderData)
}
app.listen(80);
```
