# useage

##### npm i --save maranda-koa2-nunjucks

### for the complete maranda koa server case, with static, session-mysql, koabody, router 

### please visit https://github.com/yu87109/maranda-koa-server-example


### this example is used for ts, if you are js user, if can use as almost the same, just delete the type define.

app.ts
```javascript
import {NunjucksKoa, Koa, Nunjucks, NunjucksCtx} from 'maranda-koa2-nunjucks';
import {join as pathJoin } from 'path';

interface Ctx extends NunjucksCtx{
    //if have other context
}
const app = new NunjucksKoa<any, Ctx>(
    [
        pathJoin(__dirname, '../view1'), 
        pathJoin(__dirname, '../view2')
    ],
    {
        noCache: true
    }
);
//if you do not want use NunjucksKoa, you use as follows:
const app = new Koa<any, Ctx>();
app.context.nunjucks = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(pathJoin(__dirname, '../assets/ssr')),
    {
        noCache: true,
    }
);

app.use(async (ctx, next)=>{
    ctx.nunjucks.render('a.njk', {...})
}
app.listen(80);
```

---

[for more Versions, click see the changelog](./CHANGELOG.md)
