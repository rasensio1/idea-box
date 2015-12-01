$( document ).ready(function() {
  loadIdeas();
});

function loadIdeas() {
  $.getJSON('api/v1/ideas')
    .then(function(ideas) {
      $.each(ideas, function(index, idea) { renderIdea(idea) });
    })
}

function renderIdea(idea) {
  $('#ideas-container')
    .append("<div class='idea-container'>"
           + "<h1>" + idea.title + "</h1>"
           + "<p>" + idea.body + "<p>"
           + "<p>" + idea.quality + "<p>"
           + "<div class='ui button delete-button' id='" + idea.id + "'>Delete</div>"
           +"</div>")
}

function clearIdeas() {
  $('#ideas-container').children().remove()
};
