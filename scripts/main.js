// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// ============== FIXED DATA =============

let programming_languages = [
  {
    "name": "Kotlin",
    "image_path": ""
  },
  {
    "name": "Java",
    "image_path": ""
  },
  {
    "name": "Javascript",
    "image_path": ""
  },
  {
    "name": "Ruby",
    "image_path": ""
  },
  {
    "name": "PHP",
    "image_url": ""
  }
]

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
    "description": "Internship on web and mobile development. During this almost 2 years, I worked with Ruby on Rails, NodeJS and Android, with the first one I worked the most of the time and it was about employees hour register, that was used by the company employees",
    "website": "http://avenuecode.com",
    "languages": ["Ruby", "Java"],
    "stack": ["Ruby on Rails", "Android", "Git", "SCRUM"]
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


$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

  const age = getAge()
  $("#agefield").html(age);
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
