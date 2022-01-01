
let hr = 12;
let min = 0;
let sec = 2;
let timeOfDay = true;

const main = () => {
    setInterval(() => {
        document.getElementById("time").innerText = `${hr < 10 ? '0' : ''}${hr} : ${min < 10 ? '0' : ''}${min}  : ${sec < 10 ? '0' : ''}${sec} ${timeOfDay ? "am" :"pm"}`;
        readjustTime();
    }, 1000)
}

const readjustTime = () => {
    sec++;
    if(hr == 12){
        return hr = 0;
        timeOfDay = !timeOfDay;
    }
    if(sec == 60){
        min++;
        return sec = 0;
    }
    if(min == 60){
        hr++;
        return min = 0;
    }
}

main()