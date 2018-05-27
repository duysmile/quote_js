function animation(text){
    $('#quote-text').animate({
        opacity: 0,
    }, 500, function(){
        $(this).animate({
            opacity: 1,
        }, 500);
        $("#quote").text(text.quote);
        $("#author").text(text.author);
    });
}
function getQuote(){
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
        type: "get",
        dataType: "json",
        success: function(result){
            animation(result[0]);
        },
        
    });
}

var colors = [
    '#16a085', 
    '#27ae60', 
    '#2c3e50', 
    '#f39c12', 
    '#e74c3c', 
    '#9b59b6', 
    '#FB6964', 
    '#342224', 
    "#472E32", 
    "#BDBB99", 
    "#77B1A9", 
    "#73A857"
];

function getColor(){
    var color = Math.floor(Math.random() * 12);
    color = colors[color];
    $('body, .btn').css({
        "transition": "all 1.5s",
        "background": color,  
    });
}

$(document).ready(function(){
    getQuote();
    getColor();
    $("#change_quote").on('click', function(){
        getColor();
        getQuote();
    });
});