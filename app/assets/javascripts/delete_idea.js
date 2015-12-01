$( window).load(function() {
  deleteIdea();
});

function deleteIdea() {
  $('.delete-button').click(function() {

    var ideaId = $(this).attr('id');
    console.log("clicked");

    $.ajax({
       method: "DELETE",
       url: "api/v1/ideas/" + ideaID,
       data: { id: ideaId },
       success: function() {
         clearIdeas();
         loadIdeas()
       }
    });
  });
}

