        let date = new Date()
        let phours = document.getElementById("phours")
        let pminutes = document.getElementById("pminutes")
        let pdate = document.getElementById("pdate")

        phours.innerHTML = `${date.getHours()} :`
        pminutes.innerHTML = `${date.getMinutes()}`


        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";

        var current_date = new Date();

        weekday_value = current_date.getDay();


    
    pdate.innerHTML = `${weekdays[weekday_value]}  ${date.getDate()} / ${date.getMonth()}`;

    let screen = document.getElementById("screen");
    let phonecover = document.getElementById ("phonecover");



function onOff(){
    if (document.getElementById("screen").style.display == "none"){
        document.getElementById("screen").style.display = "block"
    } else {
        document.getElementById("screen").style.display = "none"
    }
        
}



