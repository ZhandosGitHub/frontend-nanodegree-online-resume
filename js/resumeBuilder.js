/*!
 * Author: Zhandos Ashirbayev
 * Course: Udacity Front End Developer Nanodegree Program
 */
/*
 bio Object contain Personal Informaiton like name, role, contacts, etc.
 Also, has display function that appends HTML code into Resume
 */

var data = "%data%";

var bio = {
    "name": "Zhandos Ashirbayev",
    "role": "IM Coordinator",
    "contacts": {
        "mobile": "+7-701-740-7288",
        "email": "zhandos.ashirbayev@gmail.com",
        "github": "ZhandosGitHub",
        "twitter": "@ZhandosA",
        "location": "Kazakhstan"
    },
    "welcomeMessage": "Welcome to My Resume Page. Thank you for the visit!",
    "skills": [
        "MindManager, OneNote, Microsoft Visio and Project", "Java, C#, Python, C++, C, SQL, XML , HTML, CSS", "SharePoint, SharePoint Designer, InfoPath, Visual Studio, Eclipse, Kalido Information Engine"
    ],
    "biopic": "images/profile.jpg",
    display: function() {
        $("#header").prepend(HTMLheaderRole.replace(data, "IM Coordinator"));
        $("#header").prepend(HTMLheaderName.replace(data, "Zhandos Ashirbayev"));

        $("#topContacts, #footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace(data, bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace(data, bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace(data, bio.contacts.twitter));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));

        $("#header").append(HTMLbioPic.replace(data, bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));

        $("#header").append(HTMLskillsStart);
        for (var counter = 0; counter < bio.skills.length; counter++) {
            $("#header").append(HTMLskills.replace(data, bio.skills[counter]));
        }

    } // end of display function
}; // end of bio Object
bio.display(); // Calling bio.display function

/*
work Object contain work experience Informaiton like employee name, title, dates, etc.
Also, has display function that appends HTML code into Resume
*/
var work = {
    "jobs": [{
            "employer": "Tengizchevroil LLP",
            "title": "Information Management Coordinator",
            "location": "Tengiz, Kazakhstan",
            "dates": "Jan 2016 - Present",
            "description": "Managing process improvement initiatives and coordinating several projects within the Facilities Engineering domain that will transform work from a Document to Data Centric environment."
        },
        {
            "employer": "Tengizchevroil LLP",
            "title": "Business Intelligence Group Supervisor",
            "location": "Atyrau, Kazakhstan",
            "dates": "Apr 2014 - Jan 2016",
            "description": "Led a Business Intelligence/Data Integration group of 8 people that designed, developed and later operated, as part of multimillion (~$4M) projects, TCO wide Data Warehouse, BI portals and Data Integration solutions."
        },
        {
            "employer": "Tengizchevroil LLP",
            "title": "Business Analyst",
            "location": "Atyrau, Kazakhstan",
            "dates": "Aug 2010 - Apr 2014",
            "description": "Engaged TCO business departments, conducted assessment of their core processes (plus/deltas) with focus on identifying and executing improvement opportunities in Information Management space"
        },
        {
            "employer": "Iowa State University",
            "title": "Undergraduate Research Assistant",
            "location": "Ames, Iowa, USA",
            "dates": "Aug 2009 - May 2010",
            "description": "Researched and developed applications on TinyOS, an open-source system designed for wireless embedded sensor networks."
        }
    ],
    display: function() {
        for (var counter = 0; counter < work.jobs.length; counter++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace(data, work.jobs[counter].employer) + HTMLworkTitle.replace(data, work.jobs[counter].title));
            $(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[counter].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[counter].location));
            $(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[counter].description));
        }
    } // End of display function
}; // End of work Object
work.display(); //Calling display function

/*
projects Object contains informatin on worked Projects, like title, dates, etc.
Also, has display function that appends HTML code into Resume
*/
var projects = {
    "projects": [{
            "title": "SharePoint 2010 Adoption",
            "dates": "2012-2013",
            "description": "Gathered business requirements, designed, deployed and supported Content Management (CM) Solutions: deployed modules for 6 departments, mentored ~10 administrators from business. ~500 users are using these modules for internal collaboration",
            "images": ["images/application.jpg"]
        },
        {
            "title": "IT Management of Change (MOC) Process Improvement",
            "dates": "2010-2011",
            "description": "Analyzed and created AS-IS and TO-BE states, adopted partners’ best practices, deployed new process and organized training for IT users (+200 users). Developed 2 alternatives for a new MOC tool, one of which was later implemented and used.",
            "images": ["images/process.jpg", "images/change.jpg"]
        },
    ],
    display: function() {
        for (var counter = 0; counter < projects.projects.length; counter++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace(data, projects.projects[counter].title));
            $(".project-entry:last").append(HTMLprojectDates.replace(data, projects.projects[counter].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace(data, projects.projects[counter].description));
            for (var ind = 0; ind < projects.projects[counter].images.length; ind++) {
                $(".project-entry:last").append(HTMLprojectImage.replace(data, projects.projects[counter].images[ind]));
            }
        } // End of outer foor loop
    } // End of display function
}; // End of projects Object
projects.display(); //Calling display function

/*
education Object contains informatin on completed education: school name, major, dates, etc.
Also, has display function that appends HTML code into Resume
*/
var education = {
    "schools": [{
            "name": "Iowa State University",
            "location": "Ames, Iowa, USA",
            "degree": "Bachelors",
            "majors": ["Computer Science", "Mobile Development"],
            "dates": "2006 - 2010",
            "url": "http://www.iastate.edu/"
        },
        {
            "name": "KazNTU",
            "location": "Almaty, Kazakhstan",
            "degree": "Bachelors",
            "majors": ["Computer Science"],
            "dates": "2004 - 2006",
            "url": "http://www.kazntu.kz/"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree Program",
            "school": "Udacity",
            "dates": "2016 - 2017",
            "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
        },
        {
            "title": "Data Analyst Nanodegree Program",
            "school": "Udacity",
            "dates": "2016 - 2017",
            "url": "https://classroom.udacity.com/nanodegrees/nd002/syllabus"
        }
    ],
    display: function() {
        for (var counter = 0; counter < education.schools.length; counter++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace(data, education.schools[counter].name) + HTMLschoolDegree.replace(data, education.schools[counter].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace(data, education.schools[counter].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace(data, education.schools[counter].location));
            for (var ind = 0; ind < education.schools[counter].majors.length; ind++) {
                $(".education-entry:last").append(HTMLschoolMajor.replace(data, education.schools[counter].majors[ind]));
            }
        } // end of display function

        $("#education").append(HTMLonlineClasses);
        for (var count = 0; count < education.onlineCourses.length; count++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace(data, education.onlineCourses[count].title) + HTMLonlineSchool.replace(data, education.onlineCourses[count].school));
            $(".education-entry:last").append(HTMLonlineDates.replace(data, education.onlineCourses[count].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace(data, education.onlineCourses[count].url));
        } // End of for loop
    } // End of display function
}; // End of education Object
education.display(); //Calling display function

/*
appendMap function that appends Map to Resume
*/
function appendMap() {
    $("#mapDiv").append(googleMap);
}
appendMap(); // Calling appendMap() function

/*
addButton function that appends internationalizeButton
*/
function addButton() {
    $("#main").append(internationalizeButton);
}
addButton(); // Calling appendMap() function

/*
inName function that performs internationalization on Name as per course videos requirements
*/
function inName(name) {
    name = name.split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    var internationalizedName = (name[0] + " " + name[1]);
    return internationalizedName;
}
