document.addEventListener('DOMContentLoaded', nextSw);

function nextSw() {
	var swapi = document.getElementById('swapi');
	var increasePage = 1;
	var req = new XMLHttpRequest();
	var URLhost = 'https://swapi.co/api/people/?page=' + increasePage;
	req.open('GET', URLhost, true);
	req.addEventListener('load', function () {
		if (req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			console.log(response);
			for (var k = 0; k < response.results.length; k++) {
				(function (feature) {
					var person = document.createElement('h1');
					swapi.appendChild(person);
					person.textContent = response.results[feature].name;

					var personVehicles = document.createElement('p');
					var vehiclesReq = new XMLHttpRequest();
					var vehiclesURL = response.results[feature].vehicles.toString();
					vehiclesReq.open('GET', vehiclesURL, true);
					vehiclesReq.addEventListener('load', function () {
						if (vehiclesReq.status >= 200 && vehiclesReq.status < 400) {
							var vehicleResponse = JSON.parse(vehiclesReq.responseText);
							console.log(vehicleResponse);
							personVehicles.textContent = 'Vehicle owned: ' + vehicleResponse.name + ' manufactured by: ' + vehicleResponse.manufacturer;
							person.appendChild(personVehicles);
						} else {
							console.log('Error occured: ' + req.statusText);
						}
					});
					vehiclesReq.send(null);
					event.preventDefault();

					var personStarship = document.createElement('p');
					var starshipReq = new XMLHttpRequest();
					var starhipURL = response.results[feature].starships.toString();
					starshipReq.open('GET', starhipURL, true);
					starshipReq.addEventListener('load', function () {
						if (starshipReq.status >= 200 && starshipReq.status < 400) {
							var starshipResponse = JSON.parse(starshipReq.responseText);
							console.log(starshipResponse);
							personStarship.textContent = 'Starship owned: ' + starshipResponse.name + ' manufactured by: ' + starshipResponse.manufacturer;
							person.appendChild(personStarship);
						} else {
							console.log('Error occured: ' + req.statusText);
						}
					});
					starshipReq.send(null);
					event.preventDefault();

					var personGender = document.createElement('p');
					swapi.appendChild(personGender);
					personGender.textContent = 'Gender: ' + response.results[feature].gender;

					var personMass = document.createElement('p')
					swapi.appendChild(personMass);
					personMass.textContent = 'Mass: ' + response.results[feature].mass + ' kg';

					var personHeight = document.createElement('p');
					swapi.appendChild(personHeight);
					personHeight.textContent = 'Height: ' + response.results[feature].height + ' cm';


					var personBirth = document.createElement('p');
					swapi.appendChild(personBirth);
					personBirth.textContent = 'Birth date: ' + response.results[feature].birth_year;


				})(k);
			}


		} else {
			console.log('Error occured: ' + req.statusText);
		}
	});
	req.send(null);
	event.preventDefault();

	document.getElementById('next').addEventListener('click', function (event) {
		if (increasePage < 9) {
			swapi.innerHTML = "";
			increasePage++;
			var req = new XMLHttpRequest();
			var URLhost = 'https://swapi.co/api/people/?page=' + increasePage;
			req.open('GET', URLhost, true);
			req.addEventListener('load', function () {
				if (req.status >= 200 && req.status < 400) {
					var response = JSON.parse(req.responseText);
					console.log(response);
					for (var k = 0; k < response.results.length; k++) {
						(function (feature) {
							{
								var person = document.createElement('h1');
								swapi.appendChild(person);
								person.textContent = response.results[feature].name;

								var personVehicles = document.createElement('p');
								var vehiclesReq = new XMLHttpRequest();
								var vehiclesURL = response.results[feature].vehicles.toString();
								vehiclesReq.open('GET', vehiclesURL, true);
								vehiclesReq.addEventListener('load', function () {
									if (vehiclesReq.status >= 200 && vehiclesReq.status < 400) {
										var vehicleResponse = JSON.parse(vehiclesReq.responseText);
										console.log(vehicleResponse);
										personVehicles.textContent = 'Vehicle owned: ' + vehicleResponse.name + ' manufactured by: ' + vehicleResponse.manufacturer;
										person.appendChild(personVehicles);
									} else {
										console.log('Error occured: ' + req.statusText);
									}
								});
								vehiclesReq.send(null);
								event.preventDefault();

								var personStarship = document.createElement('p');
								var starshipReq = new XMLHttpRequest();
								var starhipURL = response.results[feature].starships.toString();
								starshipReq.open('GET', starhipURL, true);
								starshipReq.addEventListener('load', function () {
									if (starshipReq.status >= 200 && starshipReq.status < 400) {
										var starshipResponse = JSON.parse(starshipReq.responseText);
										console.log(starshipResponse);
										personStarship.textContent = 'Starship owned: ' + starshipResponse.name + ' manufactured by: ' + starshipResponse.manufacturer;
										person.appendChild(personStarship);
									} else {
										console.log('Error occured: ' + req.statusText);
									}
								});
								starshipReq.send(null);
								event.preventDefault();

								var personGender = document.createElement('p');
								swapi.appendChild(personGender);
								personGender.textContent = 'Gender: ' + response.results[feature].gender;

								var personMass = document.createElement('p')
								swapi.appendChild(personMass);
								personMass.textContent = 'Mass: ' + response.results[feature].mass + ' kg';

								var personHeight = document.createElement('p');
								swapi.appendChild(personHeight);
								personHeight.textContent = 'Height: ' + response.results[feature].height + ' cm';


								var personBirth = document.createElement('p');
								swapi.appendChild(personBirth);
								personBirth.textContent = 'Birth date: ' + response.results[feature].birth_year;


							}

						})(k);
					}

				} else {
					console.log('Error occured: ' + req.statusText);
				}
			});
			req.send(null);
			event.preventDefault();
		}
	});

	document.getElementById('prev').addEventListener('click', function (event) {
		if (increasePage > 1) {
			swapi.innerHTML = "";
			increasePage--;
			var req = new XMLHttpRequest();
			var URLhost = 'https://swapi.co/api/people/?page=' + increasePage;
			req.open('GET', URLhost, true);
			req.addEventListener('load', function () {
				if (req.status >= 200 && req.status < 400) {
					var response = JSON.parse(req.responseText);
					console.log(response);
					for (var k = 0; k < response.results.length; k++) {
						(function (feature) {
							var person = document.createElement('h1');
							swapi.appendChild(person);
							person.textContent = response.results[feature].name;

							var personVehicles = document.createElement('p');
							var vehiclesReq = new XMLHttpRequest();
							var vehiclesURL = response.results[feature].vehicles.toString();
							vehiclesReq.open('GET', vehiclesURL, true);
							vehiclesReq.addEventListener('load', function () {
								if (vehiclesReq.status >= 200 && vehiclesReq.status < 400) {
									var vehicleResponse = JSON.parse(vehiclesReq.responseText);
									console.log(vehicleResponse);
									personVehicles.textContent = 'Vehicle owned: ' + vehicleResponse.name + ' manufactured by: ' + vehicleResponse.manufacturer;
									person.appendChild(personVehicles);
								} else {
									console.log('Error occured: ' + req.statusText);
								}
							});
							vehiclesReq.send(null);
							event.preventDefault();

							var personStarship = document.createElement('p');
							var starshipReq = new XMLHttpRequest();
							var starhipURL = response.results[feature].starships.toString();
							starshipReq.open('GET', starhipURL, true);
							starshipReq.addEventListener('load', function () {
								if (starshipReq.status >= 200 && starshipReq.status < 400) {
									var starshipResponse = JSON.parse(starshipReq.responseText);
									console.log(starshipResponse);
									personStarship.textContent = 'Starship owned: ' + starshipResponse.name + ' manufactured by: ' + starshipResponse.manufacturer;
									person.appendChild(personStarship);
								} else {
									console.log('Error occured: ' + req.statusText);
								}
							});
							starshipReq.send(null);
							event.preventDefault();

							var personGender = document.createElement('p');
							swapi.appendChild(personGender);
							personGender.textContent = 'Gender: ' + response.results[feature].gender;

							var personMass = document.createElement('p')
							swapi.appendChild(personMass);
							personMass.textContent = 'Mass: ' + response.results[feature].mass + ' kg';

							var personHeight = document.createElement('p');
							swapi.appendChild(personHeight);
							personHeight.textContent = 'Height: ' + response.results[feature].height + ' cm';


							var personBirth = document.createElement('p');
							swapi.appendChild(personBirth);
							personBirth.textContent = 'Birth date: ' + response.results[feature].birth_year;

						})(k);
					}

				} else {
					console.log('Error occured: ' + req.statusText);
				}
			});
			req.send(null);
			event.preventDefault();
		}
	});

}