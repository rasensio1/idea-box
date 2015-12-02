function prepareEditing() {
  $('.edit-button').click(function() {
    renderEditForm(this)
    });
};

function renderEditForm(node) {
  var title = $(node).siblings('.title').text();
  var body = $(node).siblings('.body').text();
  var id = $(node).attr('id');
  $(node).parent().html(
      "<form class='ui form'>"
        + "<div class='field'>" 
            + "<input type='text' name='idea[title]' class='edit_idea_title' id='" + id +"'>" 
        + "</div>"
        + "<div class='field'>" 
            + "<input type='text' name='idea[body]' class='edit_idea_body' id='"+ id +"'>" 
        + "</div>"
        + "<div class='ui button edit_idea_submit' id='"+ id +"'>" 
            + "<p>Submit</p>" 
        + "</div>" 
    + "</form>")

  $("#"+id+".edit_idea_title").val(title)
  $("#"+id+".edit_idea_body").val(body)
  prepareEditSubmit();
};

function prepareEditSubmit() {
  $(".edit_idea_submit").click(function() {
    var title = $(this).siblings().children('.edit_idea_title').val()
    var body = $(this).siblings().children('.edit_idea_body').val()
    var id = $(this).attr('id')
    debugger;
    $.ajax({
       method: "PATCH",
       url: "api/v1/ideas/" + id,
       data: { id: id,
               title: title,
               body: body},
       success: function() {
         loadIdeas();
       }
    });
  });
};
