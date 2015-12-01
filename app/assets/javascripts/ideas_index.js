$( document ).ready(function() {
  loadIdeas();
});

function loadIdeas() {
  console.log("its working");
  $.getJSON('api/v1/ideas')
    .then(function(ideas) {
      $.each(ideas, function(index, idea) { renderIdea(idea) });
    });
}

function renderIdea(idea) {
  $('#ideas-container')
    .append("<div class='idea-container'>"
           + "<h1>" + idea.title + "</h1>"
           + "<p>" + idea.body + "<p>"
           + "<p>" + idea.quality+ "<p>"
           +"</div>")
}
