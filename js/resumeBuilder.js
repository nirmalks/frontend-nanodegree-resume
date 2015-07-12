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

var education = {
	"schools": {
		"name": "NIOS",
		"class" : "Senior Secondary"
	},
	
	"college":{
		"name":"Sri Muthukumaran Institute of Technology",
		"year" : "2012 - 2016",
		"degree" :"B.E",
		"minor": "Computer Science"
	},
	
	"Online Courses":{
		"Course1": {
		"name":	"Think Create and Code",
		"university" :"university of Adelaide",
		"skill": "processingjs"
		}
	}
}

var projects = {
	"project1" :{
		"name" : "Sample project1",
		"title" : "Sample prpoject yet to be done"
	}
}

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

/*For displaying Internatized version of Names*/

/*Function to capitalize the first letter of the first name
function firstToUpperCase( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}*/

//Function to display the complete name

$("#main").append(internationalizeButton);

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