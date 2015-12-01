$( document ).ready(function() {
  newIdea();
});

function newIdea() {
  $('#submit-button').click(function() {

    $.ajax({
       method: "POST",
       url: "api/v1/ideas",
       data: { title: "title",
               body: "body"
             },
       success: function() {
         clearIdeas();
         loadIdeas()
       }
    });
  });
}
