Module = {};
Module.onRuntimeInitialized = function() 
{
    return Module._work;
}
function Cal(form)
{
    const formElement = document.getElementById('form');
    const riderMass = Number(formElement[0].value);
    const bikeMass = Number(formElement[1].value);
    const wantTime = formElement[2].value;
    const route = Number(formElement[3].value);
    let duration = wantTime.split(':');
    timeSeg = Number(duration[0])*3600 + Number(duration[1])*60 + Number(duration[2]);
    
    if(route == 0)
    {form.segment.value = "中心碑 - 武嶺牌樓"}
    else if(route == 1)
    {form.segment.value = "放行點 - 武嶺牌樓"}
    else if(route == 10)
    {form.segment.value = "Bedoin - Top"}
    if(riderMass < 1 || bikeMass < 1 || timeSeg < 1)
    {
        form.WORK.value = "請輸入正確的數字";
        form.Pavg.value = "請輸入正確的數字";
    }
    else
    {
        form.WORK.value = Module._work(riderMass, bikeMass, route, timeSeg);
        form.Pavg.value = (form.WORK.value*1000/timeSeg).toFixed(1);
        if (form.WORK.value == -2)
        {
            form.WORK.value = "license 過期了";
            form.Pavg.value = "請聯絡作者";
        }
        else if (form.WORK.value == -3)
        {
            form.WORK.value = "license 被修改過";
            form.Pavg.value = "請聯絡作者";
        }
        else if(form.WORK.value == -1 || isNaN(form.Pavg.value))
        {
            form.WORK.value = "請輸入正確的數字";
            form.Pavg.value = "請輸入正確的數字";
        }
    }
}