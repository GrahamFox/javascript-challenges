//Randomize three numbers in range (0-100) and print the largest one.//

function randomLargest() {

	var x = parseInt ( Math.random()*100 );
	var y = parseInt ( Math.random()*100 );
	var z = parseInt ( Math.random()*100 );

	var maxValue = Math.max(x,y,z)
	console.log( x + " - " + y + " - " +  z);

	return maxValue;

}

randomLargest()

//Randomize a number (range from 0-100) then print all the even numbers from 0 to randomized.//

function randomEven () {

	var randomNumber = parseInt (Math.random()*100);
	console.log(randomNumber);

	for (var i = 0; i <=100; i +=2) {
		console.log(i)
	}
	

}

/*Randomize a number (from 0-100) then print all the odd numbers from 40 to that one. If the number was smaller than 40
nohting should be printed*/

function randomOdd() {

	var randomNumber = parseInt (Math.random()*100);
	console.log(randomNumber);

	for (var i = 40; i <=100; i++) {
		if (i % 2 !=0)
			console.log(i + "")
	}
}

/*Randomize a number between 0-100 then print all the odd numbers from 40 to that one. If the number was smaller than
40, rint all the numbers down to the randomized one. (i.e if the result was 37, you should print: 40, 39, 38, 37)*/

function randomOddSmallers() {

	var randomNumber = parseInt (Math.random()*100);
	console.log(randomNumber);

	for (var i = 40; i >=0; i--) {
		console.log(i)
	}
}

/*Randomise a number between 1000-9999 and calculate the sum of it's digits, for instance if the ramdomised number was
1049, program shoud print 14.*/

function randomSum() {
	var y = 0;
	var x = parseInt(Math.random()*10000);
	if (x < 1000) { 
		x  += 1000; 
	}
	console.log(x);
	x += "";
	for (i = 0; i < 4; i++){
		y += parseInt(x.charAt(i));
//		y = parseInt(y);
//		total += y;
	}
//	console.log(total);
	return y;
}
​
randomSum()

/*randomise a number between 1000-9999 and calculate the sum of its digits repeatedly until you reach one digit only.
for instance, if the randomised number was 1049, program should print 5.*/

