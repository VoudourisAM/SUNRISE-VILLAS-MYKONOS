//For the activate dropdown navigation menu
function activeNav(x) {
  navBar = document.querySelector(".header-menu-1");
  navBar.classList.toggle("activeNav");
  //For transform 3 lines
  x.classList.toggle("change");


  if(document.getElementById("textMenu").innerHTML == "Menu" || document.getElementById("textMenu").innerHTML == "MENU"){
    document.getElementById("textMenu").innerHTML = "Close";
  }
  else {
    document.getElementById("textMenu").innerHTML = "Menu";
  }

  /*For Header Menu 1*/
  setTimeout(function() {
    document.getElementById("homeID").innerHTML = "HOME";
    /*document.getElementById("villaID").innerHTML = "";
    document.getElementById("locationID").innerHTML = "";
    document.getElementById("conciergeID").innerHTML = "";
    document.getElementById("galleryID").innerHTML = "";
    document.getElementById("contactID").innerHTML = ""*/;
  },1000)

  setTimeout(function() {
    /*document.getElementById("homeID").innerHTML = "HOME";*/
    document.getElementById("villaID").innerHTML = "THE VILLA";
    /*document.getElementById("locationID").innerHTML = " ";
    document.getElementById("conciergeID").innerHTML = " ";
    document.getElementById("galleryID").innerHTML = " ";
    document.getElementById("contactID").innerHTML = " ";*/
  },1100)

  setTimeout(function() {
    /*document.getElementById("homeID").innerHTML = "HOME";
    document.getElementById("villaID").innerHTML = "THE VILLA";*/
    document.getElementById("locationID").innerHTML = "LOCATION";
    /*document.getElementById("conciergeID").innerHTML = " ";
    document.getElementById("galleryID").innerHTML = " ";
    document.getElementById("contactID").innerHTML = " ";*/
  },1200)

  setTimeout(function() {
    /*document.getElementById("homeID").innerHTML = "HOME";
    document.getElementById("villaID").innerHTML = "THE VILLA";
    document.getElementById("locationID").innerHTML = "LOCATION";*/
    document.getElementById("conciergeID").innerHTML = "CONCIERGE";
    /*document.getElementById("galleryID").innerHTML = " ";
    document.getElementById("contactID").innerHTML = " ";*/
  },1300)

  setTimeout(function() {
    /*document.getElementById("homeID").innerHTML = "HOME";
    document.getElementById("villaID").innerHTML = "THE VILLA";
    document.getElementById("locationID").innerHTML = "LOCATION";
    document.getElementById("conciergeID").innerHTML = "CONCIERGE";*/
    document.getElementById("galleryID").innerHTML = "GALLERY";
    /*document.getElementById("contactID").innerHTML = "";*/
  },1400)

  setTimeout(function() {
    /*document.getElementById("homeID").innerHTML = "HOME";
    document.getElementById("villaID").innerHTML = "THE VILLA";
    document.getElementById("locationID").innerHTML = "LOCATION";
    document.getElementById("conciergeID").innerHTML = "CONCIERGE";
    document.getElementById("galleryID").innerHTML = "GALLERY";*/
    document.getElementById("contactID").innerHTML = "CONTACT";
  },1500)
 /*End of header menu 1*/
}


/* For Video */
function toggleVid(){
  let vidBackground = document.getElementById("backgroundVideo");
  let videoIcon = document.getElementById("videoIcon");

  if(vidBackground.paused){
    vidBackground.play();
    videoIcon.className = "fa fa-play-circle-o";
  }
  else {
    vidBackground.pause();
    videoIcon.className = "fa fa-pause-circle-o";
  }
}
/*
function video(){
  setTimeout(function() {
    vidBackground = document.getElementById("backgroundVideo");
  },15000)
}
video();
*/
/* End of toggle Video */

/*For Audio*/
function toggleVideoAudio(){
  let vidBackground = document.getElementById("backgroundVideo");
  let audioIcon = document.getElementById("audioIcon");

  vidBackground.muted = !vidBackground.muted;
  if (vidBackground.muted) {
    audioIcon.innerHTML = '<i class="fa fa-volume-off"></i>';
  } else {
    audioIcon.innerHTML = '<i class="fa fa-volume-up"></i>';
  }

}
/*End for toggle audio for video*/

/*For time hour*/
function hourTime(){
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  hours = checkTime(hours);
  minutes = checkTime(minutes);

  document.getElementById("time").innerHTML = hours + ":" + minutes;
  setTimeout(hourTime, 1000);
}

function checkTime(i) {
  if(i < 10) { i = "0" + i; }//add zero in front of numbers < 10 
  return i;
}
hourTime();

/* End for time hour */

/* Links in home with grayscale backgrounds */

/* Villa Link */
function linkVilla() {
  document.getElementById("villa-section").style.filter = "grayscale(100%)";

  setTimeout(function() {
    document.getElementById("villa-section").style.filter = "grayscale(0%)";
    document.getElementById("villa-section").style.transition = "1s";
  },700)
}

function paragraphVilla() {
  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "Holidays in Mykonos";
    document.getElementById("villa_p2").innerHTML = "";
    document.getElementById("villa_p3").innerHTML = "";
    document.getElementById("villa_p4").innerHTML = "";
    document.getElementById("villa_p5").innerHTML = "";
    document.getElementById("villa_p6").innerHTML = "";
    document.getElementById("villa_p7").innerHTML = "";

    document.getElementById("villa_p1").classList.add("visible");
  }, 0);
  
  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "";
    document.getElementById("villa_p2").innerHTML = "Mykonos Villa Holidays";
    document.getElementById("villa_p3").innerHTML = "";
    document.getElementById("villa_p4").innerHTML = "";
    document.getElementById("villa_p5").innerHTML = "";
    document.getElementById("villa_p6").innerHTML = "";
    document.getElementById("villa_p7").innerHTML = "";

    document.getElementById("villa_p2").classList.add("visible");
  }, 3000);

  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "";
    document.getElementById("villa_p2").innerHTML = "";
    document.getElementById("villa_p3").innerHTML = "Explore the Sunrise Villas";
    document.getElementById("villa_p4").innerHTML = "";
    document.getElementById("villa_p5").innerHTML = "";
    document.getElementById("villa_p6").innerHTML = "";
    document.getElementById("villa_p7").innerHTML = "";

    document.getElementById("villa_p3").classList.add("visible");
  }, 6000);

  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "";
    document.getElementById("villa_p2").innerHTML = "";
    document.getElementById("villa_p3").innerHTML = "";
    document.getElementById("villa_p4").innerHTML = "Mykonos Villa Natural";
    document.getElementById("villa_p5").innerHTML = "";
    document.getElementById("villa_p6").innerHTML = "";
    document.getElementById("villa_p7").innerHTML = "";

    document.getElementById("villa_p4").classList.add("visible");
  }, 9000);

  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "";
    document.getElementById("villa_p2").innerHTML = "";
    document.getElementById("villa_p3").innerHTML = "";
    document.getElementById("villa_p4").innerHTML = "";
    document.getElementById("villa_p5").innerHTML = "Stunning View in Sunrise Villas";
    document.getElementById("villa_p6").innerHTML = "";
    document.getElementById("villa_p7").innerHTML = "";

    document.getElementById("villa_p5").classList.add("visible");
  }, 12000);

  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "";
    document.getElementById("villa_p2").innerHTML = "";
    document.getElementById("villa_p3").innerHTML = "";
    document.getElementById("villa_p4").innerHTML = "";
    document.getElementById("villa_p5").innerHTML = "";
    document.getElementById("villa_p6").innerHTML = "Sunrise Villas Pool";
    document.getElementById("villa_p7").innerHTML = "";

    document.getElementById("villa_p6").classList.add("visible");
  }, 15000);

  setTimeout(function() {
    clearParagraphs();

    document.getElementById("villa_p1").innerHTML = "";
    document.getElementById("villa_p2").innerHTML = "";
    document.getElementById("villa_p3").innerHTML = "";
    document.getElementById("villa_p4").innerHTML = "";
    document.getElementById("villa_p5").innerHTML = "";
    document.getElementById("villa_p6").innerHTML = "";
    document.getElementById("villa_p7").innerHTML = "Enjoy the Mykonian hospitality with friends";

    document.getElementById("villa_p7").classList.add("visible");
  }, 18000);

}


function clearParagraphs() {
  const paragraphs = document.getElementById("textarea_P_ID").querySelectorAll("p");
  paragraphs.forEach(paragraph => {
    paragraph.classList.remove("visible");
    paragraph.innerHTML = "";
  })
}

function startRainstorm() {
  paragraphVilla();
  setInterval(function() {
    clearParagraphs();
    paragraphVilla();
  }, 21000); // Adjust this value as needed
}

startRainstorm();

/*for image slider*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/* Location Link in index and Subpage */
function linkLocation() {
  document.getElementById("location-section").style.filter = "grayscale(100%)";

  setTimeout(function() {
    document.getElementById("location-section").style.filter = "grayscale(0%)";
    document.getElementById("location-section").style.transition = "1s";
  },700)
}

/* Concierge Link */
function linkConcierge() {
  document.getElementById("concierge-section").style.filter = "grayscale(100%)";

  setTimeout(function() {
    document.getElementById("concierge-section").style.filter = "grayscale(0%)";
    document.getElementById("concierge-section").style.transition = "1s";
  },700)
}


