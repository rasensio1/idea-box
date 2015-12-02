$( document ).ready(function() {
  enableFilter();
});

function enableFilter() {
  $(".search-field").keypress(function(event) {
    console.log("pressed")
    var search = $(this).val() + String.fromCharCode(event.which)
    var ideas = $("#ideas-container").children()
    var hideMe = ideas.filter(function() {
      var title = $(this).children('.title').text()
      var body = $(this).children('.body').text()
      var searchIn = title + body
      return !(searchIn.indexOf(search) > -1)
    })
    debugger;
  })
};

function applyHide(elements) {
  elements.forEach(function(elem) {
    $(elem).toggleClass("hidden")
  })
}

