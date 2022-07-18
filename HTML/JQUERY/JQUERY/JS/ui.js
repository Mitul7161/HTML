$(document).ready(function () {
    $("#MyAccordion").accordion();
  });

  $(document).ready(function () {
			
    $("#MyDOBPicker1").datepicker({
          showWeek: true,
          yearSuffix: "(DOB)",
          showAnim: "slide"
      });

      
      $("#MyDOBPicker2").datepicker();
      $("#MyDOBPicker2").datepicker("show");
      
  });

  $(document).ready(function(){
    $("#MyDiv").dialog({
     autoOpen: false,
     });
    $("#MyButton").click(function () {
        $("#MyDiv").dialog("open");
    });
});

$(document).ready(function() {
    $("#AgeRangeSlider").slider({
        orientation:"horizontal",
        min: 18,
        max: 100,
        value: 18,
        slide: function (event, ui) {
            $("#AgeValue").val(ui.value);
        }
    });
    $("#AgeValue").val($("#AgeRangeSlider").slider("value"));

    $("#PriceValue").slider({
      range: true,
        min: 1,
        max: 500,
        values: [1, 50],
       
       
        start: function (event, ui) {
            $("#startvalue")
           .val("₹" + ui.values[0]);
        },
        stop: function (event, ui) {
            $("#endvalue")
           .val("₹" + ui.values[1]);
        },
        change: function (event, ui) {
            $("#changevalue")
           .val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
        },
        slide: function (event, ui) {
            $("#slidevalue")
           .val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
        }
    });
});



$(document).ready(function () {
    $("#MyValueList").spinner();
 });


 $(document).ready(function(){
    $("#stars-default").rating('create',
       {
            coloron: 'red',
            onClick: function () {
               alert('rating is ' + this.attr('data-rating'));
               
            }
        });
    });

    $(document).ready(function () {
        $("#MyTabDiv").tabs();

      });