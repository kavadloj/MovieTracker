$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        news: [
            {
                url: "https://www.cinemablend.com/news/2486098/black-widow-5-confirmed-theories-for-the-next-marvel-movie",
                source: "Cinema Blend",
                title: "Black Widow: 5 Confirmed Theories For The Next Marvel Movie",
                preview: "On December 3, 2019, fans finally got to catch a glimpse of Scarlett Johansson as Natasha Romanoff leading her own movie in the Marvel Cinematic Universe with the first trailer for Black Widow.",
                date: "December 6th",
                icon: "https://i.imgur.com/6SRR4yx.png"
            },
            {
                url: "https://www.comingsoon.net/movies/news/1113579-matt-reeves-casts-peter-sarsgaard-for-the-batman",
                source: "ComingSoon",
                title: "Matt Reeves Casts Peter Sarsgaard For The Batman",
                preview: "Matt Reeves has taken to Twitter once again to announce another addition to his star-studded The Batman featuring Robert Pattinson in the titular role with Peter Sarsgaard joining the cast!",
                date: "December 6th",
                icon: "https://i.imgur.com/MxhOz3l.png"
            },
            {
                url: "https://www.empireonline.com/movies/news/star-wars-rise-of-skywalker-cast-react-richard-e-grant/",
                source: "Empire",
                title: "Star Wars: The Rise Of Skywalker Cast React To The Film",
                preview: "The time has finally come for those outside the core behindt-the-camera creative team to see Star Wars: The Rise Of Skywalker, and the first people granted that opportunity were the cast.",
                date: "December 4th",
                icon: "https://i.imgur.com/2nooEQl.png"
            }
        ],

        show: true
    })
    $("#target").html(rendered);
});