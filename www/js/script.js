$(document).on("pageshow", function(event) {
    var panel_html = '' +
            '<ul data-role="listview" data-inset="true">' +
                '<li><a href="index.html"> <img src="icons/home.png"/> Home</a></li>' +
            '<li><a href="games.html"> <img src="games/SpaceInvader.jpg"/> Game On!</a></li>' +
            '<li><a href="events.html"> <img src="icons/Events.png"/> Events</a></li>' +
            //'<li><a href="news.html"> <img src="icons/news.png"/> News</a></li>'+
            '<li><a href="about.html"> <img src="icons/about.png"/> About</a></li>' +
            '<li><a href="attractions.html"> <img src="icons/attractions.png"/> Tourist Attractions</a></li>' +
            '<li><a href="contact.html"> <img src="icons/contact.png"/> CONTACT</a></li>' +
            '<!--<li><a href="tour.html"> <img src="icons/Drogheda.png"/> Virtual Tour of Drogheda</a></li>' +
            '-->' +
            '' +
            '</ul>';

    $('.panelhtml').html(panel_html);
    $('.panelhtml ul[data-role="listview"]').listview();
});

var map;
