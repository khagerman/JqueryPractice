$("form").on("submit", function (e) {
  e.preventDefault();
  let movie = $("#movie").val();
  let rating = $("#rating").val();
  $(".movieratings").append(`<div>
   <h3> I rate ${movie}  ${rating}/10</h3>
    <button class="delete">Delete</button>
    </div>`);

  $(".delete").on("click", function () {
    $(this).parent().remove();
  });
  $("input").val("");
});

//     "<li>'I' + 'rate'+movie+''+ rating'/10' '</li><button class='delete'>delete me</button>"
//   );
