var currentHour = moment().format("k");
console.log(currentHour);
var today = moment().format("dddd, MMMM DD");
document.getElementById('currentDay').textContent = today;
var saveButtons = document.getElementsByTagName('button');
var nineText = document.getElementById('task-9');
var textField = document.getElementsByTagName('textarea');
console.log(textField.length);
console.log(currentHour.length);

for (var i = 0; i<textField.length; i++) {
     textField[i].style.backgroundColor = "gray"
     

    }  
    
 

if (currentHour == 9){
    textField[0].style.backgroundColor = "red";
}else if
(currentHour == 10){
    textField[1].style.backgroundColor = "red";
}
else if (currentHour == 11){
    textField[2].style.backgroundColor = "red";
}
else if (currentHour == 12){
    textField[3].style.backgroundColor = "red";
}
else if (currentHour == 13){
    textField[4].style.backgroundColor = "red";
}
else if (currentHour == 14) {
    textField[5].style.backgroundColor = "red";
}
else if (currentHour == 15){
    textField[6].style.backgroundColor = "red";
}
else if (currentHour == 16){
    textField[7].style.backgroundColor = "red";
}
else if (currentHour == 17){
    textField[8].style.backgroundColor = "red";
}
















/*else if (currentHour < 10) {
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
    textField[5].style.backgroundColor = "gray";
    textField[6].style.backgroundColor = "gray";
    textField[7].style.backgroundColor = "gray";
    textField[8].style.backgroundColor = "gray";
}else if (currentHour===11) {
    textField[0].style.backgroundColor = "red";

}else if (currentHour <11){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
}else if (currentHour < 12){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
}else if (currentHour < 13){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
}else if (currentHour < 14){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
}else if (currentHour < 15){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
    textField[5].style.backgroundColor = "gray";
}else if (currentHour < 16){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
    textField[5].style.backgroundColor = "gray";
    textField[6].style.backgroundColor = "gray";
}else if (currentHour < 17){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
    textField[5].style.backgroundColor = "gray";
    textField[6].style.backgroundColor = "gray";
    textField[7].style.backgroundColor = "gray";
}else if (currentHour < 18){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
    textField[5].style.backgroundColor = "gray";
    textField[6].style.backgroundColor = "gray";
    textField[7].style.backgroundColor = "gray";
}else if (currentHour < 19){
    textField[0].style.backgroundColor = "gray";
    textField[1].style.backgroundColor = "gray";
    textField[2].style.backgroundColor = "gray";
    textField[3].style.backgroundColor = "gray";
    textField[4].style.backgroundColor = "gray";
    textField[5].style.backgroundColor = "gray";
    textField[6].style.backgroundColor = "gray";
    textField[7].style.backgroundColor = "gray";
    textField[8].style.backgroundColor = "gray";
}else if (currentHour) {
    textField[0].style.backgroundColor = 'green';
    textField[1].style.backgroundColor = 'green';
    textField[2].style.backgroundColor = 'green';
    textField[3].style.backgroundColor = 'green';
    textField[4].style.backgroundColor = 'green';
    textField[5].style.backgroundColor = 'green';
    textField[6].style.backgroundColor = 'green';
    textField[7].style.backgroundColor = 'green';
    textField[8].style.backgroundColor = 'green';
    
};*/

    
    


    



























for(var i = 0; i< saveButtons.length; i++){
    saveButtons[i].addEventListener('click', function(){
        var hour = this.getAttribute('data-hour');
        //
        //console.log(document.getElementById(`task-${hour}`).value
        var text = document.getElementById(`task-${hour}`).value.toString();
       // console.log(hour, text);
        // localStorage.setItem(hour, text);
        storeContent(hour, text);
    
    
    
    })
      
        


};












         //if (hour  < currenthours)
        //document.getElementById(`task-${hour}`).style.color = 'red'

        //if (hour == currenthour)
        //document.getElementById(`task-${hour}`).style.color = 'grey'
        //if (hour  > currenthours);
        //document.getElementById(`task-${hour}`).style.color = 'green'
        //}console.log(localStorage);
    

function storeContent(hour, text) {
    var planner = localStorage.getItem(today);
    if (planner) {
        planner = JSON.parse(planner);
    } else {
        planner = {}
    }

    planner[hour] = text;
    localStorage.setItem(today, JSON.stringify(planner))

   
};

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
};


  



loadContent();



