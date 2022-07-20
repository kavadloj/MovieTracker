$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        movies: [
            {
                ref: "alien-collapse",
                storeID: "alien",
                title: "Alien",
                poster: "https://i.imgur.com/FGwvSkL.jpg", 
                summary: "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun."
            },
            {
                ref: "avengers-collapse",
                storeID: "avengers",
                title: "Avengers",
                poster: "https://i.imgur.com/kBN4l8f.png", 
                summary: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
            },
            {
                ref: "fightclub-collapse",
                storeID: "fight_club",
                title: "Fight Club",
                poster: "https://i.imgur.com/lxclSlU.png", 
                summary: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
            },
            {
                ref: "forrestgump-collapse",
                storeID: "forrest_gump",
                title: "Forrest Gump",
                poster: "https://i.imgur.com/1EF5D0Z.png",
                summary: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."            
            },
            {
                ref: "inception-collapse",
                storeID: "inception",
                title: "Inception",
                poster: "https://i.imgur.com/p1iwCrx.png",
                summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
            },
            {
                ref: "joker-collapse",
                storeID: "joker",
                title: "Joker",
                poster: "https://i.imgur.com/2t47dy2.png",
                summary: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
            },
            {
                ref: "pulpfiction-collapse",
                storeID: "pulp_fiction",
                title: "Pulp Fiction",
                poster: "https://i.imgur.com/Wyl145o.png",
                summary: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
                ref: "thematrix-collapse",
                storeID: "the_matrix",
                title: "The Matrix",
                poster: "https://i.imgur.com/wecqLhL.png",
                summary: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
            }
        ],

        show: true
    })
    $("#target").html(rendered);
});