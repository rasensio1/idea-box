$( document ).ready(function() {
  loadIdeas();
});

function loadIdeas() {
  $.getJSON('api/v1/ideas', {order: "created_at desc"})
    .then(function(ideas) {
      $('#ideas-container').html(ideas.map(makeIdea));
      prepareActions();
    })
}

function prepareActions() {
  prepareDeleting();
  prepareMoting();
  prepareEditing();
}

function makeIdea(idea) {
  return("<div class='ui segment idea-container'>"
     + "<h1 class='title'>"  + idea.title          + "</h1>"
     + "<p class='body'>"    + truncate(idea.body) + "<p>"
     + "<p class='quality'>" + idea.quality        + " dollar idea<p>"
     + "<div class='tiny circular ui basic button promote-button' id='" + idea.id + "'>Promote</div>"
     + "<div class='tiny circular ui basic button demote-button' id='"  + idea.id + "'>Demote</div>"
     + "<div class='ui basic yellow right floated button edit-button' id='"    + idea.id + "'>Edit</div>"
     + "<div class='ui basic red right floated button delete-button' id='"  + idea.id + "'>Delete</div>"
     + "</div>")
}

function clearIdeas() {
  $('#ideas-container').children().remove()
};

function truncate(text) {
  if (text.length > 100) {
    return makeShorter(text)
  } else { return text }
}

function makeShorter(text) {
  var fitWords = text.split(' ').reduce(function(agg, word) {
    if (agg.length < 100) {
      return agg = agg + " " + word
    } else {
      return agg
    }
  }, "")
  return fitWords.split(" ").slice(0, -1).join(' ')
}
