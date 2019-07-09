/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'HDS TEAM Management By Naveen';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Naveen",
		last_name : "Selvaraj",
		email : "naveen.s@innovasolutions.com",
		phone : "ISXXXX",
		department : "Science"
	},
	{
		id : 2,
		first_name : "Sakthivel",
		last_name : "Subbaiyan",
		email : "oman@yopmail.com",
		phone : "ISXXXX",
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Logesh",
		last_name : "Kandasamy",
		email : "tina@yopmail.com",
		phone : "ISXXXX",
		department : "Science"
	},
	{
		id : 4,
		first_name : "Kamal",
		last_name : "K",
		email : "john@yopmail.com",
		phone : "ISXXXX",
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Suganya",
		last_name : "M",
		email : "peter@yopmail.com",
		phone : "ISXXXX",
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

