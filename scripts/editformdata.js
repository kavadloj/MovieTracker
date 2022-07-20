$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        editform: [
            {
                title: localStorage.getItem("currentMovie").split('_').join(" "),
                status: localStorage.getItem("currentStatus"),
                score: localStorage.getItem("currentScore"),
                date: localStorage.getItem("currentDate"),
                rewatches: localStorage.getItem("currentRewatches"),
                review: localStorage.getItem("currentReview"),
            }
        ],

        show: true
    })
    $("#target").html(rendered);
});