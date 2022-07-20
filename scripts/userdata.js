$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        movies: [
            {
                ref: "alien",
                storeID: "alien",
                title: "Alien",
                poster: "https://i.imgur.com/FGwvSkL.jpg", 
                status: localStorage.getItem("alien_status"),
                score: localStorage.getItem("alien_score"),
                date: localStorage.getItem("alien_date"),
                rewatches: localStorage.getItem("alien_rewatches"),
                review: localStorage.getItem("alien_review"),
            },
            {
                ref: "avengers",
                storeID: "avengers",
                title: "Avengers",
                poster: "https://i.imgur.com/kBN4l8f.png", 
                status: localStorage.getItem("avengers_status"),
                score: localStorage.getItem("avengers_score"),
                date: localStorage.getItem("avengers_date"),
                rewatches: localStorage.getItem("avengers_rewatches"),
                review: localStorage.getItem("avengers_review"),
            },
            {
                ref: "fightclub",
                storeID: "fight_club",
                title: "Fight Club",
                poster: "https://i.imgur.com/lxclSlU.png", 
                status: localStorage.getItem("fight_club_status"),
                score: localStorage.getItem("fight_club_score"),
                date: localStorage.getItem("fight_club_date"),
                rewatches: localStorage.getItem("fight_club_rewatches"),
                review: localStorage.getItem("fight_club_review"),
            },
            {
                ref: "forrestgump",
                storeID: "forrest_gump",
                title: "Forrest Gump",
                poster: "https://i.imgur.com/1EF5D0Z.png",
                status: localStorage.getItem("forrest_gump_status"),
                score: localStorage.getItem("forrest_gump_score"),
                date: localStorage.getItem("forrest_gump_date"),
                rewatches: localStorage.getItem("forrest_gump_rewatches"),
                review: localStorage.getItem("forrest_gump_review"),       
            },
            {
                ref: "inception",
                storeID: "inception",
                title: "Inception",
                poster: "https://i.imgur.com/p1iwCrx.png",
                status: localStorage.getItem("inception_status"),
                score: localStorage.getItem("inception_score"),
                date: localStorage.getItem("inception_date"),
                rewatches: localStorage.getItem("inception_rewatches"),
                review: localStorage.getItem("inception_review"),
            },
            {
                ref: "joker",
                storeID: "joker",
                title: "Joker",
                poster: "https://i.imgur.com/2t47dy2.png",
                status: localStorage.getItem("joker_status"),
                score: localStorage.getItem("joker_score"),
                date: localStorage.getItem("joker_date"),
                rewatches: localStorage.getItem("joker_rewatches"),
                review: localStorage.getItem("joker_review"),
            },
            {
                ref: "pulpfiction",
                storeID: "pulp_fiction",
                title: "Pulp Fiction",
                poster: "https://i.imgur.com/Wyl145o.png",
                status: localStorage.getItem("pulp_fiction_status"),
                score: localStorage.getItem("pulp_fiction_score"),
                date: localStorage.getItem("pulp_fiction_date"),
                rewatches: localStorage.getItem("pulp_fiction_rewatches"),
                review: localStorage.getItem("pulp_fiction_review"),
            },
            {
                ref: "thematrix",
                storeID: "the_matrix",
                title: "The Matrix",
                poster: "https://i.imgur.com/wecqLhL.png",
                status: localStorage.getItem("the_matrix_status"),
                score: localStorage.getItem("the_matrix_score"),
                date: localStorage.getItem("the_matrix_date"),
                rewatches: localStorage.getItem("the_matrix_rewatches"),
                review: localStorage.getItem("the_matrix_review"),
            }
        ],

        show: true
    })
    $("#target").html(rendered);
});