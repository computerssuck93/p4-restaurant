$('.menu .item').tab();


$(document).ready(function(){

  $(".container").mixItUp();

  var inputText;
  var $matching = $();

  // Delay function
  var delay = (function(){
    var timer = 0;

    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };

  })();

  // $( ".filter" ).click( function() {

  //     if ($(this).attr("data-filter") === "all"){
  //        $(".container").mixItUp('changeLayout', 'block');
  //     } else{
  //        $(".container").mixItUp('changeLayout', 'inline-block');
  //     }
  //  });



   /*
   $("#input").keyup(function() {

       // Delay function invoked to make sure user stopped typing
       delay(function() {
         inputText = $("#input").val().toLowerCase();

         // Check to see if input field is empty
         if ((inputText.length) > 0) {
           $('.mix').each(function() {
             
             $this = $("this");

             // add item to be filtered out if input text matches items inside the title   
             if ($(this).children('.title').text().toLowerCase().match(inputText)) {
               $matching = $matching.add(this);
             } else {
               // removes any previously matched item
               $matching = $matching.not(this);
             }
           });

           $(".container").mixItUp('filter', $matching);
         } else {
           // resets the filter to show all item if input is empty
           $(".container").mixItUp('filter', 'all');
         }

       }, 200); //END DELAY FUNCTION

   }); //END INPUT KEYUP FUNCTION
  */
});



$('.acc-head').collapser({

  mode: 'block',
  target: 'next',
  effect: 'slide',
  beforeShow: function(){

    $('.acc-head').each(function(){

      var dataVar = $(this).data('collapser');
      if (dataVar) dataVar.hide($(this));
    });
  }
});


$(".raw p").append('<img src="img/raw.png">')
$(".vege p").append('<img src="img/vege.png">')
$(".spicy p").append('<img src="img/spicy.png">')
$(".normal p").append('<img src="img/placeholder.gif">')

