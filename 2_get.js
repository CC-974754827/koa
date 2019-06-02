const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let url = ctx.url;
    <!-- 对象 -->
    let query = ctx.query;  
    <!-- 字符串 -->
    let querystring = ctx.querystring;
    ctx.body = {
        url,
        query,
        querystring
    };
});

app.listen(3000, ()=>{
    console.log('服务开启成功！');
});