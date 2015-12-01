function prepareMoting() {
  promoteIdea();
  demoteIdea();
}

function promoteIdea() {
  $('.promote-button').click(function() {
    var ideaId = $(this).attr('id');
    mote("promote", ideaId)
  });
}

function demoteIdea() {
  $('.demote-button').click(function() {
    var ideaId = $(this).attr('id');
    mote("demote", ideaId)
  });
}


function mote(proOrDemote, ideaId) {
  $.ajax({
     method: "POST",
     url: "api/v1/ideas/" + ideaId,
     data: { id: ideaId,
             dothing: proOrDemote  },
     success: function() {
       clearIdeas();
       loadIdeas();
       prepareDelete();
     }
  });
}
