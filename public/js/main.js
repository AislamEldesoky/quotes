$(document).ready(function(){

$('.btn').on('click', function (event) {
                $.ajax({
                  url:'/api/quote',
                  success: function (quote) {
                    
                           $('.elQuote').html(quote.text);
                           $('.elmo2alef').html(quote.author);

                  }
                });
                
    });

});