/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "MichAel ZhAng",
  "role" : "Web Developer and IT Engineer",
  "biopic" : "images/fry.jpg",
  "contacts" : {
    "location" : "Ningbo China",
    "mobile" : "+86 18967880045",
    "email" : "geek.michael@live.com",
    "github" : "geekmichael"
  },
  "welcomeMessage": "Visionary IT professional",
  "skills" : ["Web development", "Windows/Linux server administration", "General IT support", "IT Project Management"]
};

var education = {
  "schools":[
    {
      "name": "Shaanxi Railway Institute",
      "location": "Weinan, Shaanxi, China",
      "degree": "Specialized high school",
      "majors": ["Railway Engineering"],
      "dates": "1997-2001",
      "url": "http://www.sxri.net"
    },
    {
      "name": "Xi'an Jiaotong University",
      "location": "Xi'an, Shaanxi, China",
      "degree": "BA",
      "majors": ["Computer Science"],
      "dates": "2006-2009",
      "url": "http://www.xjtu.edu.cn"
    },
    {
      "name": "Zhejiang University of Technology",
      "location": "Hangzhou, Zhejiang, China",
      "degree": "MA",
      "majors": ["Project Management"],
      "dates": "In progress",
      "url": "http://www.zjut.edu.cn"
    }
  ],
  "onlineCourses": [
    {
      "title": "Frontend Nanodegree",
      "school": "Udacity",
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
      "dates" : "2008.2 - 2013.10, 2014.4 - Present",
      "location" : "Ningbo, China",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "employer" : "The Sino-British College, USST",
      "title" : "IT Manager",
      "dates" : "2013.11 - 2014.2",
      "location" : "Ningbo, China",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "title" : "Network Engineer",
      "employer" : "China Railway Engineering Corporation",
      "dates" : "2001 - 2008.1",
      "location" : "Xi'an, China",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title" : "Absolute",
      "url" : "http://www.udacity.com",
      "dates" : "2015",
      "images": ['', ''],
      "description" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
      "title" : "Awesome Project",
      "url" : "http://www.udacity.com",
      "dates" : "2016",
      "images": [ ''],
      "description" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
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
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

    $(".work-entry:last").append(formattedEmployer);
    $(".work-entry:last").append(formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  })
};

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

  education.schools.forEach(function(school) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    formattedSchoolName = formattedSchoolName.replace("#", school.url);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
  });

  education.onlineCourses.forEach(function(onlineCourse) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
    formattedOnlineTitle = formattedOnlineTitle.replace("#", onlineCourse.url);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
    formattedOnlineURL = formattedOnlineURL.replace("#", onlineCourse.url)

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedDates, formattedOnlineURL);

  })
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
