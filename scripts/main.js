// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// ============== FIXED DATA =============

let experience = [
  {
    "company": "TCA Automação",
    "start": new Date("June 16, 2014"),
    "end": new Date("July 16, 2014"),
    "position": "Intern",
    "description": "My very first experience in web development was in another city on the northeast of Brazil. It was a 1 month vacation internship when I learned how basically web development works.",
    "website": "http://timeconsult.com.br",
    "languages": ["PHP"]
  },
  {
    "company": "GDAX Contact Center",
    "start": new Date("October 1, 2014"),
    "end": new Date("January 14, 2015"),
    "position": "Intern",
    "description": "Internship on web development. I worked with PHP with no frameworks, also I used to make some changes on HTML and CSS scripts",
    "website": "http://www.gdax.com.br",
    "languages": ["PHP"]
  },
  {
    "company": "Avenue Code",
    "start": new Date("January 15, 2015"),
    "end": new Date("October 1, 2016"),
    "position": "Intern",
    "description": "Internship on web and mobile development. During this almost 2 years, I worked with Ruby on Rails and have a little contact with other platforms for some days or weeks, with the first one I worked the most of the time and it was about employees hour register, that was used by the company employees",
    "website": "http://avenuecode.com",
    "languages": ["Ruby"],
    "stack": ["Ruby on Rails", "Git", "SCRUM"]
  },
  {
    "company": "Athene Technologies",
    "start": new Date("March 1, 2017"),
    "end": new Date("March 1, 2018"),
    "position": "Android/WEB Developer",
    "description": "Worked on a Android application that receives and send data to a hardware device by Bluetooth, also the app gets the global position and works with system Broadcasts. Also I had worked on a web API in NodeJS to receive the data",
    "website": "http://athenetec.com",
    "languages": ["Javascript", "Java"],
    "stack": ["NodeJS", "Android", "Git", "SCRUM"]
  },
  {
    "company": "Ioasys",
    "start": new Date("April 1, 2018"),
    "end": new Date("January 14, 2019"),
    "position": "Android Engineer",
    "description": "During my period working at Ioasys I worked in many different projects, but spent most of my time in a Teachers Book Store app",
    "website": "https://ioasys.com.br",
    "languages": ["Java"],
    "stack": ["Android", "Git", "SCRUM"]
  },
  {
    "company": "Critical Techworks",
    "start": new Date("May 6, 2019"),
    "end": "Present",
    "position": "Android Engineer",
    "description": "Working on BMW products demands",
    "website": "https://www.criticaltechworks.com",
    "languages": ["Kotlin"],
    "stack": ["Android", "Git", "SCRUM"]
  }
]


function getAge(){
  let today = new Date().getTime()
  let birthday = new Date("February 10, 1989").getTime()
  let difference = (today - birthday)

  return Math.floor(difference/(1000*60*60*24*365))
}

function timeInWords(experienceTime){
  var word = ""
  var years = Math.trunc(experienceTime);
  var months = Math.trunc(((((experienceTime - years)*100) / 100) * 12));

  if(years !== 0){
    if(years === 1){
      word += "1 year";
    }else{
      word += (years + " years");
    }
  }

  if(months !== 0){
    if(months === 1){
      if(word.length === 0){
        word += "1 month";
      }else{
        word += " and 1 month";
      }
    }else{
      if(word.length === 0){
        word += (months + " month");
      }else{
        word += (" and " + months + " months");
      }
    }
  }
  return word
}

function calculateExperienceTimeForLanguagesAndFrameworks(){
  const experienceTime = {"Ruby": 0, "Kotlin": 0, "Java": 0, "Javascript": 0, "Android": 0, "Ruby on Rails": 0}

  experience.forEach(function(xp){
    var endTime = xp.end === "Present" ? new Date() : xp.end;
    const timexp = (endTime.getTime() - xp.start.getTime())/(1000*60*60*24*365);

    // I avoided use includes function here to not iterate over the array multiple times, even it would be a more elegant solution
    xp.languages.forEach(function(lg){
      if(experienceTime[lg] !== undefined){
        experienceTime[lg] += timexp;
      }
    });

    if(xp.stack !== undefined){
      xp.stack.forEach(function(st){
      if(experienceTime[st] !== undefined){
          experienceTime[st] += timexp;
        }
      });
    }
  });

  return experienceTime;
}

function setAnalyticsEvents(){
  //https://developers.google.com/analytics/devguides/collection/analyticsjs/events
  $("#nav-code-base").click(function(){
    //clicked on code base
    gtag('send', 'event', 'NavigationMenu', 'Clicked', 'Checked Code Base', 0);
  })
}


$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

  const age = getAge()
  $("#agefield").html(age);

  const languagesExperienceTime = calculateExperienceTimeForLanguagesAndFrameworks();
  $("#ktxpt").html(timeInWords(languagesExperienceTime["Kotlin"]));
  $("#rbxpt").html(timeInWords(languagesExperienceTime["Ruby"]));
  $("#jvxpt").html(timeInWords(languagesExperienceTime["Java"]));
  $("#jsxpt").html(timeInWords(languagesExperienceTime["Javascript"]));
  $("#rorxp").html(timeInWords(languagesExperienceTime["Ruby on Rails"]));
  $("#andxp").html(timeInWords(languagesExperienceTime["Android"]));

  setAnalyticsEvents();
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
