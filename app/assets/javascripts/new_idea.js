$( document ).ready(function() {
  newIdea();
});

function newIdea() {
  $('#submit-button').click(function() {
    $.post( "api/v1/ideas", { title: getTitle(), 
                             body: getBody() })
      .then(function() {
        loadIdeas();
        clearForms();
      })
      .fail(function() {
        displayError()
      })
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
  $('#new-idea').append("<p class='error'>You need to include a title and a body!</p>")
}
