var containerEl = $("div.container");
var tBlock = $($("#time-block").html());
var currentHr = moment().hour();
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDay);


for (var i = 0; i < 9; i++) {

    var workHours = moment(i + 9, "HH");
    var newTblock = tBlock.clone();

   
    newTblock.find("div.hour p").text(workHours.format("hA"));


    newTblock.find("textarea")
        .attr("id", `textarea-${i+9}`)
        .text(JSON.parse(localStorage.getItem(`textarea-${i+9}`)));

    if (i + 9 < currentHr) {
        newTblock.find("textarea").addClass("past");
    }
    else if (i + 9 > currentHr) {
        newTblock.find("textarea").addClass("future");
    }
    else {
        newTblock.find("textarea").addClass("present");
    }


    newTblock.find("button.saveBtn").attr("data-target", `textarea-${i+9}`);

    containerEl.append(newTblock);
}


$(document).on("click", "button.saveBtn", function() {

 
    var toSave = $(this).attr("data-target");

    var userInput = $(document.getElementById(toSave)).val();
    localStorage.setItem(toSave, JSON.stringify(userInput));
})