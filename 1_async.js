<!-- 输出Promise(1) -->
<!-- async function timeout(){ -->
    <!-- return '1' -->
<!-- } -->

<!-- timeout().then(res => { -->
    <!-- console.log(res); -->
<!-- }); -->
<!-- console.log('2'); -->


function timeout2(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000);
    });
}
async function fn(){
    <!-- 等到await执行完后再执行其他 -->
    await timeout2();
    console.log('2');
}
fn();