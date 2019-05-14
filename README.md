#useage

npm i --save maranda-koa2-nunjucks

// for the complete maranda koa server case, with static, session-mysql, koabody, router 
// please visit https://github.com/yu87109/maranda-koa-server-example


//this example is used for ts, if you are js user, if can use as almost the same, just delete the type define.
app.ts
```
import {NunjucksKoa, Koa} from 'maranda-koa2-nunjucks';

//type1
const app = new NunjucksKoa([
    join(__dirname, '../view1'), join(__dirname, '../view2')
],{
    noCache: true
});
//type2
const app = new Koa<any, NunjucksKoa.Ctx>();
NunjucksKoa.Init.call(app, [
    join(__dirname, '../view1'), join(__dirname, '../view2')
],{
    noCache: true
})
//type3
const app = new NunjucksKoa()
NunjucksKoa.Init.call(app, [
    join(__dirname, '../view1'), join(__dirname, '../view2')
],{
    noCache: true
})


app.use(async (ctx, next)=>{
    ctx.render(ViewName, RenderData)
}
app.listen(80);
```

[========]
Versions:
![text](./CHANGELOG.md)