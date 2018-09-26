function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
};

Dog.prototype.species = "Psowate";

Dog.prototype.bark = function() {
	if (this.weight > 10 ) {
		console.log(this.name + " szczeka hau!");
	} else {
		console.log(this.name + " szczeka hiaaau!");
	};
};

Dog.prototype.run = function() {
	console.log("Biega");
};

Dog.prototype.wag = function() {
	console.log("Merda ogonem!");
};

var fido = new Dog("Burek", "mieszaniec", 20);
var fluffy = new Dog("Dino", "pudel", 16);
var spot = new Dog("Kieł", "chihuahua", 4);

var aDog = new Dog();

//zmiana instancji psa w prototyp psa pokazowego

function ShowDog(name, breed, weight, handler) {
	Dog.call(this, name, breed, weight);
	this.handler = handler;
};

ShowDog.prototype = new Dog();

ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Sieciowice";

ShowDog.prototype.stack = function() {
	console.log("Stoi i uważa!");
};

ShowDog.prototype.bait = function() {
	console.log("Prosi o smakołyk.");
};

ShowDog.prototype.gait = function(kind) {
	console.log("Trenuje " + kind + ".");
};

ShowDog.prototype.groom = function() {
	console.log("Czas pielęgnacji sierści.");
};

var scotty = new ShowDog("Szatan", "terier szkocki", 8, "Grzesiu");
var beatrice = new ShowDog("Beatrycze", "szpic miniaturowy", 3, "Henryk");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
beatrice.bark();
scotty.gait("marsz");
beatrice.groom();

// instanceof - practice

if (fido instanceof Dog) {
	console.log("Burek jest obiektem Dog");
};

if (fido instanceof ShowDog) {
	console.log("Burek jest obiektem ShowDog");
};

if (scotty instanceof Dog) {
	console.log("Szatan jest obiektem Dog");
};

if (scotty instanceof ShowDog) {
	console.log("Szatan jest obiektem ShowDog");
};

console.log("Konstruktor Burka to: " + fido.constructor);
console.log("Konstruktor Szatana to: " + scotty.constructor);

