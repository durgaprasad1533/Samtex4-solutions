$( function() {

  //initial val

  $("#ahuir1").val("10");
  $("#ahuir2").val("20");

  var minval1 = 0;
  var minval2 = 11;

  $("#satspi1").dpNumberPicker({
    step: 1,
    min:  minval1,
    max: $("#ahuir1").val(),
    format:false,
    formatter: function(val){
        return ""+val;
    },
});

     $("#satspi2").dpNumberPicker({
      step: 1,
      min: minval2,
      max: $("#ahuir2").val(),
      value:minval2,  
      format:false,
      formatter: function(val){
        return ""+val;
    },
  });
  
  
//----------------------------------------------
$("#satspi2 input").each(function(i,v){
    $(this).attr(  "id", "valueoff_" + i);
});

  $("#rangeset").click(function(){
    // alert($("#satspi1").val("input").val());
    //alert ($(".dp-numberPicker-input").val(),);
    $( "#slider-range1" ).slider({values: [$("#valueoff_0").val() ]});
    //$( "#set1" ).val($( "#slider-range1" ).slider( "values", 0) );
    //$( "#set2" ).val($( "#slider-range1" ).slider( "values", 1) );
    
    var samv1 =  $(".dp-numberPicker-input").val();
    $("#setalarmminval1").html(samv1);

     var samv2 =  $("#valueoff_0").val();
     $("#setalarmminval2").html(samv2);

        // $( "#slider-range2" ).slider({values: [$(".dp-numberPicker-input").val(), $("#valueoff_0").val()]});
        // $( "#set3" ).val($( "#slider-range2" ).slider( "values", 0 ) );
        // $( "#set4" ).val($( "#slider-range2" ).slider( "values", 1 ) );
        // $( "#slider-range2" ).refresh();
         
        
    
   });
 
   //-------------------------------------------
   var handle = $( "#custom-handle" );

  var mn = 1;
  var mx = 20;

   $( "#slider-range1" ).slider({
    create: function() {
      handle.text( $( this ).slider( "value" ) );
  },
     min: mn,
     max: mx,
     range: "min",
     tip: true,
     values: [+1], 
     slide: function( event, ui ) {
      handle.text( ui.value );
       
       $( "#set1" ).val( ui.values[ 0 ] );
       //$( "#set2" ).val( ui.values[ 1 ] );
     }
     
   });

 
   //$( "#slider-range1" ).slider( "disable" );

   //$( "#set1" ).val($("#slider-range1" ).slider( "values", 0 ) );
   //$( "#set2" ).val($("#slider-range1" ).slider( "values", 1 ) );
    
// slider-range1 end ////

//Alarms min max
 
//End Alarms min max
 
$("#getAlval").click(function(){
  alert($("#custom-handle").html() + " |" + $("#setalarmminval1").html() + " |" + $("#setalarmminval2").html());

});
  var ma2 = $("#setalarmminval1").text();
  var mx2 = $("#setalarmminval2").text();

  console.log(ma2,mx2)

   var getOutput = $("#state");
   var getSlider = $("#slider-range2");

   

   getSlider.slider({
            range:true,
            min:1,
            max:20,
            values:[ma2, mx2],
            step:1, 
            slide:function(event, ui){
                 getOutput.html( ui.values[0]+' - '+ui.values[1]+'Tk');
              $("#set3").val(ui.values[0]);
              $("#set4").val(ui.values[1]);
            }
      });
      getOutput.html(getSlider.slider("values",0)+' - '+getSlider.slider("values",1)+"Tk");
          //$("#set3").val(getSlider.slider('values', 0));
         // $("#set4").val(getSlider.slider('values', 1));
    

  //------------------------------------------------------------------------------------------------------------------

      $( "#slider-range3" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [269, 700 ],
        slide: function( event, ui ) {
          $( "#set5" ).val(  ui.values[ 0 ] );
          $( "#set6" ).val( ui.values[ 1 ] );
        }
      });

      $( "#set5" ).val($( "#slider-range3" ).slider( "values", 0 ) );
      $( "#set6" ).val($( "#slider-range3" ).slider( "values", 1 ) );


      $( "#slider-rangerh1" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [139, 599 ],
        slide: function( event, ui ) {
          $( "#rh1" ).val(  ui.values[ 0 ] );
          $( "#rh2" ).val( ui.values[ 1 ] );
        }
      });
      $( "#rh1" ).val($( "#slider-rangerh1" ).slider( "values", 0 ) );
      $( "#rh2" ).val($( "#slider-rangerh1" ).slider( "values", 1 ) );

      $( "#slider-rangerh2" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [169, 440 ],
        slide: function( event, ui ) {
          $( "#rh3" ).val(  ui.values[ 0 ] );
          $( "#rh4" ).val( ui.values[ 1 ] );
        }
      });
      $( "#rh3" ).val($( "#slider-rangerh2" ).slider( "values", 0 ) );
      $( "#rh4" ).val($( "#slider-rangerh2" ).slider( "values", 1 ) );


      $( "#slider-rangerh3" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [199, 640 ],
        slide: function( event, ui ) {
          $( "#rh5" ).val(  ui.values[ 0 ] );
          $( "#rh6" ).val( ui.values[ 1 ] );
        }
      });
      $( "#rh5" ).val($( "#slider-rangerh3" ).slider( "values", 0 ) );
      $( "#rh6" ).val($( "#slider-rangerh3" ).slider( "values", 1 ) );


      
      $( "#slider-ra1" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [139, 599 ],
        slide: function( event, ui ) {
          $( "#ra1" ).val(  ui.values[ 0 ] );
          $( "#ra2" ).val( ui.values[ 1 ] );
        }
      });
      $( "#ra1" ).val($( "#slider-ra1" ).slider( "values", 0 ) );
      $( "#ra2" ).val($( "#slider-ra1" ).slider( "values", 1 ) );

      $( "#slider-ra2" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [169, 440 ],
        slide: function( event, ui ) {
          $( "#ra3" ).val(  ui.values[ 0 ] );
          $( "#ra4" ).val( ui.values[ 1 ] );
        }
      });
      $( "#ra3" ).val($( "#slider-ra2" ).slider( "values", 0 ) );
      $( "#ra4" ).val($( "#slider-ra2" ).slider( "values", 1 ) );


      $( "#slider-ra3" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [199, 640 ],
        slide: function( event, ui ) {
          $( "#ra5" ).val(  ui.values[ 0 ] );
          $( "#ra6" ).val( ui.values[ 1 ] );
        }
      });
      $( "#ra5" ).val($( "#slider-ra3" ).slider( "values", 0 ) );
      $( "#ra6" ).val($( "#slider-ra3" ).slider( "values", 1 ) );

      $( "#slider-rahtemp1" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [199, 640 ],
        slide: function( event, ui ) {
          $( "#ratemp1" ).val(  ui.values[ 0 ] );
          $( "#ratemp2" ).val( ui.values[ 1 ] );
        }
      });
      $( "#ratemp1" ).val($( "#slider-rahtemp1" ).slider( "values", 0 ) );
      $( "#ratemp2" ).val($( "#slider-rahtemp1" ).slider( "values", 1 ) );

      $( "#slider-rahtemp2" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [199, 640 ],
        slide: function( event, ui ) {
          $( "#ratemp3" ).val(  ui.values[ 0 ] );
          $( "#ratemp4" ).val( ui.values[ 1 ] );
        }
      });
      $( "#ratemp3" ).val($( "#slider-rahtemp2" ).slider( "values", 0 ) );
      $( "#ratemp4" ).val($( "#slider-rahtemp2" ).slider( "values", 1 ) );


      $( "#slider-rahtemp3" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [199, 640 ],
        slide: function( event, ui ) {
          $( "#ratemp5" ).val(  ui.values[ 0 ] );
          $( "#ratemp6" ).val( ui.values[ 1 ] );
        }
      });
      $( "#ratemp5" ).val($( "#slider-rahtemp3" ).slider( "values", 0 ) );
      $( "#ratemp6" ).val($( "#slider-rahtemp3" ).slider( "values", 1 ) );



      $("#ahutemp1").dpNumberPicker({
        step: 0.25,
        format: "#.##",
        formatter: function(val){
            return ""+val;
        }
    });

    $("#ahutemp2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
  });

  $("#ahutemp3").dpNumberPicker({
    step: 0.25,
    format: "#.##",
    formatter: function(val){
        return ""+val;
    }
});




      $("#ahurh1").dpNumberPicker({
        step: 0.25,
        format: "#.##",
        formatter: function(val){
            return ""+val;
        }
    });

    $("#ahurh2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
  });

  $("#ahurh3").dpNumberPicker({
    step: 0.25,
    format: "#.##",
    formatter: function(val){
        return ""+val;
    }
});

      $("#spi1").dpNumberPicker({
        step: 0.25,
        format: "#.##",
        formatter: function(val){
            return ""+val;
        }
    });





    $("#spi3").dpNumberPicker({
        step: 0.25,
        format: "#.##",
        formatter: function(val){
            return ""+val;
        }
    });

    
    $("#srh1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
  });

  $("#srh2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
  });

  $("#srh3").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
  });


    $("#ea1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#ea2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

    $("#ea1d").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#ea2d").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

    $("#fa1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#fa2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

    $("#raa1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#raa2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

    $("#chil1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#chil2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#hot1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#hot2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

    $("#fu1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#fu2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#fu3").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

    $("#sfvd1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#sfvd2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#ef1").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#ef2").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#ef3").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });
    $("#ef4").dpNumberPicker({
      step: 0.25,
      format: "#.##",
      formatter: function(val){
          return ""+val;
      }
    });

  } );

   

  