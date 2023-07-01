/* arithmetic expression is a combination of...

- Operands (values, variables, etc)
- Operators (+ - * / % **)

that can be evaluated to a value
eg. y = x + 5
*/

/* For an example, let's say we have a class of 20 students. */

let students = 20;

/*We have one student joining the class*/

students = students + 1;
console.log(students);

/*We have one student leaving the class*/

students = students - 1
console.log(students);

/*The class has doubled in size!*/

students = students * 2;
console.log(students);

/*The class has halved in sized.*/

students = students / 2
console.log(students);

/*The final symbol (%) is a little more unusual. 
This is called a modulus operator. It gives you the remainder of 
any division. So, lets say we have our class of 20 students and
we need to split it into 3 groups. But, 20 doesn't divide by 3 evenly.
We can store the remainder within a separate variable.
We'll do this by creating a new variable called extraStudents and
making this equal to students % 3.*/

let extraStudents = students % 3;
console.log(extraStudents);

/* This shows that we have 2 extra students. But what if we had a
second class of 21 students that we split into 3?*/

let newClass = 21;
extraStudents = newClass % 3

console.log(extraStudents)

/*This shows that extraStudents is now equal to 0, as 3 goes into 
21 evenly so there are no remainders leftover.*/

/*One popular use of the modulos operator is to find out if a number
is even or odd by using '% 2'. If the number is 0 we have an even number,
but if the number is 1 we have an odd number.*/

/*Another unusual operator is call Exponentiation **. This is when you raise
a value to a given number. For example, support you need to square the
amount of students that you have. You would use students = students ** 2.*/

students = students ** 2;
console.log(students);

/*This gives the result of 400. What about students cubed?*/

students = students ** 3;
console.log(students)

/*64000000!!! That's a lot of bloody students!! Let's get that back down...*/

students = 20
console.log(students)

/*It can get a bit tedious writing out all these lines, so there is an
abbreviated what of doing this. This is known as 'augmented assignment operator'.
So, for example, instead of saying students = students + 1, you could say
students += 1;
*/

students += 1;
console.log(students)

/*instead of students = students - 1...*/

students -= 1;
console.log(students)

/*instead of students = students * 2...*/

students *=2;
console.log(students)

/*instead of students = students / 2...*/

students /=2;
console.log(students)

/*Something important to note with augmented assignment operators, is that
they can only be used if you're reassigning the same variable. For example,
you could NOT say 
let extraStudents %=3
as this would not succeed. Instead, is would display a syntax error in the
live server console.*/

/*Another important thing to understand with arithmetic expression in JavaScript
is Operator Precendence. This means that any line of arithmatic will be
calculated in the following order:

1. Parenthesis ()
2. Exponents
3. Multiplication and division
4. Addition and subtraction. 

so if we asked for 
let result = 1 + 2 * (3 + 4);*/

let result = 1 + 2 * (3 + 4);
console.log (result)

/*The console in the live server shows the result as 15.
This is because it calculated 3 + 4 = 7 first because it priortised
parenthesis. There were no exponents to consider, so at this point it's
working with 1 + 2 * 7. Next priority is the multiplication, which is 
2 * 7 = 14. Finally, the addition is simply the remaining 1. 1 + 14 = 15.

If you add a set of parenthesis, you can force operator precedencen. 
While it will always move from left to right, it will always
prioritise parenthesis first. For example:*/

result = (1 + 2) * (3 + 4)
console.log (result)

/*Although the numbers are the same, the result is now 21. This is because
the priority was the parenthesis, and the priority order of each set of
parenthesis is left to right. So 
1 + 2 = 3, 
3 + 4 = 7,
3 * 7 = 21.
*/













