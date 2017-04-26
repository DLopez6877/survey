// back-end

var flavor = $("input:radio[name=flavor]:checked").val();

// front-end

$(function() {
  $("#form-btn").submit(function(event) {
    $("#thanks").show();

    event.preventDefault();
  });

});
