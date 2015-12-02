$( document ).ready(function() {
  enableFilter();
});

function enableFilter() {
  $(".search-field").keydown(function(event) {
    console.log("pressed")
    var keyCode = event.keyCode
    var lastKey = String.fromCharCode(event.which)
    if (keyCode === 8) {
      var raw_search = $(this).val().slice(0, -1)
    }else {
      var raw_search = $(this).val() + lastKey
    }
    var search = raw_search.toLowerCase()
    var ideas = $("#ideas-container").children()
    ideas.removeClass("hidden")
    var hideMe = ideas.filter(function() {
      var title = $(this).children('.title').text()
      var body = $(this).children('.body').text()
      var searchIn = (title + body).toLowerCase()
      return !(searchIn.indexOf(search) > -1)
    })
    hideMe.addClass("hidden")
  })
};

