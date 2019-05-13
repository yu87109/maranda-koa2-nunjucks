#useage

npm i --save maranda-koa2-nunjucks

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
const app = new Koa();
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
