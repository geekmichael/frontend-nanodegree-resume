/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "MichAel ZhAng",
  "role" : "Web Developer and IT Enineer",
  "image" : "images/fry.jpg",
  "contacts" : {
    "location" : "Ningbo China",
    "mobile" : "+86 18967880045",
    "email" : "geek.michael@live.com",
    "github" : "geekmichael"
  },
  "welcomeMessage": "A lengendary life!",
  "skills" : ["Web development", "Linux server administration", "General IT support", "Project Management"]
};

var work = {
 "jobs": [
    {
      "position" : "System Development Team Manager",
      "employer" : "University of Nottingham Ningbo China",
      "years" : "2008.2 - present",
      "location" : "Ningbo, China",
      "description": "Three years distinguished job performance contributed multifaceted responsibilities within management and senior technique role, tasked with providing critical direction and strategic leadership to support academic through Information Services. Managed projects and standing budgets, in addition evaluate project performance and recommends changes where performance is unsatisfactory. "
    },
    {
      "position" : "Network Engineer",
      "employer" : "China Railway Engineering Corporation",
      "years" : "2001 - 2008.1",
      "location" : "Xi'an, China",
      "description": "Performed multiple job roles in General Manager Office, and was being responsible for evaluation, designation, implementation and support on end user computers, websites, business management systems, enterprise network at both headquarter and branch. "
    }
  ]
};

var projects = {
  "projects": [
    {
      "name" : "CRFEB4 website",
      "url" : "http://www.crfeb4.com",
      "date" : 2006,
      "image": "",
      "description" : "Responsible for the development of company website by using PHP, HTML, CSS and MySQL, as well as the installation and configuration for web server"
    },
    {
      "name" : "Re-structuring Active Directory",
      "url" : "http://www.nottingham.edu.cn",
      "date" : 2009,
      "image": "",
      "description" : "Responsible for re-structuring the exisiting active directory for a better performance and management productivity"
    }
  ]
};

var education = {
  "schools":[
    {
      "name": "Xi'an Jiaotong University",
      "location": "Xi'an, Shaanxi, China",
      "degree": "BA",
      "major": ["Computer Science"],
      "dates": "2010",
      "url": "http://www.xjtu.edu.cn"
    },
    {
      "name": "Zhejiang University of Technology",
      "location": "Hangzhou, Zhejiang, China",
      "degree": "MA",
      "major": ["Project Management"],
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

function inName(fullname){
  var nameArray = fullname.trim().split(" ");

  nameArray[1] = nameArray[1].toUpperCase();
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();

  return nameArray[0]+" "+nameArray[1];
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

bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedImage = HTMLbioPic.replace("%data%", bio.image);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

  $("#header").prepend(formattedName, formattedRole);
  $("#header").append(formattedImage);

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

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployer);
    $(".work-entry:last").append(formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

    $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLworkTitle.replace("%data%", projects.projects[project].name);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    var imageURL = projects.projects[project].image;
    if (imageURL) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", imageURL);
      $(".project-entry:last").append(formattedProjectImage);
    }

    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
