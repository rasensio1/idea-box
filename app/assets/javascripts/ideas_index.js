$( document ).ready(function() {
  loadIdeas();
});

function loadIdeas() {
  $.getJSON('api/v1/ideas')
    .then(function(ideas) {
      var last = ideas.length - 1
      $.each(ideas, function(index, idea) { renderIdea(idea, index, last) });
    })
}

function renderIdea(idea, index, last) {
  $('#ideas-container')
    .append("<div class='idea-container'>"
             + "<h1>" + idea.title + "</h1>"
             + "<p>" + idea.body + "<p>"
             + "<p>" + idea.quality + "<p>"
             + "<div class='ui button promote-button' id='" + idea.id + "'>Promote</div>"
             + "<div class='ui button demote-button' id='" + idea.id + "'>Demote</div>"
             + "<div class='ui button delete-button' id='" + idea.id + "'>Delete</div>"
           +"</div>");
    if (index === last) {
      deleteIdea();
      prepareMoting();
    }
}

function clearIdeas() {
  $('#ideas-container').children().remove()
};
