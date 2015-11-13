$(document).ready(function () {

    /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="cross-off"></span>'
    var xMark = '<span class="delete"></span>'


 /*Allows an "Enter" keystroke to work as a submit button for input field*/
   
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) { /* this means enter (13) */
                postItem();
           };
        });



/*Takes returned value from previous function and adds it*/
    function postItem() {
        var item = $('#add-items').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('#list-area').prepend(work);
        $('#add-items').val('');
        $('#list-area p:first-child')

           };  
    
    });


/*Allows user to delete items*/  
/* I GET THIS*/
$(document).on("click", ".delete", function(){
    $(this).closest('p').fadeOut(300);
});



/*Allows user to check off items*/
$(document).on("click", ".cross-off", function(){
    if (!$(this).closest('p').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.delete').addClass("alt-delete");
        $(this).addClass("add-back");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('p').removeClass("strikethrough");
        $(this).siblings('.delete').removeClass("alt-delete");
        $(this).removeClass("add-back");
   }
});
