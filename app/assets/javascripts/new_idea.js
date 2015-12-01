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
         clearForms()
       },
       error: function () {
         displayError()
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

function clearForms() {
  $('#idea_body').val("")
  $('#idea_title').val("")
}

function displayError() {
  alert("You need to include a title and a body!")
}
