var bio = {
    "name": "Rosenny Griffin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "303-961-2258",
        "email": "rosenny08@gmail.com",
        "github": "rosenny08",
        "instagram": "rrmg08",
        "location": "Colorado"
    },
    "welcomeMessage": "Responsible for the look of a site and for the site’s technical aspects, such as its performance and capacity.",
    "skills": [
        "Responsible", "Ability to work under pressure", "Adaptability",
        "Motivating others", "Patience"
    ],
    "biopic": "images/rose1.jpg"

};


var education = {
    "schools": [{
        "name": "Universidad Tecnologica de Santiago",
        "location": "Mao, Valverde. Dominican Republic",
        "degree": "System Engineer",
        "majors": ["Programing"],
        "dates": "2010-2015",
        "url": "http://www.utesa.edu/webutesa/home.htm",
    }, {
        "name": "Universidad Autonoma de Santo Domingo",
        "location": "Mao, Valverde. Dominican Republic",
        "degree": "Associate's Degree in Civil Engineering",
        "majors": ["Construction"],
        "dates": "2008-2011",
        "url": "http://www.uasd.edu.do/index.php",
    }, {
        "name": "Politecnico del Noroeste (INPONOR)",
        "location": "Mao, Valverde. Dominican Republic",
        "degree": "Associate's Degree in Craft and Tailoring",
        "majors": ["Designer"],
        "dates": "2006-2008",
        "url": "http://www.1411.com.do/educacion/institutos-y-academias/instituto-politecnico-del-noroeste-inponor-91679.html",
    }],

    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016-2016",
        "url": "https://www.udacity.com/course/ud804"

    }, {
        "title": "HTML and Css",
        "school": "w3schools",
        "dates": "2016-2016",
        "url": "http://www.w3schools.com/html/default.asp"
    }, {
        "title": "Bootstrap",
        "school": "w3schools",
        "dates": "2016-2016",
        "url": "http://www.w3schools.com/bootstrap/default.asp"
    }]
};


var work = {
    "jobs": [{
        "employer": "Centro de Belleza Gertrudis",
        "title": "Hair Stylist",
        "location": "Mao, Dominican Republic",
        "dates": "2005-2016",
        "description": "Provided a range of haircare services as part of a routine session, including shampooing, cutting, coloring, styling, and blow-drying."
    }, {
        "employer": "Asian Cuisine Indian and Thai Restaurant",
        "title": "Waitress",
        "location": "Page Arizona USA",
        "dates": "Summer-Work 2014",
        "description": "Had a primary role in food services at the restaurant. Took orders from guests and delivered them the food. Also played behind-the-scenes role at the restaurant, refilling kitchen supplies, refilling toothpicks and mints at the register, and making fresh coffee are examples. Set our own tables for guests, including placing silverware and replacing table supplies such as ketchup, salt and pepper. Also picked up plates from tables, and cleaned windows, doors, and restrooms."
    }, {
        "employer": "Rodeway Inn",
        "title": "HouseKeeper",
        "location": "Page Arizona, USA",
        "dates": "Summer-Work 2014",
        "description": "Kept the venue clean and sanitary as part of customer service. Vacuumed rugs and furniture in hallways, rooms and public areas. Collecting trash and empty wastebaskets, changing the sheets and making the beds. The refill soap and toilet paper dispensers in public restrooms and puttting toiletries and supplies in guest rooms. Bringing requested items, such as infant cribs or irons, to guest rooms."
    }, ]

};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "A Portfolio Site",
        "images": ["images/portfolio.jpg"]
    }, {
        "title": "Project of a Card",
        "dates": "2016",
        "description": "A Card of a Pet",
        "images": ["images/card.jpg"]
    }, {
        "title": "Dashboard",
        "dates": "2016",
        "description": "Some Charts",
        "images": ["images/dashboard.jpg"]
    }]
};



// Function to display the bio section
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);

    // contacts section

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedInstagram = HTMLtinstagram.replace("%data%", bio.contacts.instagram);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var contactArray = [];
    contactArray.push(formattedMobile, formattedEmail, formattedInstagram, formattedGithub, formattedLocation);

    contactLength = contactArray.length;
    for (var i = 0; i < contactLength; i++) {
        $("#topContacts").append(contactArray[i]);
        $("#footerContacts").append(contactArray[i]);
    }



    // Welcome Message section under contacts
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    $("#header").append(HTMLskillsStart);

    // loop thru Skills under Contacts section
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkills);
    });
};

// function to display work section
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

        var formattedWorkTitleFinal = formattedEmployer + formattedWorkTitle;

        var workArray = [];
        workArray.push(formattedWorkDescription, formattedWorkDates, formattedWorkLocation, formattedWorkTitleFinal);
        var workLength = workArray.length;

        // loop over work array

        for (var i = 0; i < workLength; i++) {
            $(".work-entry:last").prepend(workArray[i]);
        }
    });
};

// Function to display projects section
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
        var projectsURL = project.url;

        // Make Project Title a clickable link
        formattedProjectTitle = formattedProjectTitle.replace("#", projectsURL);

        // create projects array to loop over
        var projectsArray = [];
        projectsArray.push(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
        var projectsLength = projectsArray.length;

        // loop over projects array
        for (var i = 0; i < projectsLength; i++) {
            $(".project-entry:last").append(projectsArray[i]);
        }
    });
};

// Function to display education section
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);


        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var educationURL = school.url;

        var formattedSchoolNameFinal = formattedSchoolName + formattedSchoolDegree;

        formattedSchoolNameFinal = formattedSchoolNameFinal.replace("#", educationURL);

        var educationArray = [];
        educationArray.push(formattedSchoolMajor, formattedSchoolLocation, formattedSchoolDates, formattedSchoolNameFinal);
        var educationLength = educationArray.length;

        // loop over education array
        for (var i = 0; i < educationLength; i++) {
            $(".education-entry:last").prepend(educationArray[i]);
        }
    });

    // Online courses section
    education.onlineCourses.forEach(function(rose) {
        $("#education").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", rose.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", rose.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", rose.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", rose.url);

        var formattedOnlineSite = formattedOnlineTitle + formattedOnlineSchool;

        formattedOnlineSite = formattedOnlineSite.replace("#", rose.url);

        var roseArray = [];
        roseArray.push(formattedOnlineSite, formattedOnlineDates);
        roseLength = roseArray.length;

        // loop over rose array
        for (var i = 0; i < roseLength; i++) {
            $(".onlineStarter:last").append(roseArray[i]);
        }
    });
};

bio.display();
work.display();
projects.display();
education.display();

// Setting map
$("#mapDiv").append(googleMap);