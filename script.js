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
            $("#quote").text(result[0].quote);
            $("#author").text(result[0].author);
        },
        
    });
}
$(document).ready(function(){
    $("#change_quote").on('click', function(){
        getQuote();
    });
});