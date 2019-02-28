/**** Script for "Im a Business/Im a Shopper" buttons ****/

function toggleBusiness() {

  var text1 = document.getElementById("myDIV1");
  var text2 = document.getElementById('myDIV2')

    if (text1.style.display === "none") {

      text1.style.display = "block";
      text2.style.display = "none";

    } else {

      text1.style.display = "none";

    }

  }


function toggleShopper() {

  var text2 = document.getElementById("myDIV2");
  var text1 = document.getElementById('myDIV1')

    if (text2.style.display === "none") {
      
      text2.style.display = "block";
      text1.style.display = "none";

    } else {

      text2.style.display = "none";

    }
}


