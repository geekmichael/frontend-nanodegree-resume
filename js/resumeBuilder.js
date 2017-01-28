/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "MichAel ZhAng",
  "role" : "Web Developer and IT Enineer",
  "biopic" : "images/fry.jpg",
  "contacts" : {
    "location" : "Ningbo China",
    "mobile" : "+86 18967880045",
    "email" : "geek.michael@live.com",
    "github" : "geekmichael"
  },
  "welcomeMessage": "A lengendary life!",
  "skills" : ["Web development", "Windows/Linux server administration", "General IT support", "IT Project Management"]
};

var education = {
  "schools":[
    {
      "name": "Xi'an Jiaotong University",
      "location": "Xi'an, Shaanxi, China",
      "degree": "BA",
      "majors": ["Computer Science"],
      "dates": "2010",
      "url": "http://www.xjtu.edu.cn"
    },
    {
      "name": "Zhejiang University of Technology",
      "location": "Hangzhou, Zhejiang, China",
      "degree": "MA",
      "majors": ["Project Management"],
      "dates": "2017",
      "url": "http://www.zjut.edu.cn"
    }
  ],
  "onlineCourses": [
    {
      "title": "Frontend Nanodegree",
      "school": "Udalocation",
      "dates": "2017",
      "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

var work = {
 "jobs": [
    {
      "employer" : "University of Nottingham Ningbo China",
      "title" : "IT Support Assistant, System Development Team Manager",
      "dates" : "2008.2 - 2013.11, 2014.4 - Present",
      "location" : "Ningbo, China",
      "description": "Three dates distinguished job performance contributed multifaceted responsibilities within management and senior technique role, tasked with providing critical direction and strategic leadership to support academic through Information Services. Managed projects and standing budgets, in addition evaluate project performance and recommends changes where performance is unsatisfactory. "
    },
    {
      "title" : "Network Engineer",
      "employer" : "China Railway Engineering Corporation",
      "dates" : "2001 - 2008.1",
      "location" : "Xi'an, China",
      "description": "Performed multiple job roles in General Manager Office, and was responsible for technical support to end users, development of website and business systems, as well as conducting the enterprise network at both headquarter and branch. "
    }
  ]
};

var projects = {
  "projects": [
    {
      "title" : "Absolute",
      "url" : "http://www.udacity.com",
      "dates" : 2006,
      "images": ['', ''],
      "description" : "Responsible for the development of company website by using PHP, HTML, CSS and MySQL, as well as the installation and configuration for web server"
    },
    {
      "title" : "Awesome Project",
      "url" : "http://www.udacity.com",
      "dates" : 2009,
      "images": [ ''],
      "description" : "Responsible for re-structuring the exisiting active directory for a better performance and management productivity"
    }
  ]
};


function inName(fullname){
  var nameArray = fullname.trim().split(" ");

  nameArray[0] = nameArray[0].toLowerCase();
  nameArray[1] = nameArray[1].toUpperCase();

  nameArray[0] = nameArray[0].slice(0,1).toUpperCase().concat(nameArray[0].slice(1));

  return nameArray[0].concat(' ', nameArray[1]);
  //var firstName = nameArray[0];
  //var firstLetter = firstName.slice(0,1);
  //firstLetter = firstLetter.toUpperCase();

  // var surname = nameArray.pop();
  // surname = surname.toUpperCase();
  //
  // var newFullname = firstLetter.concat(firstName.slice(1).toLowerCase(), " ", surname);
  //
  // return newFullname;
};

function placeholderImage(title, width, height, txtsize){

  var placeholderIMG = 'https://placeholdit.imgix.net/~text?txtsize=';
  txtsize = typeof txtsize !== 'undefined' ? txtsize : 33;
  width = typeof width !== 'undefined' ? width : 350;
  height = typeof height !== 'undefined' ? height : 200;

  return placeholderIMG.concat(txtsize, '&txt=', title, '&w=', width, '&h=', height);
}

bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

  $("#header").prepend(formattedName, formattedRole);
  $("#header").append(formattedBiopic);

  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub);
  if (bio.welcomeMessage) {
    var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMSG);
  }

  if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for (var x in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[x]);
      $("#skills").append(formattedSkills);
    }
  }
}

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployer);
    $(".work-entry:last").append(formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLworkTitle.replace("%data%", project.title);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);

    project.images.forEach(function(image){
      image = image ? image : placeholderImage(project.title);
      var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedProjectImage);
      console.log(image);
    });
  })
};

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

    $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
