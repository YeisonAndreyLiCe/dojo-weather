function remove(clase) {
    var element = document.querySelector(clase);
    element.remove();
}

function alerta(element) { //don't use alert as name of function, because it'd be iteration
    var city = element.innerText;
    alert("Charging weather forecast of " + city);
    var city_title = document.querySelector(".city h2");
    city_title.innerText = city;
}

/*function convert(element) {
    const days = ["#today", "#tomorrow", "#friday", "#saturday"];
    for (let i = 0; i < days.length; i++){
        var max_tem = document.querySelector(days[i] + " .max");
        var min_tem = document.querySelector(days[i] + " .min");
        var max = parseInt(max_tem.innerText);
        var max = parseInt(min_tem.innerText);
        if (element.value === "ºC") {
            max_tem.innerText = (max * 9 / 5) + 32;
            min_tem.innerText = (min * 9 / 5) + 32;
        }else {
            max_tem.innerText = (max - 32) * 5 / 9;
            min_tem.innerText = (min - 32) * 5 / 9;
        }
    }
}*/

function convert(element) {
    var units = element.value;
    for (i = 1; i < 9; i++){
        var elementTemperature = document.querySelector(".t" + i);
        var temperature = elementTemperature.innerText;
        temperature = parseFloat(temperature);
        new_temp = 0;
        if (units === "ºC") {
            new_temp = (temperature - 32) * 5 / 9;
        } else {
            new_temp = (temperature * 9 / 5) + 32;
        }
        elementTemperature.innerText = Math.round(new_temp);
    }
}