const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    <!-- 叠加数据 -->
    let data = '';

    <!-- 监听data事件，收到表单数据的时候执行 -->
    ctx.req.on('data',chunk => {
        data += chunk;   <!--二进制 相当于toString-->
    });

    <!-- 接受表单提交数据完成后 -->
    ctx.req.on('end',()=>{
        <!-- 解码 -->
        data = decodeURI(data);
        console.log(data);
    });
    ctx.body = '111';
});
app.listen(3000, ()=>{
    console.log('服务开启成功！');
});