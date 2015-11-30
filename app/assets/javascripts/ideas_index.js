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
