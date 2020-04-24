var today = moment().format("dddd, MMMM DD");
document.getElementById('currentDay').textContent = today;
var saveButtons = document.getElementsByTagName('button');
var nineText = document.getElementById('task-9');

for(var i = 0; i< saveButtons.length; i++){
    saveButtons[i].addEventListener('click', function(){
        var hour = this.getAttribute('data-hour')
        //
        //console.log(document.getElementById(`task-${hour}`).value
        var text = document.getElementById(`task-${hour}`).value.toString();
        console.log(hour, text);
        // localStorage.setItem(hour, text);
        storeContent(hour, text);
    });

        //if (hour  < currenthours)
        //document.getElementById(`task-${hour}`).style.color = 'red'

        //if (hour == currenthour)
        //document.getElementById(`task-${hour}`).style.color = 'grey'
        //if (hour  > currenthours)
        //document.getElementById(`task-${hour}`).style.color = 'green'
        //}console.log(localStorage);
}

function storeContent(hour, text) {
    var planner = localStorage.getItem(today);
    if (planner) {
        planner = JSON.parse(planner);
    } else {
        planner = {}
    }

    planner[hour] = text;
    localStorage.setItem(today, JSON.stringify(planner))

}

function loadContent(){
//var task = localStorage.getItem('9');
//document.getElementById('task-9').value = task;
var planner = localStorage.getItem(today);
if (planner) {
    planner=JSON.parse(planner);
    var hours = Object.keys(planner)

    for (var i = 0; i< hours.length; i++){
        hour = hours[i];
        document.getElementById(`task-${hour}`).value = planner[hour]
    }

}
}

loadContent();