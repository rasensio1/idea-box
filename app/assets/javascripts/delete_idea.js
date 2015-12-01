$( window).load(function() {
  deleteIdea();
});

function deleteIdea() {
  console.log("loaded")
  $('.delete-button').click(function() {

    var ideaId = $(this).attr('id');
    console.log("clicked");

    $.ajax({
       method: "DELETE",
       url: "api/v1/ideas/" + ideaId,
       data: { id: ideaId },
       success: function() {
         clearIdeas();
         loadIdeas();
         prepareDelete();
       }
    });
  });
}

