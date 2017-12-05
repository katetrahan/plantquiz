const reducer = (accumulator, currentValue) => accumulator + currentValue;
$(document).ready(function(){
  $("form#plantSurvey").submit(function(event){
    event.preventDefault();
    var plantArray = [];
    $("#responses").show();
    $("input:checkbox[name=operator]:checked").each(function(){
      var plantTypeOfUser = parseInt($(this).val());
      plantArray.push(plantTypeOfUser);
    });

    var plantRemover = plantArray.reduce(reducer);
    if (plantRemover <=  14 ){
      $("#responses").text("Cactus");
    } else if (plantRemover >= 15 &&  plantRemover <= 28 ) {
      $("#responses").text("Fern")
    } else if (plantRemover >= 29) {
      $("#responses").text("Evergreen")
    } else {
      console.log("event else");
    }
    // $('#responses').append(plantRemover + "<br>");
  });
});
