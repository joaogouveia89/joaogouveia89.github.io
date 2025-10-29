// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

const resumeData = {
  name: 'João Lucas Veloso Gouveia',
  shortName: "João Gouveia",
  birthDate: new Date(1989, 1, 10), // Note: In JavaScript, months are 0-indexed
  baseTown: 'Lisboa - Portugal',
  email: 'j.lucas.gouveia@gmail.com',
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-lucas-veloso-gouveia-1319a38a/",
  github: 'joaogouveia89',
  jobTitle: 'Software Engineer',
  stackToDisplay: ['android', 'scrum', 'git', 'mvvm', 'jetpack-compose', 'kotlin', 'java', 'ruby-on-rails'],
  description: 'Software engineer with experience in native Android development using Kotlin and Java, along with a strong background in libraries and frameworks for the platform. Recently, I have been expanding my skill set into data science, data analysis, and machine learning, exploring new ways to solve problems with data-driven approaches. I rely on a self-task list and a professional journal to track my activities, progress, and upcoming tasks. Jiu-jitsu is my favorite hobby, and I practice it three times a week, which has greatly contributed to my personal and professional growth.',
  experiences: [
    {
      jobTitle: 'Android engineer',
      company: 'Aubay',
      startDate: new Date(2024, 10, 25), // Note: In JavaScript, months are 0-indexkmmed
      endDate: null,
      skillsUsed: ['android', 'git', 'mvi', 'jetpack-compose', 'clean-arch', 'kotlin'],
    },
    {
      jobTitle: 'Android engineer',
      company: 'Boost IT',
      startDate: new Date(2024, 3, 5), // Note: In JavaScript, months are 0-indexkmmed
      endDate: new Date(2024, 9, 15),
      skillsUsed: ['android', 'git', 'mvi', 'jetpack-compose', 'clean-arch', 'kotlin'],
    },
    {
      jobTitle: 'Mobile engineer',
      company: 'Bosch PT',
      startDate: new Date(2022, 5, 27), // Note: In JavaScript, months are 0-indexkmmed
      endDate: new Date(2024, 1, 2),
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'jetpack-compose', 'kmm', 'flow', 'kotlin'],
    },
    {
      jobTitle: 'Mobile Engineer',
      company: 'Critical Techworks',
      startDate: new Date(2019, 4, 6), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2022, 5, 27), // Note: In JavaScript, months are 0-indexed
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'android-auto', 'room db', 'live-data', 'kotlin'],
    },
    {
      jobTitle: 'Android developer',
      company: 'Ioasys',
      startDate: new Date(2018, 3, 2), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2019, 0, 4), // Note: In JavaScript, months are 0-indexed
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'rxjava', 'java'],
    },
    {
      jobTitle: 'Android developer',
      company: 'Life Link',
      startDate: new Date(2017, 4, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2017, 11, 22), // Note: In JavaScript, months are 0-indexed
      skillsUsed: ['android', 'git', 'java', 'bluetooth 4.0'],
    },
    {
      jobTitle: 'Internship',
      company: 'Avenue Code',
      startDate: new Date(2015, 0, 12), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2016, 9, 7), // Note: In JavaScript, months are 0-indexed
      skillsUsed: ['ruby-on-rails', 'ruby', 'postgresql', 'git', 'scrum'],
    },
    {
      jobTitle: 'Internship',
      company: 'GDAX Contact Center',
      startDate: new Date(2014, 9, 6), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2015, 0, 9), // Note: In JavaScript, months are 0-indexed
      skillsUsed: ['php', 'mysql'],
    },
    {
      jobTitle: 'Vacation internship',
      company: 'TCA',
      startDate: new Date(2014, 5, 2), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2014, 6, 2), // Note: In JavaScript, months are 0-indexed
      skillsUsed: ['php', 'mysql'],
    },
    {
      jobTitle: 'Digital introduction instructor',
      company: 'Autonomous',
      startDate: new Date(2009, 6, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2017, 6, 31), // Note: In JavaScript, months are 0-indexed
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
      logo: "udacity.png"
    },
    {
      university: 'FUMEC',
      title: 'Bsc Computer Science',
      category: 'university',
      startDate: new Date(2014, 7, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2018, 11, 10), // Note: In JavaScript, months are 0-indexed
      logo: "fumec.png"
    },
    {
      university: 'PUCMINAS',
      title: 'Automation Engineering',
      category: 'university',
      startDate: new Date(2009, 7, 1), // Note: In JavaScript, months are 0-indexed
      endDate: new Date(2014, 6, 1), // Note: In JavaScript, months are 0-indexed
      logo: "pucmg.png"
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
    {
      language: 'Italian',
      proficiency: 'Basic',
    },
  ],
};

function openGithub() {
  gtag('event', 'recruiter_open_link', {
    event_category: 'Github',
    event_label: 'Profile',
  });
  window.open("https://github.com/" + resumeData["github"], '_blank');
}

function openLinkedin() {
  gtag('event', 'recruiter_open_link', {
    event_category: 'Linkedin'
  });
  window.open(resumeData["linkedin"], '_blank');
}

function openRandomUserRepo() {
  gtag('event', 'recruiter_open_link', {
    event_category: 'Github',
    event_label: 'Random User',
  });
  window.open("https://github.com/joaogouveia89/Random-User", '_blank');
}

function openTrafficSimulationRepo() {
  gtag('event', 'recruiter_open_link', {
    event_category: 'Github',
    event_label: 'Traffic Simulation',
  });
  window.open("https://github.com/joaogouveia89/traffic-simulation", '_blank');
}

function getAge() {
  const today = new Date();
  const birthDate = resumeData["birthDate"];

  var age = today.getFullYear() - birthDate.getFullYear();

  // Check if the birthday hasn't occurred yet this year
  if (today.getMonth() < birthDate.getMonth()) {
    age--;
  }

  return age;

}

function emailToClipboard() {
  navigator.clipboard.writeText(resumeData["email"]);
}

function fetchSkillsSummary() {
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
      if (resumeData.stackToDisplay.includes(skill)) { // Only include skills in stackToDisplay
        if (!skillExperienceMap[skill]) {
          skillExperienceMap[skill] = 0;
        }
        skillExperienceMap[skill] += totalMonths;
      }
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

function experiencePercentage(experience) {
  const fullExperience = experienceTimeInMonths();
  /*
  fullExperience ----- 100
  experience ----- x
  */
  return (experience * 100) / fullExperience;
}

function generateSkillsContainer(skillsSummary, experienceMonths) {
  newRow = true;
  finalHtml = '';
  for (const skill in skillsSummary) {
    if (skillsSummary.hasOwnProperty(skill)) {
      const experienceInMonths = skillsSummary[skill];
      if (newRow) {
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
      if (!newRow) {
        finalHtml += '</div>';
      }
      newRow = !newRow;
    }
  }
  return finalHtml;
}

function generateEducationContainer() {
  data = resumeData.education;
  finalHtml = '';
  for (let idx = 0; idx < data.length; idx++) {
    finalHtml += '<div class="card">';
    finalHtml += '<div class="row align-items-center">';
    finalHtml += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body cc-education-header text-center">';
    finalHtml += '<div><img src="./images/universities/' + data[idx].logo + '"</img></div>'
    finalHtml += '<p style="padding-top:24px; font-size:20px">' + data[idx].startDate.getFullYear() + ' - ' + data[idx].endDate.getFullYear() + '</p>';

    // closing card-body cc-education-header
    finalHtml += '</div>';
    //closing col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"
    finalHtml += '</div>';

    finalHtml += '<div class="col-md-9 d-flex flex-column justify-content-center align-items-center aos-init aos-animate" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body  text-center"  style="min-height:0px;">';
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

function generateExperienceContainer() {

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
  for (let idx = 0; idx < data.length; idx++) {
    let endDateYear = data[idx].endDate == null ? "CURRENT" : data[idx].endDate.getFullYear();
    finalHtml += '<div class="card">';
    finalHtml += '<div class="row">';
    finalHtml += '<div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body cc-education-header">';
    if (data[idx].logo === undefined) {
      finalHtml += '<div class="h5">' + data[idx].company + '</div>';
    } else {
      finalHtml += '<div><img width=200" src="./images/companies/' + data[idx].logo + '"</img></div>'
    }

    finalHtml += '<p style="padding-top:24px; font-size:20px">' + data[idx].startDate.getFullYear() + ' - ' + endDateYear + '</p>';


    // closing card-body cc-education-header
    finalHtml += '</div>';
    //closing col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"
    finalHtml += '</div>';

    finalHtml += '<div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">';
    finalHtml += '<div class="card-body">';
    finalHtml += '<div class="d-flex flex-row"><span class="h5">' + data[idx].jobTitle + ' - ' + data[idx].city + '</span>';
    finalHtml += '<img class="my-auto" style="padding-left:12px;" src="https://flagcdn.com/w40/' + data[idx].country + '.png" width="40" alt="' + data[idx].country + ' Flag" style="margin-top:10px;"></div>'
    finalHtml += '<p class="category">' + data[idx].skillsUsed.join(", ") + '</p>';
    finalHtml += '<p>' + data[idx].description + '</p>';
    if (data[idx].website !== undefined) {
      const websiteShort = new URL(data[idx].website).origin;
      finalHtml += '<p><strong>Website:</strong> <a href="' + data[idx].website + '" target="_blank">' + websiteShort + '</a></p>'
    }

    const references = data[idx].references
    if (references !== undefined) {
      references.forEach((element) => {
        finalHtml += '<div class="d-flex flex-row gap-3 mt-3">'
        finalHtml += '<img src="./images/companies/references/' + element + '" width="120" style="padding-right: 24px;">'
      })

      // closing d-flex flex-row gap-3 mt-3
      finalHtml += '</div>';
    }
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




$(document).ready(function () {


  AOS.init({
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

  let isShowModel = localStorage.getItem("hasAnswered");

  if (isShowModel != 'true') {
    $('#visitor-profile-modal').modal('toggle');
  }


  $("#dialog-send").click(function () {
    const stack = $("input[name='stack']:checked").val();

    if (stack != undefined) {
      gtag('event', 'recruiter_dialog_response', {
        event_category: 'Stack Info',
        event_label: `${stack}`,
      });
    }
    localStorage.setItem("hasAnswered", true);
    $('#visitor-profile-modal').modal('toggle');
  });

  $("#dialog-dwa").click(function () {
    gtag('event', 'recruiter_dialog_response', {
      event_category: 'Stack Info',
      event_label: `Dont want to answer`,
    });
    localStorage.setItem("hasAnswered", true);
    $('#visitor-profile-modal').modal('hide');
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

  $("#footer-name").html(resumeData["shortName"]);
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
  .click(function (event) {
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
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
