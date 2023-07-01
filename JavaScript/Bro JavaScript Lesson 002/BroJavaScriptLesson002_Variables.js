/*A variable is a container for storing data.
A variable behaves as if it was the value that it contains

There are two steps to creating a variable.
1. Declaration (var, let, const)
2. Assignment (= assignment operator)

First, declare the variable using one of three key functions. 
(var, let or const).
Second, assign the operation (= assignment operator).

In programming, you want the variable to be decriptive of 
the type of value it contains. So you wouldn't use a single number of
letter for a variable name. Instead, you would use something like 'age'.

*/

let age;

/* 'age' is now declared as a variable, but it doesn't yet contain 
a value. To use the variable, you would use console.log()'*/

console.log(age);

/* because 'age' is not assigned, it appears in the console on the live
server as 'undefined'.
Side note, when you display a variable, make sure it's not in quotes
eg console.log("age"). Otherwise, you will literally just be displaying
the word 'age' in your console, rather than the value contained within it.
*/

/* Step two is 'assignment'. We take the varaible name (in this case, age)
and use the assignment operator, which is an equals = sign, and set
a value. For example, age = 21*/

age = 21;
console.log(age);

/*JavaScript commands move in a linear way. This means that the order
you place your JavaScript in matters. Because of this, the first console.log
command we printed still shows in the live server console as 'undefined'.
That's because it comes before age is assigned as 21.
The console.log command after this shows in the live server console as 21.*/

/*When creating a variable, you can do this in two steps (as shown above),
or you can do it in one simple step by simply writing 'let age = 21;'. This
will do exactly the same thing, but there may be times when you need to
declare a variable and then assign a value later on, for example, when accepting
user input. In that case, it would be better to use the two step approach.*/

/*Different variables have different data types. 21 is a number data type. 
We can use this variable in some arythmatic expressions. For example,
maybe it's you're birthday so you want to add one to your age. You could say
age = age + 1.*/

age = age + 1;
console.log(age);

/* this shows in the live server console as 22.*/

/*Another data type is a 'string'. A string is a series of characters.
For example, you could use this to hold a name. To create a string,
put the assignment in quotes, for example, firstName = "Lauren"*/

let firstName = "Lauren"
console.log(firstName)

/*Another data type is a boolean. A boolean is only one of two values -
True or False. */

let coder = true;
console.log(coder);

/*If you took the number data (age) example above, and did the age + 1
exercise again, but put age in quote marks ("age") it would treat age as
a string, not a number. This would cause the result to concactenate and
would show the answer as 211, not 22. This is because it would add the 
"string" of 1, onto the end of the "string" of 21, creating 211. Instead
of adding the number data of 1 to the number data of 21, which would
create 22.*/

/*when you display a variable in the console or DOM, you can display
it along with some other text (aka String data). To do this, you simply
put the text in quote marks and follow it with a comma.*/

console.log("Hello", firstName)
console.log("you are", age, "years old")
console.log("it is", coder, "that you are a coder.")

/*If you need to display a variable within your DOM, here's something you 
can do! Go to the HTML tab (first visit) now...*/



/*RETURN FROM HTML 1
If we wish to change the inner HTML of these paragraph tags
you can do so by using the following statement:
document.getElementById("").
Within the parenthesis, you would put your unique ID tag,
so in this example, P1, P2 or P2.

You would then follow the statement with:
.innerHTML = 
You would then set this equal to whatever the
variable and/or concactenate is you want to display.
To concactenate data types in your DOM, you need to use
a + sign as you must also be concious of spacing for display.
*/

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "It is " + coder + " that you are a coder."

















