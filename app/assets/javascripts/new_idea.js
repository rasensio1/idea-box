$( document ).ready(function() {
  newIdea();
});

function newIdea() {
  $('#submit-button').click(function() {

    $.ajax({
       method: "POST",
       url: "api/v1/ideas",
       data: { title: getTitle(),
               body: getBody() 
             },
       success: function() {
         clearIdeas();
         loadIdeas()
       }
    });
  });
}

function getTitle() {
  return $('#idea_title').val()
}

function getBody() {
  return $('#idea_body').val()
}
