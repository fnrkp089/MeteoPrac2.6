import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../lib/collections';
import './publish.js'; // 발행은 서버에서 동작한다.
import '../lib/collections.js'
const fixtures = 
[
	{
		"name": "Cassandra Figueroa",
		"phone": "010-5379-7132",
		"email": "et.pede.nunc@hotmail.edu",
		"company": "Malesuada LLP",
		"birthday": "1999/10/05"
	},
	{
		"name": "Leroy Howe",
		"phone": "010-4434-1266",
		"email": "mauris.suspendisse@outlook.org",
		"company": "Egestas Aliquam Industries",
		"birthday": "1996/04/21"
	},
	{
		"name": "Mollie O'connor",
		"phone": "010-7773-2668",
		"email": "curabitur@hotmail.couk",
		"company": "Mi Lacinia Corp.",
		"birthday": "1997/07/19"
	},
	{
		"name": "Jermaine Bartlett",
		"phone": "010-8893-7158",
		"email": "consequat@aol.org",
		"company": "Semper Tellus Id Institute",
		"birthday": "1996/11/12"
	},
	{
		"name": "Palmer Holcomb",
		"phone": "010-3072-8128",
		"email": "tristique@outlook.edu",
		"company": "Dolor Tempus Corporation",
		"birthday": "1997/06/16"
	},
	{
		"name": "Nevada Christensen",
		"phone": "010-9425-1024",
		"email": "arcu.vivamus@google.net",
		"company": "Sodales Nisi Inc.",
		"birthday": "1995/09/01"
	},
	{
		"name": "Venus Bass",
		"phone": "010-5243-5745",
		"email": "lobortis.augue@hotmail.couk",
		"company": "Elit Curabitur Incorporated",
		"birthday": "1995/08/27"
	},
	{
		"name": "May Blevins",
		"phone": "010-4273-8302",
		"email": "mollis@protonmail.com",
		"company": "Proin Corp.",
		"birthday": "1999/03/18"
	},
	{
		"name": "Kaye Summers",
		"phone": "010-0128-5772",
		"email": "diam.lorem@hotmail.edu",
		"company": "Eu Dolor Egestas Corporation",
		"birthday": "1995/12/20"
	},
	{
		"name": "Stella Stout",
		"phone": "010-6850-2685",
		"email": "sem.elit@icloud.net",
		"company": "Amet Dapibus PC",
		"birthday": "1998/04/27"
	},
	{
		"name": "McKenzie Schmidt",
		"phone": "010-6323-2322",
		"email": "est.mollis.non@google.com",
		"company": "Cum Industries",
		"birthday": "1997/09/13"
	},
	{
		"name": "Thane Ball",
		"phone": "010-1951-7912",
		"email": "dignissim@outlook.edu",
		"company": "Phasellus Ornare Fusce Inc.",
		"birthday": "1995/06/17"
	},
	{
		"name": "Lucian Herman",
		"phone": "010-5233-7241",
		"email": "lobortis@icloud.org",
		"company": "Scelerisque Mollis Ltd",
		"birthday": "1995/04/28"
	},
	{
		"name": "Moses Ortega",
		"phone": "010-4967-5217",
		"email": "a.ultricies.adipiscing@aol.net",
		"company": "Nec Eleifend Company",
		"birthday": "1995/04/23"
	},
	{
		"name": "Glenna Lang",
		"phone": "010-2075-7841",
		"email": "sem@google.net",
		"company": "Dui Institute",
		"birthday": "1996/04/17"
	},
	{
		"name": "Chanda Wong",
		"phone": "010-6813-7101",
		"email": "at.risus.nunc@yahoo.couk",
		"company": "Eu Eros Limited",
		"birthday": "1995/03/29"
	},
	{
		"name": "Hiram Hart",
		"phone": "010-7859-5132",
		"email": "nulla.integer@protonmail.org",
		"company": "Ridiculus Associates",
		"birthday": "1998/10/30"
	},
	{
		"name": "Ryder Atkins",
		"phone": "010-2129-1528",
		"email": "consectetuer.ipsum@hotmail.ca",
		"company": "Curae Limited",
		"birthday": "1995/11/24"
	},
	{
		"name": "Steven Strickland",
		"phone": "010-0767-8077",
		"email": "magna.sed@protonmail.net",
		"company": "Sem Egestas Incorporated",
		"birthday": "1999/09/28"
	},
	{
		"name": "India Rojas",
		"phone": "010-6461-8536",
		"email": "pede.nunc@icloud.edu",
		"company": "Libero Est Corporation",
		"birthday": "2000/09/16"
	},
	{
		"name": "Ulla Pace",
		"phone": "010-3503-8362",
		"email": "ac@hotmail.com",
		"company": "Adipiscing Enim LLC",
		"birthday": "1995/03/18"
	},
	{
		"name": "Elliott White",
		"phone": "010-5976-6823",
		"email": "quisque.libero@protonmail.net",
		"company": "Neque Morbi PC",
		"birthday": "1999/12/02"
	},
	{
		"name": "Wynne Burke",
		"phone": "010-9576-1452",
		"email": "dui.suspendisse@protonmail.org",
		"company": "Consectetuer Euismod Associates",
		"birthday": "2000/02/18"
	},
	{
		"name": "Cecilia Carpenter",
		"phone": "010-3641-8213",
		"email": "semper.cursus@google.net",
		"company": "Non Foundation",
		"birthday": "1999/07/26"
	},
	{
		"name": "Akeem Schneider",
		"phone": "010-2555-5328",
		"email": "lacinia@icloud.com",
		"company": "Maecenas Iaculis Foundation",
		"birthday": "1999/11/17"
	},
	{
		"name": "Kevin Adkins",
		"phone": "010-8159-4365",
		"email": "vestibulum@google.couk",
		"company": "Quis Massa LLP",
		"birthday": "1995/12/31"
	},
	{
		"name": "Axel Logan",
		"phone": "010-1135-7615",
		"email": "sagittis.augue@yahoo.com",
		"company": "Egestas PC",
		"birthday": "2000/08/01"
	},
	{
		"name": "Samson English",
		"phone": "010-0776-2675",
		"email": "et@yahoo.com",
		"company": "Cursus Institute",
		"birthday": "2000/06/21"
	},
	{
		"name": "Felix Walton",
		"phone": "010-8851-5961",
		"email": "convallis.erat@icloud.edu",
		"company": "Ut Sem Nulla Foundation",
		"birthday": "2000/06/30"
	},
	{
		"name": "Rooney Wood",
		"phone": "010-2745-3852",
		"email": "mauris.sapien@aol.net",
		"company": "Lacus Consulting",
		"birthday": "2000/01/24"
	},
	{
		"name": "Hedy Ford",
		"phone": "010-5399-3662",
		"email": "lorem.ipsum@google.edu",
		"company": "Quis Accumsan LLP",
		"birthday": "1998/02/25"
	},
	{
		"name": "Jasper Salazar",
		"phone": "010-8053-8573",
		"email": "lorem.ipsum@hotmail.com",
		"company": "Donec Tempor LLC",
		"birthday": "1995/12/20"
	},
	{
		"name": "Madison Holloway",
		"phone": "010-6242-3864",
		"email": "lorem.luctus@outlook.net",
		"company": "Vulputate Nisi Consulting",
		"birthday": "1998/06/01"
	},
	{
		"name": "Candice Ballard",
		"phone": "010-0322-6533",
		"email": "ultrices@protonmail.net",
		"company": "Sagittis Semper Foundation",
		"birthday": "2000/07/04"
	},
	{
		"name": "Sylvester Cotton",
		"phone": "010-6731-2855",
		"email": "et.netus.et@icloud.ca",
		"company": "Duis Volutpat Corporation",
		"birthday": "1999/08/08"
	},
	{
		"name": "Mary Hopper",
		"phone": "010-1458-9383",
		"email": "et@google.com",
		"company": "Ligula Inc.",
		"birthday": "2000/03/26"
	},
	{
		"name": "Chandler Green",
		"phone": "010-6751-0753",
		"email": "iaculis@google.edu",
		"company": "Tempus Risus Inc.",
		"birthday": "1997/09/01"
	},
	{
		"name": "Colin Sherman",
		"phone": "010-8198-7532",
		"email": "elit.nulla@yahoo.couk",
		"company": "Id Mollis Nec Ltd",
		"birthday": "1997/06/15"
	},
	{
		"name": "Rowan Goodwin",
		"phone": "010-7368-7663",
		"email": "amet.orci@icloud.couk",
		"company": "Non Enim Mauris Associates",
		"birthday": "1998/11/23"
	},
	{
		"name": "Hayes Rosa",
		"phone": "010-9651-1677",
		"email": "pellentesque.a.facilisis@icloud.edu",
		"company": "Dapibus Industries",
		"birthday": "1999/05/17"
	},
	{
		"name": "Jade Stone",
		"phone": "010-3853-3363",
		"email": "maecenas.malesuada.fringilla@icloud.com",
		"company": "Rutrum Justo Praesent Company",
		"birthday": "1996/02/16"
	},
	{
		"name": "Cleo Hudson",
		"phone": "010-9336-1857",
		"email": "tellus.eu@icloud.ca",
		"company": "Eros Nam Consequat Foundation",
		"birthday": "1995/04/07"
	},
	{
		"name": "Claudia Anderson",
		"phone": "010-5283-8256",
		"email": "vivamus.nisi.mauris@hotmail.net",
		"company": "Curabitur Foundation",
		"birthday": "1996/11/28"
	},
	{
		"name": "Kai Willis",
		"phone": "010-5244-1848",
		"email": "adipiscing.elit@outlook.couk",
		"company": "Phasellus At Augue LLC",
		"birthday": "1997/03/07"
	},
	{
		"name": "Naomi Salazar",
		"phone": "010-1427-8887",
		"email": "consequat.enim@outlook.org",
		"company": "Consequat Auctor Nunc LLP",
		"birthday": "1995/10/04"
	},
	{
		"name": "Ryan Richards",
		"phone": "010-0853-1761",
		"email": "lorem.eget@google.com",
		"company": "Habitant Inc.",
		"birthday": "1997/08/12"
	},
	{
		"name": "Ryan Keller",
		"phone": "010-4128-4428",
		"email": "molestie.tortor.nibh@protonmail.com",
		"company": "Pede Malesuada Corp.",
		"birthday": "2000/03/26"
	},
	{
		"name": "Zephania Larsen",
		"phone": "010-2877-4453",
		"email": "urna.vivamus.molestie@icloud.ca",
		"company": "Sit Amet Company",
		"birthday": "1997/08/26"
	},
	{
		"name": "Nichole Hoover",
		"phone": "010-5232-2046",
		"email": "curabitur.massa@protonmail.net",
		"company": "Vulputate Posuere Foundation",
		"birthday": "1997/10/12"
	},
	{
		"name": "Price Stevens",
		"phone": "010-8812-5500",
		"email": "tempor@protonmail.net",
		"company": "Nascetur Ridiculus Incorporated",
		"birthday": "2000/07/14"
	},
	{
		"name": "Ayanna Hayes",
		"phone": "010-7474-5744",
		"email": "in@yahoo.org",
		"company": "Et Netus Institute",
		"birthday": "1995/06/08"
	},
	{
		"name": "Emmanuel Baird",
		"phone": "010-2736-1835",
		"email": "lobortis.quam@outlook.couk",
		"company": "Fusce Incorporated",
		"birthday": "1998/07/30"
	},
	{
		"name": "Rinah Blake",
		"phone": "010-4044-7338",
		"email": "eu.placerat@hotmail.ca",
		"company": "Purus Duis Incorporated",
		"birthday": "1996/02/18"
	},
	{
		"name": "Otto Vance",
		"phone": "010-3902-0432",
		"email": "erat@outlook.com",
		"company": "Commodo Tincidunt Nibh Industries",
		"birthday": "1996/11/05"
	},
	{
		"name": "Levi O'brien",
		"phone": "010-5575-4223",
		"email": "mauris.suspendisse@outlook.ca",
		"company": "Ullamcorper Viverra Corp.",
		"birthday": "1996/01/07"
	},
	{
		"name": "Violet Lawrence",
		"phone": "010-5683-2766",
		"email": "orci.donec@icloud.com",
		"company": "Curae Donec Industries",
		"birthday": "2000/03/05"
	},
	{
		"name": "Gabriel Henry",
		"phone": "010-5164-3538",
		"email": "ac.eleifend@hotmail.couk",
		"company": "Ornare Facilisis LLP",
		"birthday": "1998/12/16"
	},
	{
		"name": "Perry Vaughn",
		"phone": "010-3916-2484",
		"email": "vivamus.sit@aol.edu",
		"company": "Amet Metus Aliquam Ltd",
		"birthday": "1998/12/17"
	},
	{
		"name": "Madison Davis",
		"phone": "010-5236-2684",
		"email": "est.nunc@icloud.org",
		"company": "Vivamus Non Institute",
		"birthday": "1998/08/12"
	},
	{
		"name": "Amaya Barnett",
		"phone": "010-1348-8644",
		"email": "augue.scelerisque.mollis@google.couk",
		"company": "Lectus Ante Inc.",
		"birthday": "1998/11/09"
	},
	{
		"name": "Kamal Rojas",
		"phone": "010-9403-4073",
		"email": "gravida.non@protonmail.ca",
		"company": "Eu Company",
		"birthday": "1999/06/05"
	},
	{
		"name": "Hillary Nieves",
		"phone": "010-4428-2303",
		"email": "tortor.dictum@aol.couk",
		"company": "Integer Eu Corporation",
		"birthday": "1997/02/01"
	},
	{
		"name": "Clark Raymond",
		"phone": "010-8386-9322",
		"email": "eros.non@yahoo.com",
		"company": "Vulputate Posuere Vulputate Associates",
		"birthday": "1997/12/26"
	},
	{
		"name": "Velma Gibbs",
		"phone": "010-8168-7826",
		"email": "fringilla.euismod.enim@protonmail.couk",
		"company": "Ipsum Suspendisse Non Industries",
		"birthday": "2000/01/27"
	},
	{
		"name": "Lamar Rutledge",
		"phone": "010-9490-0093",
		"email": "nulla.interdum.curabitur@icloud.org",
		"company": "Elementum Limited",
		"birthday": "2000/12/18"
	},
	{
		"name": "Vincent Coffey",
		"phone": "010-4287-5838",
		"email": "elit@hotmail.ca",
		"company": "Sit Amet Associates",
		"birthday": "1997/12/17"
	},
	{
		"name": "Halee Keller",
		"phone": "010-1312-1374",
		"email": "ac.feugiat.non@protonmail.com",
		"company": "Orci Luctus Et Incorporated",
		"birthday": "1998/10/27"
	},
	{
		"name": "Tamara Winters",
		"phone": "010-3884-7417",
		"email": "imperdiet.non@icloud.edu",
		"company": "Lorem Semper Corporation",
		"birthday": "1998/01/31"
	},
	{
		"name": "Kay Cochran",
		"phone": "010-9620-4182",
		"email": "ipsum.dolor.sit@outlook.ca",
		"company": "Aliquam Industries",
		"birthday": "2000/07/03"
	},
	{
		"name": "Burke Holder",
		"phone": "010-5865-0258",
		"email": "facilisis.magna.tellus@yahoo.net",
		"company": "Magna Phasellus Dolor Corp.",
		"birthday": "2000/07/23"
	},
	{
		"name": "Philip Shields",
		"phone": "010-3524-4653",
		"email": "nibh.donec.est@icloud.couk",
		"company": "Neque Vitae Semper Limited",
		"birthday": "1998/02/06"
	},
	{
		"name": "Paloma Blankenship",
		"phone": "010-6880-3674",
		"email": "nec.luctus@google.org",
		"company": "Consequat LLC",
		"birthday": "2000/01/15"
	},
	{
		"name": "Amela Shields",
		"phone": "010-7725-4159",
		"email": "tristique.aliquet@outlook.com",
		"company": "Non Egestas A Corporation",
		"birthday": "1997/10/11"
	},
	{
		"name": "Ori Guerrero",
		"phone": "010-8322-2739",
		"email": "curae.donec@hotmail.net",
		"company": "Sapien Aenean Associates",
		"birthday": "2000/01/19"
	},
	{
		"name": "Austin Benjamin",
		"phone": "010-8460-6641",
		"email": "vel.quam.dignissim@aol.edu",
		"company": "Vestibulum Neque Associates",
		"birthday": "2000/02/28"
	},
	{
		"name": "Cedric Melton",
		"phone": "010-2593-2639",
		"email": "phasellus.ornare@yahoo.edu",
		"company": "Purus Duis Corp.",
		"birthday": "1998/05/17"
	},
	{
		"name": "Jenette Gutierrez",
		"phone": "010-1978-2271",
		"email": "consectetuer.adipiscing@hotmail.com",
		"company": "Sed Est LLP",
		"birthday": "1999/08/23"
	},
	{
		"name": "Lucius Schmidt",
		"phone": "010-5449-0578",
		"email": "a.scelerisque@hotmail.org",
		"company": "Duis Mi Enim Limited",
		"birthday": "1999/01/29"
	},
]

Meteor.startup(() => {
 
});

Meteor.methods({
	makeFixtureData (userId){
		for(let i = 0 ; i < fixtures.length ; i++){
			fixtures[i]['owner'] = userId;
			AddressBook.insert(fixtures[i])
		}
		return '완료되었습니다'
	}
})
