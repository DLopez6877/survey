// back-end


// front-end

$(function() {
  $("#form-btn").submit(function(event) {

    var flavor = $("input:radio[name=flavor]:checked").val();
    var foods = $("input:radio[name=foods]:checked").val();

    $(".flavor").text(flavor);
    $(".foods").text(foods);

    $("#thanks").show();

    event.preventDefault();
  });

});
