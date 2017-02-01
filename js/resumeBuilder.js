/*global
$, googleMap, HTMLbioPic, HTMLblog, HTMLemail, HTMLfacebook, HTMLfooterEmail, HTMLfooterLocation, HTMLfooterMobile, HTMLgithub, HTMLheaderName, HTMLheaderRole, HTMLmobile, HTMLprojectImage, HTMLprojectImageContainer, HTMLprojectInfo, HTMLprojectStart, HTMLschoolInfo, HTMLschoolStart, HTMLskills, HTMLskillsStart, HTMLtrainingHeader, HTMLtrainingInfo, HTMLtrainingStart, HTMLtwitter, HTMLwelcomeMsg, HTMLworkDatesLocation, HTMLworkPosition, HTMLworkStart
*/
var bio = {
    "name": "MichAel ZhAng",
    "role": "Web Developer and IT Engineer",
    "biopic": "images/fry.jpg",
    "contacts": {
        "location": "Ningbo, China",
        "address": "City of Ningbo 315100,<br>Zhejiang Provience (China)",
        "mobile": "+86 18967880045",
        "email": "geek.michael@live.com",
        "github": "geekmichael",
        "facebook": "geekmichael",
        "twitter": "hualng",
        "blog": "http://www.fastcallit.com"
    },
    "welcomeMessage": "<p class=\"lead\">Welcome! I am a visionary IT professional and this is my resume, feel free to look around.</p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "skills": ["General IT Support", "Web Development (H5/CSS3/JS)", "Windows/Linux Server Administration (MCSE/RHCE)", "Network Administration (CCNA)", "Programming (PHP/Python)", "IT Project Management (PMP/PRINCE2)", "IT Service Management (ITIL)"]
};
var education = {
    "schools": [{
        "name": "Xi'an Jiaotong University",
        "location": "Xi'an, China",
        "degree": "BA",
        "majors": ["Computer Science"],
        "dates": "2006-2009",
        "url": "http://www.xjtu.edu.cn"
    }, {
        "name": "Zhejiang University of Technology",
        "location": "Hangzhou, China",
        "degree": "MA",
        "majors": ["Project Management"],
        "dates": "In progress",
        "url": "http://www.zjut.edu.cn"
    }],
    "onlineCourses": [{
        "title": "Frontend Development",
        "certificate": "Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Project Management (PMBOK)",
        "certificate": "PMP",
        "school": "PMI",
        "dates": "2013",
        "url": "http://www.pmi.org"
    }, {
        "title": "IT Service Management",
        "certificate": "ITIL v3 Foundation",
        "school": "AVTECH",
        "dates": "2013",
        "url": "https://www.axelos.com/best-practice-solutions/itil"
    }]
};
var work = {
    "jobs": [{
        "employer": "University of Nottingham Ningbo China",
        "title": "IT Support Assistant, System Development Team Manager",
        "dates": "2008.2 - 2013.10, 2014.4 - Present",
        "location": "Ningbo, China",
        "url": "http://www.nottingham.edu.cn",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "employer": "The Sino-British College, USST",
        "title": "IT Manager",
        "dates": "2013.11 - 2014.2",
        "location": "Shanghai, China",
        "url": "http://www.sbc-usst.edu.cn",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Network Engineer",
        "employer": "China Railway First Group Co., Ltd.",
        "dates": "2001 - 2008.1",
        "location": "Xi'an, China",
        "url": "http://en.crfeb.com.cn/",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
};
var projects = {
    "projects": [{
        "title": "Web Project",
        "url": "http://www.udacity.com",
        "dates": "2015",
        "images": ["", ""],
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }, {
        "title": "IT Project",
        "url": "http://www.udacity.com",
        "dates": "2016",
        "images": ["", ""],
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }]
};
function inName(fullname) {
    "use strict";
    var nameArray = fullname.trim().split(" ");
    nameArray[0] = nameArray[0].toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase().concat(nameArray[0].slice(1));
    return nameArray[0].concat(" ", nameArray[1]);
}
function placeholderImage(title, width, height, txtsize) {
    "use strict";
    var placeholderIMG = "https://placeholdit.imgix.net/~text?txtsize=";
    width = width || 120;
    height = height || 120;
    txtsize = txtsize || 12;
    return placeholderIMG.concat(txtsize, "&txt=", title, "&w=", width, "&h=", height);
}
bio.display = function () {
    "use strict";
    var inFullname = inName(bio.name);
    var formattedName = HTMLheaderName.replace("%data%", inFullname);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(/%data%/g, bio.contacts.blog);
    var formattedFooterLocation = HTMLfooterLocation.replace("%data%", bio.contacts.address);
    var formattedFooterMobile = HTMLfooterMobile.replace("%data%", bio.contacts.mobile);
    var formattedFooterEmail = HTMLfooterEmail.replace(/%data%/g, bio.contacts.email);
    $("#bioTitle").prepend(formattedName, formattedRole);
    $("#bioPicContainer").append(formattedBiopic);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedFacebook, formattedBlog);
    $("#footerContacts").append(formattedGithub, formattedTwitter, formattedFacebook, formattedBlog);
    $(".primary-contacts").append(formattedFooterLocation, formattedFooterMobile, formattedFooterEmail);
    if (bio.welcomeMessage) {
        var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $(".welcome-container").append(formattedWelcomeMSG);
    }
    if (bio.skills.length > 0) {
        $("#skills").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skill-list").append(formattedSkills);
        });
    }
};
work.display = function () {
    "use strict";
    work.jobs.forEach(function (job) {
        $(".work-container").append(HTMLworkStart);
        var formattedDatesLocation = HTMLworkDatesLocation.replace("%dates%", job.dates);
        formattedDatesLocation = formattedDatesLocation.replace("%location%", job.location);
        var formattedPosition = HTMLworkPosition.replace("%description%", job.description);
        formattedPosition = formattedPosition.replace("%title%", job.title);
        formattedPosition = formattedPosition.replace("%employer%", job.employer);
        formattedPosition = formattedPosition.replace("#", job.url);
        $(".work-entry:last").append(formattedDatesLocation);
        $(".work-entry:last").append(formattedPosition);
    });
    $(".work-entry:last").addClass("reset-border");
};
projects.display = function () {
    "use strict";
    projects.projects.forEach(function (project) {
        $(".projects-container").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectImageContainer);
        var formattedProjectInfo = HTMLprojectInfo.replace("%title%", project.title);
        formattedProjectInfo = formattedProjectInfo.replace("%dates%", project.dates);
        formattedProjectInfo = formattedProjectInfo.replace("%description%", project.description);
        project.images.forEach(function (image) {
            image = image || placeholderImage(project.title);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").children(".project-image-container").append(formattedProjectImage);
        });
        $(".project-entry:last").append(formattedProjectInfo);
    });
    $(".project-entry:last").addClass("reset-border");
};
education.display = function () {
    "use strict";
    education.schools.forEach(function (school) {
        var formattedSchoolInfo = HTMLschoolInfo.replace("%dates%", school.dates);
        formattedSchoolInfo = formattedSchoolInfo.replace("%degree%", school.degree);
        formattedSchoolInfo = formattedSchoolInfo.replace("%majors%", school.majors);
        formattedSchoolInfo = formattedSchoolInfo.replace("%url%", school.url);
        formattedSchoolInfo = formattedSchoolInfo.replace("%name%", school.name);
        formattedSchoolInfo = formattedSchoolInfo.replace("%location%", school.location);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolInfo);
    });
    $("#education").append(HTMLtrainingHeader);
    education.onlineCourses.forEach(function (onlineCourse) {
        var formattedTrainingInfo = HTMLtrainingInfo.replace("%dates%", onlineCourse.dates);
        formattedTrainingInfo = formattedTrainingInfo.replace("%cert%", onlineCourse.certificate);
        formattedTrainingInfo = formattedTrainingInfo.replace("%title%", onlineCourse.title);
        formattedTrainingInfo = formattedTrainingInfo.replace("%url%", onlineCourse.url);
        formattedTrainingInfo = formattedTrainingInfo.replace("%institute%", onlineCourse.school);
        $("#education").append(HTMLtrainingStart);
        $(".training-entry:last").append(formattedTrainingInfo);
    });
    $(".training-entry:last").addClass("reset-border");
};
$("title").html(inName(bio.name).concat(" - ", bio.role));
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
