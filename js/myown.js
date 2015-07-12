/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 var awesomeThoughts = "I am Nirmal and I'm awesome";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("awesome","fun");
 console.log(funThoughts);
 */

$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);

/*var skills = ["C","Java","Python","JS","Jquery","HTML5"];
$("#main").append(skills);*/

var bio = {
	name: "Nirmal Kumar",
	role: "Web Developer" , 
	contacts: {
	mobile:9487150569,
	email:nirmalkumarkgs@gmail.com,
	github: "nirmalks",
	twitter : "nirmalche",
	location: "Chennai"
	}
	welcomeMessage : "Welcome to my site",
	skills = ["C","Java","Python","JS","Jquery","HTML5"]
};

$("#main").append(bio.name);
$("#main").append(bio.skills[2]);

/*
var education = {};
education["name"] = "Sri Muthukumaran Institute of Technology";
education["year"] =  "2012 - 2016";
education["branch"] = "Computer Science and Engineering";
*/
$("#main").append(education.schools.name);