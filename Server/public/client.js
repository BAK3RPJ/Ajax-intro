$(document).ready(readyNow);

function readyNow() {
    console.log('In jQuery.js');
    $.ajax({
        url: ' /quotes',
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        $('body').append('<ul class="quotesList"></ul>');
        response.forEach(function(quoteObject) {
            $(".quotesList").append(`<li>${quoteObject.quote} - ${quoteObject.author}</li>`);
        });
    });
}

function appendQuotes() {

}