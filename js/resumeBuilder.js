var realName = "Nirmal Kumar";
function displayHeader()
{
	var formattedName = HTMLheaderName.replace("%data%",realName);
	$("#header").append(formattedName);
	
	var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
	$("#header").append(formattedRole);
}

displayHeader();

//Objects in JSON
var bio = {
	"name": "Nirmal Kumar",
	"role": "Web Developer" , 
	"contacts": {
	"mobile": "9487150569",
	"email": "nirmalkumarkgs@gmail.com",
	"github": "nirmalks",
	"twitter" : "nirmalche",
	"location": "Chennai"
	},
	"welcomeMessage ": "Welcome to my site",
	"skills" : ["C","Java","Python","JS","Jquery","HTML5"]
}

function displayContactInfo()
{
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#header").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#header").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#header").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#header").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#header").append(formattedLocation);
}
displayContactInfo();

//Adding the skills 
function displaySkills()
{
	if( bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);
		//Iterating through all the skills 	
		for( item in bio.skills)
		{
			var formattedSkills =  HTMLskills.replace("%data%",bio.skills[item]);
			$("#skills").append(formattedSkills);
		}
	}
}
displaySkills();

var education = {
	"schools": [
	{
		"name": "NIOS",
		"class" : "Senior Secondary",
		"passingyear" : "April 2012"
	}
	],
	
	"colleges":[
	{
		"name":"Sri Muthukumaran Institute of Technology",
		"year" : "2012 - 2016",
		"degree" :"B.E",
		"minor": "Computer Science",
		"location": "Mangadu"
	}
	],
	
	"Online Courses":[
	{
		"Course1": {
		"name":	"Think Create and Code",
		"university" :"university of Adelaide",
		"skill": "processingjs"
		}
	}
	],
	"display" : function(){
		for(college in education.colleges)
		{
			$("#education").append(HTMLschoolStart);
			var collegeName  = HTMLschoolName.replace("%data%",education.colleges[college].name);
			$(".education-entry:last").append(collegeName);

			var collegeDegree  = HTMLschoolDegree.replace("%data%",education.colleges[college].degree);
			$(".education-entry:last").append(collegeDegree);

			var collegeYear  = HTMLschoolDates.replace("%data%",education.colleges[college].year);
			$(".education-entry:last").append(collegeYear);
		}
	}
}
education.display();
//Project object
var projects = {
	"project1" :[
	{
		"title" : "Sample project yet to be done",
		"dates": "2015 July",
		"description": "Work is yet to be done"
	}
	],
	"display" :  function(){
	for(project in projects.project1){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project1[project].title);
		$(".project-entry:last").append(formattedTitle);
	
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project1[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project1[project].description);
		$(".project-entry:last").append(formattedDescription);
		}
	}
}
projects.display();

/*For displaying Internatized version of Names*/
//Function to display the complete name
//$("#main").append(internationalizeButton);

/*
**Still havent added info abt work
 object
function locationizer(work_obj){
	var locationArray = [];
	for(job in work_obj.jobs)
	{
		var newLocation  = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
*/

$("#mapDiv").prepend(googleMap);