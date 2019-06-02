<!-- maxAge 一个数字表示从Date.now()得到的毫秒数 -->
<!-- signed cookie 签名值 -->
<!-- expires cookie 过期的date -->
<!-- path cookie 路径，默认是'/' -->
<!-- domain cookie 域名 -->
<!-- secure 安全 cookie -->
<!-- httpOnly 服务器可访问cookie，默认是true -->
<!-- overwrite 一个布尔值，表示是否覆盖以前设置的同名的cookie（默认值是false）， -->
<!-- 如果是true，在同一个请求中设置相同名称的所有Cooire（不管路径或域）是否在设置此cookie时从Set-Cookie标头中过滤掉 -->
const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    if(ctx.url == '/zyl'){
        ctx.cookies.set(
            'name','zyl',{
                domain: 'localhost',
                path:'/zyl',
                maxAge: 24*60*60*1000,
                expires: new Date('2018-12-31'),
                httpOnly: false,
                overwrite: false
            }
        );
        ctx.body = 'cookie';
    }else{
        ctx.body = 'no cookie';
    }
});

app.listen(3000, ()=>{
    console.log('服务开启成功！');
});