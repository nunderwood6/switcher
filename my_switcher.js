var Switcher = require("./switcher.js");
var fs = require('fs');
var switcher = new Switcher();




////////////u4////////////////
//details
fs.readFile('u4_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Sherman County",
		"Scott County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Sherman County",
		"Greeley County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('april22/u4_details.json',data);
});

//county
fs.readFile('u4_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Sherman County",
		"Scott County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Sherman County",
		"Greeley County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('april22/u4_counties.json',data);
});



/*
////////////t2//////////////////////// 
//details
fs.readFile('t2_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	var new_details = switcher.details(old_details, "NAME10", "Norton County",
		"Rooks County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_details);
	fs.writeFileSync('april22/t2_details.json',data);
});

//county
fs.readFile('t2_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Norton County",
		"Rooks County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_counties);
	fs.writeFileSync('april22/t2_counties.json',data);
});


////////////l4////////////////
//details
fs.readFile('new_data/l4_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Sherman County",
		"Greeley County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Wichita County",
		"Scott County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('l4_details.json',data);
});

//county
fs.readFile('new_data/l4_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Sherman County",
		"Greeley County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Wichita County",
		"Scott County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('l4_counties.json',data);
});


////////////c1//////////////////////// 
//details
fs.readFile('old_data/details/c1_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	var new_details = switcher.details(old_details, "NAME10", "Sheridan County",
		"Finney County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_details);
	fs.writeFileSync('new_data/details/c1_details.json',data);
});

//county
fs.readFile('old_data/counties/c1_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Sheridan County",
		"Finney County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_counties);
	fs.writeFileSync('new_data/counties/c1_counties.json',data);
});

////////////u4//////////////////////// 
//details
fs.readFile('old_data/details/u4_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	var new_details = switcher.details(old_details, "NAME10", "Graham County",
		"Hodgeman County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_details);
	fs.writeFileSync('new_data/details/u4_details.json',data);
});

//county
fs.readFile('old_data/counties/u4_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Graham County",
		"Hodgeman County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_counties);
	fs.writeFileSync('new_data/counties/u4_counties.json',data);
});



////////////t4////////////////
//details
fs.readFile('old_data/details/t4_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Ellis County",
		"Wallace County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Rawlins County",
		"Lane County", ["tweets", "tweetClass"]);
	var new_details3 = switcher.details(new_details2, "NAME10", "Kearny County",
		"Logan County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details3);
	fs.writeFileSync('new_data/details/t4_details.json',data);
});

//county
fs.readFile('old_data/counties/t4_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Ellis County",
		"Wallace County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Rawlins County",
		"Lane County", ["tweets", "tweetClass"]);
	var new_counties3 = switcher.counties(new_counties2, "NAME10", "Kearny County",
		"Logan County", ["tweets", "tweetClass"]);

	let data = JSON.stringify(new_counties3);
	fs.writeFileSync('new_data/counties/t4_counties.json',data);
});


////////////c2////////////////
//details
fs.readFile('old_data/details/c2_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Ellis County",
		"Decatur County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Rawlins County",
		"Norton County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('new_data/details/c2_details.json',data);
});

//county
fs.readFile('old_data/counties/c2_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Ellis County",
		"Decatur County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Rawlins County",
		"Norton County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('new_data/counties/c2_counties.json',data);
});

////////////u1//////////////////////// 
//details
fs.readFile('old_data/details/u1_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	var new_details = switcher.details(old_details, "NAME10", "Wichita County",
		"Finney County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_details);
	fs.writeFileSync('new_data/details/u1_details.json',data);
});

//county
fs.readFile('old_data/counties/u1_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Wichita County",
		"Finney County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_counties);
	fs.writeFileSync('new_data/counties/u1_counties.json',data);
});


////////////l3////////////////
//details
fs.readFile('old_data/details/l3_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Finney County",
		"Hamilton County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Trego County",
		"Hodgeman County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('new_data/details/l3_details.json',data);
});

//county
fs.readFile('old_data/counties/l3_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Finney County",
		"Hamilton County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Trego County",
		"Hodgeman County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('new_data/counties/l3_counties.json',data);
});


////////////u2////////////////
//details
fs.readFile('old_data/details/u2_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Logan County",
		"Ness County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Ness County",
		"Hamilton County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('new_data/details/u2_details.json',data);
});

//county
fs.readFile('old_data/counties/u2_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Logan County",
		"Ness County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Ness County",
		"Hamilton County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('new_data/counties/u2_counties.json',data);
});


////////////t1////////////////
//details
fs.readFile('old_data/details/t1_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Rawlins County",
		"Phillips County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Logan County",
		"Kearny County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('new_data/details/t1_details.json',data);
});

//county
fs.readFile('old_data/counties/t1_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Rawlins County",
		"Phillips County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Logan County",
		"Kearny County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('new_data/counties/t1_counties.json',data);
});



////////////c3////////////////
//details
fs.readFile('old_data/details/c3_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Ellis County",
		"Ness County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Gove County",
		"Scott County", ["tweets", "tweetClass"]);
	var new_details3 = switcher.details(new_details2, "NAME10", "Gove County",
		"Kearny County", ["tweets", "tweetClass"]);
	var new_details4 = switcher.details(new_details3, "NAME10", "Hodgeman County",
		"Lane County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details3);
	fs.writeFileSync('new_data/details/c3_details.json',data);
});

//county
fs.readFile('old_data/counties/c3_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Ellis County",
		"Ness County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Gove County",
		"Scott County", ["tweets", "tweetClass"]);
	var new_counties3 = switcher.counties(new_counties2, "NAME10", "Gove County",
		"Kearny County", ["tweets", "tweetClass"]);
	var new_counties4 = switcher.counties(new_counties3, "NAME10", "Hodgeman County",
		"Lane County", ["tweets", "tweetClass"]);

	let data = JSON.stringify(new_counties3);
	fs.writeFileSync('new_data/counties/c3_counties.json',data);
});


////////////u3//////////////////////// 
//details
fs.readFile('old_data/details/u3_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	var new_details = switcher.details(old_details, "NAME10", "Graham County",
		"Phillips County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_details);
	fs.writeFileSync('new_data/details/u3_details.json',data);
});

//county
fs.readFile('old_data/counties/u3_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Graham County",
		"Phillips County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_counties);
	fs.writeFileSync('new_data/counties/u3_counties.json',data);
});


////////////c4////////////////
//details
fs.readFile('old_data/details/c4_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	//need several switches
	var new_details = switcher.details(old_details, "NAME10", "Wichita County",
		"Greeley County", ["tweets", "tweetClass"]);
	var new_details2 = switcher.details(new_details, "NAME10", "Logan County",
		"Sheridan County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_details2);
	fs.writeFileSync('new_data/details/c4_details.json',data);
});

//county
fs.readFile('old_data/counties/c4_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Wichita County",
		"Greeley County", ["tweets", "tweetClass"]);
	var new_counties2 = switcher.counties(new_counties, "NAME10", "Logan County",
		"Sheridan County", ["tweets", "tweetClass"]);


	let data = JSON.stringify(new_counties2);
	fs.writeFileSync('new_data/counties/c4_counties.json',data);
});


////////////l4//////////////////////// 
//details
fs.readFile('old_data/details/l4_details.json', function(err, rawJson){

	if(err) console.log(err);

	var old_details = JSON.parse(rawJson);
	var new_details = switcher.details(old_details, "NAME10", "Scott County",
		"Finney County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_details);
	fs.writeFileSync('new_data/details/l4_details.json',data);
});

//county
fs.readFile('old_data/counties/l4_counties.json', function(err, rawJson){

	if(err) console.log(err);

	var old_counties = JSON.parse(rawJson);
	var new_counties = switcher.counties(old_counties, "NAME10", "Scott County",
		"Finney County", ["tweets", "tweetClass"]);
	let data = JSON.stringify(new_counties);
	fs.writeFileSync('new_data/counties/l4_counties.json',data);
});

*/


