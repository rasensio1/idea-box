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
      "<input type='text' name='idea[title]' class='edit_idea_title' id='" +id+"'>"
      + "<input type='text' name='idea[body]' class='edit_idea_body' id='"+id+"'>"
      + "<div class='ui button edit_idea_button' id='"+id+ "'><p>Submit</p></div>"
      )
  $("#"+id+".edit_idea_title").val(title)
  $("#"+id+".edit_idea_body").val(body)

};
