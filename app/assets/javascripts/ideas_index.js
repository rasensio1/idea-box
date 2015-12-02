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
    .append("<div class='ui segment idea-container'>"
             + "<h1 class='title'>" + idea.title + "</h1>"
             + "<p class='body'>" + truncate(idea.body) + "<p>"
             + "<p class='quality'>" + idea.quality + "<p>"
             + "<div class='ui button promote-button' id='" + idea.id + "'>Promote</div>"
             + "<div class='ui button demote-button' id='" + idea.id + "'>Demote</div>"
             + "<div class='ui button edit-button' id='" + idea.id + "'>Edit</div>"
             + "<div class='ui button delete-button' id='" + idea.id + "'>Delete</div>"
           +"</div>");
    if (index === last) {
      deleteIdea();
      prepareMoting();
      prepareEditing();
    }
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
