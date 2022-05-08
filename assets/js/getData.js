Module = {};
function routeCal(form)
{
    const formElement = document.getElementById('form');
    const riderMass = Number(formElement[0].value);
    const bikeMass = Number(formElement[1].value);
    const equipMass = Number(formElement[2].value);
    const water = Number(formElement[3].value);
    const food = Number(formElement[4].value);
    const wantTime = formElement[5].value;
    const route = Number(formElement[6].value);
    let duration = wantTime.split(':');
    timeSeg = Number(duration[0])*3600 + Number(duration[1])*60 + Number(duration[2]);
    
    if(route == 0)
    {form.segment.value = "中心碑 - 武嶺牌樓"}
    else if(route == 1)
    {form.segment.value = "放行點 - 武嶺牌樓"}
    else if(route == 10)
    {form.segment.value = "Bedoin - Top"}
    if( riderMass < 1 || bikeMass < 1 || equipMass < 0 || water < 0 || food < 0 || timeSeg < 1)
    {
        form.WORK.value = "請輸入正確的數字";
        form.Pavg.value = "請輸入正確的數字";
    }
    else
    {
        form.WORK.value = Module._work(riderMass, bikeMass, equipMass, water, food, route, timeSeg);
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

function AtoWCal(form)
{
    const formElement = document.getElementById('form');
    const CdA = Number(formElement[0].value);
    const slope = Number(formElement[1].value);
    const speed = Number(formElement[2].value);
    const percent = Number(formElement[3].value);
    if( CdA < 0 || slope < 0 || speed < 0) {form.weight.value = "請輸入正確的數字";}
    else
    {
        form.weight.value = Module._AtoW(CdA, slope, speed, percent);
        if (form.weight.value == -2) {form.weight.value = "license 過期了，請聯絡作者";}
        else if (form.weight.value == -3) {form.weight.value = "license 被修改過，請聯絡作者";}
        else if (form.weight.value == -1) {form.weight.value = "請輸入正確的數字";}
    }
}