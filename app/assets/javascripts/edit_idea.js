function prepareEditing() {
  $('.edit-button').click(function() {
    console.log('clicked edit button')
    renderEditForm(this)
    });
};

function renderEditForm(node) {
  debugger;
  var title = $(node).siblings('.title').text()
  var body = $(node).siblings('.body').text()
  $(node).parent().html(
      "<input type='text' name='idea[title]' id='idea_title'>"
      + "<input type='text' name='idea[body]' id='idea_body'>"
      + "<div id='submit-button' class='ui button'><p>Submit</p></div>"
      )
};
