const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/abc',(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body = '123';
});
router.get('/test',(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body = 'test';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx=>{

});

app.listen(3000, ()=>{
    console.log('服务开启成功！');
});