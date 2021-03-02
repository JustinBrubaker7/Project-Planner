var projName = $('#project-name');
var projType = $('#project-type');
var hourWage = $('#hourWage');
var dueDate = $('#due-date');
var thisForm = $('<form>');

daysUntilDue;

function addUser(){

    //Insert location where submitted info is to be added
    $('#final-form').append( "<tr>" +
    "<td>" + projName.val() + "</td>" +
    "<td>" + projType.val() + "</td>" +
    "<td>" + hourWage.val() + "</td>" +
    "<td>" + dueDate.val() + "</td>" +
    "<td>" + daysUntilDue + "</td>" +
    "<td>" + "<button id='exit-button'>"+ "Delete"+"</button>" + "</td>" +
    "</tr>" );
    dialog.dialog( "close" );

}

// Instantiates the popup window 
dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Create an account": addUser,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
      allFields.removeClass( "ui-state-error" );
    }
  });

thisForm.addEventListener("submit", function(event){

    event.preventDefault();
    addUser();

})

// Button to open up the submission form
$( "#create-user" ).button().on( "click", function() {
    dialog.dialog( "open" );
});

$('#exampleModalCenter').on('exampleModalCenter', function () {
  $('#myInput').trigger('focus')
})
// Handles the delete method
$("#exit-button").addEventListener("click", function(event){

    (event.this).parent.remove();

})


