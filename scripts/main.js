// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

const resumeData = {
  name: 'João Lucas Veloso Gouveia',
  shortName: "João Gouveia",
  birthDate: new Date(1989, 1, 10), // Note: In JavaScript, months are 0-indexed
  baseTown: 'Lisboa - Portugal',
  email: 'j.lucas.gouveia@gmail.com',
  facebook: "https://www.facebook.com/joaolucas.gouveia.9/",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-lucas-veloso-gouveia-1319a38a/",
  github: 'joaogouveia89',
  jobTitle: 'Software Engineer',
  description: 'Software engineer with experience in native Android development using both Kotlin and Java, and with several common libraries for development for the platform. I have a habit of optimizing my work by automating repetitive daily tasks and using a personal checklist to manage my own to-do list.',
  experiences: [
    {
      jobTitle: 'Mobile engineer',
      company: 'Bosch PT',
      startDate: new Date(2022, 5, 27), // Note: In JavaScript, months are 0-indexed
      endDate: null,
      description: 'I worked on a project called Refine My Site, which was a mobile app for Android and iOS to manage construction projects. Some functionalities implemented were camera image uploading, offline behavior, and push notifications. The mobile team was based in Portugal and Germany, but there were other teams in other countries as well.',
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'jetpack compose', 'kmm', 'flow', 'kotlin'],
    },
    {
      jobTitle: 'Mobile Engineer',
      company: 'Critical Techworks',
      startDate: new Date(2019, 4, 6), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2022, 5, 27), // Note: In JavaScript, months are 0-indexed
      description: 'I worked on an Android application written in Kotlin to handle audio entertainment operations. In this project, we consumed external services like Spotify API, Apple CarPlay, and also worked with internal storage media data (USB) and tuner external interface. This project is just a part of the platform for the future generation of BMW media kit computers, so I worked alongside multiple teams in Portugal, Germany, and China.',
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'android auto', 'room db', 'live data', 'kotlin'],
    },
    {
      jobTitle: 'Android developer',
      company: 'Ioasys',
      startDate: new Date(2018, 3, 2), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2019, 0, 4), // Note: In JavaScript, months are 0-indexed
      description: 'Most of the time, I worked on an Android application programmed with Java, which uses MVVM, Room database, and HTTP requests using Retrofit library to handle data. Some external libraries to handle animations, also RxJava to work with reactive programming. The application is an interface between teachers and the bookstore platform. Also, I worked on some smaller projects of the software factory.',
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'rxjava', 'java'],
    },
    {
      jobTitle: 'Android developer',
      company: 'Life Link',
      startDate: new Date(2017, 4, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2017, 11, 22), // Note: In JavaScript, months are 0-indexed
      description: 'Worked on an Android application written in Java to communicate with hardware by Bluetooth 4.0. The application receives the information provided by the hardware and sends it to a remote server via an API.',
      skillsUsed: ['android', 'git', 'java', 'bluetooth 4.0'],
    },
    {
      jobTitle: 'Internship',
      company: 'Avenue Code',
      startDate: new Date(2015, 0, 12), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2016, 9, 7), // Note: In JavaScript, months are 0-indexed
      description: 'I worked on ACDC app, which was a project used internally by the company employees to control their worked hours and vacation management. It was my first contact with Ruby on Rails and PostgresSQL. Also, I had contact with some frontend features like Angular and Ember, and Git for versioning. This project was challenging because so many people in many branches were using it, and there were so many issues to solve and implement.',
      skillsUsed: ['ruby on rails', 'ruby', 'postgresql'],
    },
    {
      jobTitle: 'Internship',
      company: 'GDAX Contact Center',
      startDate: new Date(2014, 9, 6), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2015, 0, 9), // Note: In JavaScript, months are 0-indexed
      description: 'GDAX is a telemarketing company, and the application I worked on was for sales recording by the team who call the clients. For this application, it used a framework created internally written in PHP and using a MySQL database. It was my very first contact with code versioning using SVN and some frontend tasks.',
      skillsUsed: ['php', 'mysql'],
    },
    {
      jobTitle: 'Vacation internship',
      company: 'TCA',
      startDate: new Date(2014, 5, 2), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2014, 6, 2), // Note: In JavaScript, months are 0-indexed
      description: 'Very first contact professionally with programming. I spent a month working on an application for file sharing between the employees of the engineering projects of the company, taking into consideration privileges and access permissions.',
      skillsUsed: ['php', 'mysql'],
    },
    {
      jobTitle: 'Digital introduction instructor',
      company: 'Autonomous',
      startDate: new Date(2009, 6, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2017, 6, 31), // Note: In JavaScript, months are 0-indexed
      description: "Private classes on digital introduction to elderly people. In these classes, I addressed topics like email and social networks usage (Instagram, Facebook, Gmail) and some useful usage habits like transferring pictures from the smartphone to the PC, pairing the smartphone to other devices in the client's home, and so on.",
      skillsUsed: [],
    },
  ],
  education: [
    {
      university: 'Udacity',
      title: 'Nanodegree C++ Program',
      category: 'online course',
      startDate: new Date(2021, 4, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2021, 8, 1), // Note: In JavaScript, months are 0-indexed
    },
    {
      university: 'FUMEC',
      title: 'Bsc Computer Science',
      category: 'university',
      startDate: new Date(2014, 7, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2018, 11, 10), // Note: In JavaScript, months are 0-indexed
    },
    {
      university: 'PUCMINAS',
      title: 'Automation Engineering',
      category: 'university',
      startDate: new Date(2009, 7, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2014, 6, 1), // Note: In JavaScript, months are 0-indexed
    },
  ],
  languages: [
    {
      language: 'English',
      proficiency: 'Fluent in writing, reading, and speaking',
    },
    {
      language: 'Portuguese',
      proficiency: 'First language',
    },
  ],
};

function openFacebook(){
  window.open(resumeData["facebook"], '_blank');
}

function openGithub(){
  window.open("https://github.com/" + resumeData["github"], '_blank');
}

function openLinkedin(){
  window.open(resumeData["linkedin"], '_blank');
}

function getAge(){
  const today = new Date();
  const birthDate = resumeData["birthDate"];
  
  var age = today.getFullYear() - birthDate.getFullYear();
  
  // Check if the birthday hasn't occurred yet this year
  if (today.getMonth() <   birthDate.getMonth()) {
    age--;
  }
  
  return age;
  
}

function emailToClipboard(){
   navigator.clipboard.writeText(resumeData["email"]);
}

function fetchSkillsSummary(){
  const skillExperienceMap = {};

  // Iterate through each experience entry
  resumeData.experiences.forEach((experience) => {
    const { skillsUsed, startDate, endDate } = experience;

    // Calculate the duration of the experience in months
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate ? endDate.getFullYear() : new Date().getFullYear();
    const endMonth = endDate ? endDate.getMonth() : new Date().getMonth();

    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    // Iterate through the skills used in this experience
    skillsUsed.forEach((skill) => {
      if (!skillExperienceMap[skill]) {
        skillExperienceMap[skill] = 0;
      }
      skillExperienceMap[skill] += totalMonths;
    });
  });

  return skillExperienceMap;
}

function formatMonthsAsDuration(months) {
  if (months === 0) {
    return "0 months";
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = "";

  if (years > 0) {
    result += years + (years === 1 ? " year" : " years");
    if (remainingMonths > 0) {
      result += " and ";
    }
  }

  if (remainingMonths > 0) {
    result += remainingMonths + (remainingMonths === 1 ? " month" : " months");
  }

  return result;
}

function experienceTimeInMonths() {
  const currentDate = new Date();
  //in my case I'm ignoring the first experience in the count because it was not a coding experience
  const date = resumeData.experiences[resumeData.experiences.length - 2].startDate;
  const yearsDiff = currentDate.getFullYear() - date.getFullYear();
  const monthsDiff = currentDate.getMonth() - date.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

function sortObjectByValueDesc(inputObject) {
  // Convert the object to an array of key-value pairs
  const keyValueArray = Object.entries(inputObject);

  // Sort the array by values (ascending order)
  keyValueArray.sort((a, b) => b[1] - a[1]);

  // Create a new object from the sorted array
  const sortedObject = keyValueArray.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return sortedObject;
}

function experiencePercentage(experience){
  const fullExperience = experienceTimeInMonths();
  /*
  fullExperience ----- 100
  experience ----- x
  */
  return (experience * 100) / fullExperience;
}

function generateSkillsContainer(skillsSummary, experienceMonths){
  newRow = true;
  finalHtml = '';
  for (const skill in skillsSummary) {
    if (skillsSummary.hasOwnProperty(skill)) {
      const experienceInMonths = skillsSummary[skill];
      if(newRow){
        finalHtml += '<div class="row">';
      }
      finalHtml += '<div class="col-md-6">'
      finalHtml += '<div class="progress-container progress-primary">';
      finalHtml += '<span class="progress-badge">' + skill + '</span>';
      finalHtml += '<div class="progress">'
      finalHtml += '<div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ' + experiencePercentage(experienceInMonths) + '%;"></div>';
      finalHtml += '<span class="progress-value">' + formatMonthsAsDuration(experienceInMonths) + '</span>';
      // close progress
      finalHtml += '</div>';
      
      // close progress-container progress-primary
      finalHtml += '</div>';
      //closing col
      finalHtml += '</div>';
      if(!newRow){
        finalHtml += '</div>';
      }
      newRow = !newRow;
    }
  }
  return finalHtml;
}

function generateEducationContainer(){
  data = resumeData.education;
  finalHtml = '';
  for(let idx = 0; idx < data.length; idx++){
    finalHtml += '<div class="card">';
    finalHtml += '<div class="row">';
    finalHtml += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body cc-education-header">';
    finalHtml += '<p>' + data[idx].startDate.getFullYear() + ' - ' + data[idx].endDate.getFullYear() + '</p>';
    finalHtml += '<div class="h5">' + data[idx].university + '</div>'

    // closing card-body cc-education-header
    finalHtml += '</div>';
    //closing col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"
    finalHtml += '</div>';

    finalHtml += '<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body">';
    finalHtml += '<div class="h5">' + data[idx].title + '</div>';
    finalHtml += '<p class="category">' + data[idx].category + '</p>';
    // closing card-body
    finalHtml += '</div>';
    // closing col-md-9" data-aos="fade-left
    finalHtml += '</div>';
    // closing row
    finalHtml += '</div>';
    //closing card
    finalHtml += '</div>';
  }
  return finalHtml;
}

function generateExperienceContainer(){

  /*
    jobTitle: 'Vacation internship',
      company: 'TCA',
      startDate: new Date(2014, 5, 2), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2014, 6, 2), // Note: In JavaScript, months are 0-indexed
      description: 'Very first contact professionally with programming. I spent a month working on an application for file sharing between the employees of the engineering projects of the company, taking into consideration privileges and access permissions.',
      skillsUsed: ['php', 'mysql'],
  */
  data = resumeData.experiences;
  finalHtml = '';
  for(let idx = 0; idx < data.length; idx++){
    let endDateYear = data[idx].endDate == null ? (new Date()).getFullYear() : data[idx].endDate.getFullYear();
    finalHtml += '<div class="card">';
    finalHtml += '<div class="row">';
    finalHtml += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body cc-education-header">';
    finalHtml += '<p>' + data[idx].startDate.getFullYear() + ' - ' + endDateYear + '</p>';
    finalHtml += '<div class="h5">' + data[idx].company + '</div>'

    // closing card-body cc-education-header
    finalHtml += '</div>';
    //closing col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"
    finalHtml += '</div>';

    finalHtml += '<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body">';
    finalHtml += '<div class="h5">' + data[idx].jobTitle + '</div>';
    finalHtml += '<p class="category">' + data[idx].skillsUsed.join(", ") + '</p>';
    finalHtml += '<p>' + data[idx].description + '</p>';
    // closing card-body
    finalHtml += '</div>';
    // closing col-md-9" data-aos="fade-left
    finalHtml += '</div>';
    // closing row
    finalHtml += '</div>';
    //closing card
    finalHtml += '</div>';
  }
  return finalHtml;
}


$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

  $('[data-toggle="popover"]').click(function () {
    var $popover = $(this);

    // Show the popover
    $popover.popover('show');

    // Set a timeout to hide the popover after 500ms
    setTimeout(function () {
        $popover.popover('hide');
    }, 800);
  });

  experienceMonths = experienceTimeInMonths();

  //Fill CV
  document.title = resumeData["shortName"] + " - Creative CV";
  $("#profile-title").html(resumeData["name"]);
  $("#job-title").html(resumeData["jobTitle"]);

  //about section
  $("#about-first-parag").html("Hello! I am " + resumeData["shortName"] + ". " + resumeData["jobTitle"]);
  $("#about-second-parag").html(resumeData["description"]);
  $("#about-age").html(getAge());
  $("#about-email").html(resumeData["email"]);
  $("#about-baseTown").html(resumeData["baseTown"]);
  $("#about-languages").html(resumeData["languages"].map((lang) => lang["language"]).join(", "));
  
  //skills section
  skillsSummary = sortObjectByValueDesc(fetchSkillsSummary());
  $("#skills-container").html(generateSkillsContainer(skillsSummary, experienceMonths));

  //education section
  $("#education-container").html(generateEducationContainer());

  //experience section
  $("#experience-container").html(generateExperienceContainer());

  $("#footer-name").html(resumeData["shortName"]);
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
