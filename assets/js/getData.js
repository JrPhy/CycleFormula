Module = {};
function routeCal(form)
{
    const forms = document.forms['form'];
    const riderMass = Number(forms.elements.riderMass.value);
    const bikeMass = Number(forms.elements.bikeMass.value);
    const equipMass = Number(forms.elements.equipMass.value);
    const water = Number(forms.elements.waterMass.value);
    const food = Number(forms.elements.foodMass.value);
    const route = Number(forms.elements.route.value);
    const wantTime = forms.elements.time.value;
    const bike = Number(forms.elements.bike.value);
    let duration = wantTime.split(':');
    timeSeg = Number(duration[0])*3600 + Number(duration[1])*60 + Number(duration[2]);
    
    if(route == 0)
    {form.segment.value = "中心碑 - 武嶺牌樓"}
    else if(route == 1)
    {form.segment.value = "太魯閣牌樓 - 武嶺牌樓"}
    else if(route == 2)
    {form.segment.value = "土場 - 見晴古道"}
    else if(route == 3)
    {form.segment.value = "龍神橋 - 遊客中心"}
    else if(route == 10)
    {form.segment.value = "Bedoin - Top"}
    else if(route == 11)
    {form.segment.value = "北麓公園 - 五合目"}
    else if(route == 12)
    {form.segment.value = "Chom Thom - Top"}
    else if(route == 13)
    {form.segment.value = "Batang Kali - Top"}
    if( riderMass < 1 || bikeMass < 1 || equipMass < 0 || water < 0 || food < 0 || timeSeg < 1)
    {
        form.WORK.value = "請輸入正確的數字";
        form.Pavg.value = "請輸入正確的數字";
    }
    else
    {
        form.WORK.value = Module._workClimb(riderMass, bikeMass, equipMass, water, food, route, timeSeg, bike);
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

function LE8Cal(form)
{
    const forms = document.forms['form'];
    const Feed = Number(forms.elements.Feed.value);
    const activity = Number(forms.elements.activity.value);
    const smoke = Number(forms.elements.smoke.value);
    const sleep = Number(forms.elements.sleep.value);
    const bmi = Number(forms.elements.bmi.value);
    const bfat = Number(forms.elements.bfat.value);
    const bsugar = Number(forms.elements.bsugar.value);
    const bpressure = Number(forms.elements.bpressure.value);
    form.LE8_total.value = Feed+activity+smoke+sleep+bmi+bfat+bsugar+bpressure;
    var inputElements = document.getElementsByClassName('minus_20');
    for (var i = 0; i < inputElements.length; i++)
    {
        if (inputElements[i].checked) form.LE8_total.value = form.LE8_total.value - 20;
    }
}

function select_route() {
    var route_pic = document.route_pic;
    var route = document.form.route.value;

    if(route == 5)
        route_pic.src = "images/136.jpg";
    else if (route == 6)
        route_pic.src = "images/buddiha_south.jpg";
}

function TTCal(form)
{
    const forms = document.forms['form'];
    const riderMass = Number(forms.elements.riderMass.value);
    const bikeMass = Number(forms.elements.bikeMass.value);
    const equipMass = Number(forms.elements.equipMass.value);
    const water = Number(forms.elements.waterMass.value);
    const food = Number(forms.elements.foodMass.value);
    const deep = Number(forms.elements.deep.value);
    const bike = Number(forms.elements.bike.value);
    const pose = Number(forms.elements.pose.value);
    const Helmet = Number(forms.elements.helmet.value);
    const route = Number(forms.elements.route.value);
    const windSpeed = Number(forms.elements.windSpeed.value);
    const draftTime = Number(forms.elements.draftTime.value)/100;
    const wantTime = forms.elements.time.value;
    let duration = wantTime.split(':');
    
    timeSeg = Number(duration[0])*3600 + Number(duration[1])*60 + Number(duration[2]);
    var inputElements = document.getElementsByClassName('equip');
    var equip = new Array(3)
    for (var i = 0; i < inputElements.length; i++)
    {
        if (inputElements[i].checked) equip[i] = 1;
        else equip[i] = 0;
    }
    if( riderMass < 1 || bikeMass < 1 || equipMass < 0 || water < 0 || food < 0 || timeSeg < 1)
    {
        form.WORK.value = "請輸入正確的數字";
        form.Pavg.value = "請輸入正確的數字";
    }
    else
    {
        form.WORK.value = Module._workFlat(riderMass, bikeMass, equipMass, water, food, route, timeSeg,
                                            bike, pose, deep, Helmet, equip[0], equip[1], equip[2], windSpeed,
                                            draftTime);
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

function convertFortykm(form) 
{
    const forms = document.forms['form'];
    const wantTime = forms.elements.segTime.value;
    let duration = wantTime.split(':');
    const dist = Number(forms.elements.segDist.value);
    var timeSeg = Number(duration[0])*3600 + Number(duration[1])*60 + Number(duration[2]);
    timeSeg = timeSeg/3600;
    var speed = dist/timeSeg;
    timeSeg = 40/speed;
    timeSeg = Math.ceil(timeSeg*3600);
    console.log(timeSeg);
    hh = Math.floor(timeSeg/3600);
    console.log(hh);
    mm = Math.floor((timeSeg - 3600*hh)/60);
    console.log(mm);
    ss = timeSeg - 3600*hh - 60*mm;
    console.log(ss);
    form.timeFortykm.value = hh+":"+mm+":"+ss;
}

function CPWprime(form)
{
    const formElement = document.getElementById('form');
    const duration0 = Number(formElement[0].value);
    const power0 = Number(formElement[1].value);
    const duration1 = Number(formElement[2].value);
    const power1 = Number(formElement[3].value);
    const pmax = Number(formElement[5].value);
    if( duration0 < 0 || duration1 < 0 || power0 < 0 || power1 < 0 || pmax < 0 ||
        duration0 > duration1 || power0 < power1 || pmax < power1 || pmax < power0) 
    {
        form.CP.value = "請輸入正確的數字";
        form.Wprime.value = "請輸入正確的數字";
    }
    else
    {
        form.CP.value = Module._cp(pmax, power0, power1, duration0, duration1);
        form.Wprime.value = (Module._WPrime(pmax, power0, power1, duration0, duration1, form.CP.value)/1000).toFixed(2);
        if (form.CP.value == -2)
        {
            form.CP.value = "license 過期了";
            form.Wprime.value = "請聯絡作者";
        }
        else if (form.CP.value == -3)
        {
            form.CP.value = "license 被修改過";
            form.Wprime.value = "請聯絡作者";
        }
        else if(form.CP.value == -1 || isNaN(form.CP.value))
        {
            form.CP.value = "請輸入正確的數字";
            form.Wprime.value = "請輸入正確的數字";
        }
    }
}
