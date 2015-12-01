function deleteIdea() {
  $('.delete-button').click(function() {

    var ideaId = $(this).attr('id');

    $.ajax({
       method: "DELETE",
       url: "api/v1/ideas/" + ideaId,
       data: { id: ideaId },
       success: function() {
         clearIdeas();
         loadIdeas();
       }
    });
  });
}

