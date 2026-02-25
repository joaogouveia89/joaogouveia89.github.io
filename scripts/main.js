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
  stackToDisplay: ['android', 'scrum', 'git', 'mvvm', 'jetpack-compose', 'kotlin', 'java', 'ruby-on-rails'],
  description: 'Software engineer with experience in native Android development using Kotlin and Java, along with a strong background in libraries and frameworks for the platform. Recently, I have been expanding my skill set into data science, data analysis, and machine learning, exploring new ways to solve problems with data-driven approaches. I rely on a self-task list and a professional journal to track my activities, progress, and upcoming tasks. Jiu-jitsu is my favorite hobby, and I practice it three times a week, which has greatly contributed to my personal and professional growth.',
  experiences: [
    {
      jobTitle: 'Senior Android Engineer',
      company: 'Aubay',
      city: 'Lisboa',
      country: 'pt',
      startDate: new Date(2024, 10, 1), // Novembro 2024
      endDate: null,
      description: 'Leading Android development for MB Way, Portugal\'s largest instant payments platform (3M+ users). Modernizing codebase with Jetpack Compose and Coroutines.',
      skillsUsed: ['android', 'git', 'kotlin', 'jetpack-compose', 'flow', 'coroutines', 'mvvm'],
    },
    {
      jobTitle: 'Mid/Senior Android Engineer',
      company: 'Boost IT',
      city: 'Lisboa',
      country: 'pt',
      startDate: new Date(2024, 3, 1), // Abril 2024
      endDate: new Date(2024, 9, 31), // Outubro 2024
      description: 'Contributed to an Android solution for supermarket shelf management. Refactored core components for image data and migrated legacy UI to Jetpack Compose.',
      skillsUsed: ['android', 'git', 'mvi', 'clean-arch', 'jetpack-compose', 'kotlin'],
    },
    {
      jobTitle: 'Mobile Engineer',
      company: 'Bosch PT',
      city: 'Aveiro',
      country: 'pt',
      startDate: new Date(2022, 5, 1), // Junho 2022
      endDate: new Date(2024, 0, 31), // Janeiro 2024
      description: 'Global team building RefineMySite. Developed offline mode, push notifications, and image synchronization for construction-site management.',
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'clean-arch', 'flow', 'kmm', 'kotlin'],
    },
    {
      jobTitle: 'Android Engineer',
      company: 'Critical Techworks',
      city: 'Lisboa',
      country: 'pt',
      startDate: new Date(2019, 4, 1), // Maio 2019
      endDate: new Date(2022, 5, 30), // Junho 2022
      description: 'Development of BMW\'s in-car media player. Integrated multiple audio sources (Spotify, CarPlay, USB) and ensured UI consistency for Android Auto.',
      skillsUsed: ['android', 'scrum', 'git', 'mvvm', 'android-auto', 'livedata', 'kotlin'],
    },
    {
      jobTitle: 'Android Developer',
      company: 'Ioasys',
      city: 'Belo Horizonte',
      country: 'br',
      startDate: new Date(2018, 3, 1), // Abril 2018
      endDate: new Date(2019, 0, 31), // Janeiro 2019
      description: 'Java-based app connecting teachers and bookstores. First experience with MVVM, Room database, and Retrofit.',
      skillsUsed: ['android', 'java', 'mvvm', 'room', 'retrofit', 'rxjava', 'git'],
    },
    {
      jobTitle: 'Android Developer',
      company: 'Life Link',
      city: 'Belo Horizonte',
      country: 'br',
      startDate: new Date(2017, 4, 1), // Maio 2017
      endDate: new Date(2017, 11, 31), // Dezembro 2017
      description: 'Sole developer for a hardware startup. Built an app from scratch to communicate with proprietary Bluetooth 4.0 devices.',
      skillsUsed: ['android', 'java', 'bluetooth api', 'git'],
    },
    {
      jobTitle: 'Internship',
      company: 'Avenue Code',
      city: 'Belo Horizonte',
      country: 'br',
      startDate: new Date(2015, 0, 1), // Janeiro 2015
      endDate: new Date(2016, 9, 31), // Outubro 2016
      description: 'Contributed to ACDC, an internal HR platform for time tracking. Worked with Ruby on Rails and Angular in a global team environment.',
      skillsUsed: ['ruby-on-rails', 'angular', 'postgresql', 'git', 'scrum'],
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

function diffInMonths(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Diferença bruta de meses baseada apenas em ano e mês
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months += end.getMonth() - start.getMonth();

  // AJUSTE CRUCIAL: Se o dia atual for menor que o dia de início, 
  // o último mês ainda não completou um ciclo de 30 dias.
  if (end.getDate() < start.getDate()) {
    months--;
  }

  return months <= 0 ? 0 : months;
}

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

  gtag('event', 'contact_intent', {
    'event_category': 'Contact',
    'event_label': 'Email Copy'
  });
}

function fetchSkillsSummary() {
  const skillExperienceMap = {};

  resumeData.experiences.forEach((experience) => {
    const { skillsUsed, startDate, endDate } = experience;

    // Usando a função precisa de meses
    const totalMonths = diffInMonths(startDate, endDate);

    skillsUsed.forEach((skill) => {
      if (resumeData.stackToDisplay.includes(skill)) {
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
  // Pega a penúltima experiência como você definiu originalmente
  const date = resumeData.experiences[resumeData.experiences.length - 2].startDate;

  return diffInMonths(date, currentDate);
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

  experienceMonths = experienceTimeInMonths();

  //Fill CV
  document.title = resumeData["shortName"] + " - Creative CV";
  $("#profile-title").html(resumeData["name"]);

  //about section
  $("#about-age").html(getAge());

  //skills section
  skillsSummary = sortObjectByValueDesc(fetchSkillsSummary());
  $("#skills-container").html(generateSkillsContainer(skillsSummary, experienceMonths));

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
