function tablefill(gaso){
  var i=0;
  var rengloninit="<tr><td>";
  var renglonend="</td></tr>";
  $(".renglones").html("<tr><td></td><td></td><td></td><td></td></tr>");
  for (i=0;i<gaso.length/4;i++)
  {
      var tr = $("<tr>").appendTo($(".renglones"));

      if (gaso[i].dist<20){
      
          $(tr).append("<td>"+gaso[i].name+"</td>");
          $(tr).append("<td>"+gaso[i].regular+"</td>");
          $(tr).append("<td>"+gaso[i].premium+"</td>");
          $(tr).append("<td>"+gaso[i].dist.toFixed(2)+" km"+"</td>");        
      //$(".renglones").append("</tr>");
      }
  }
}

$(document).ready(function() {

  // Notice I didn't set $(".jumbotron") to a var this time?
  // If you only plan to use that selector once it doesn't need to be a var
  $("#random-array").on("click", function() {
      a1={dist:2.2,
          name:"gaso cool",
          regular:19,
          premium:19.5
      };
      a2={dist:2.2,
          name:"gaso ogt",
          regular:21,
          premium:23
      };
      a=[a1,a2];
      tablefill(a);
      

  });

});
