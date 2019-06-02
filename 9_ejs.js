<!-- 模板 -->
const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');
<!-- 加载模板 -->
app.use(views(path.join(__dirname,'./views'),{  <!--__dirname当前路径-->
    extension: 'ejs'
}));  

app.use(async ctx => {
    let title = 'hello';
    await ctx.render('index.ejs',{  <!--渲染-->
        title,
        list:[
            {name:'sss', age:20},
            {name:'fff', age:33},
            {name:'ggg', age:34}
        ]
    });     
});

app.listen(3000, ()=>{
    console.log('服务开启成功！');
});