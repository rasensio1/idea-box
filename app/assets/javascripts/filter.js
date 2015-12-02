$( document ).ready(function() {
  enableFilter();
});

function enableFilter() {
  $(".search-field").keyup(function(event) {
    var search = $(this).val().toLowerCase()
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

