# SBA308
## Objectives
"Employ basic JavaScript syntax accurately.
Implement control flow structures such as conditionals and loops effectively.
Use arrays and objects to organize and manage data.

Develop functions to create reusable code.
Utilize loops and iteration to navigate through data collections.

Implement error handling to manage potential code failures gracefully.

Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
Use try/catch and other logic to handle these types of errors gracefully.
If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.
Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
You may use as many helper functions as you see fit.

⦁	Include a README file that contains a description of your application. 
⦁	Commit frequently to the git repository. 
⦁	Declare variables properly using let and const where appropriate. 
⦁	Create and/or manipulate arrays and objects.
⦁	Use strings, numbers, and Boolean values cached within variables. 
⦁	Use operators to perform calculations on variables and literals. 
⦁	Use at least two if/else statements to control program flow. Optionally, use at least one switch statement. 
⦁	Use functions to handle repeated tasks. 
⦁	Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object. 
⦁	Utilize at least one loop control keyword such as break or continue. 
⦁	Utilize at least two different types of loops. 
⦁	Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior. 
⦁	Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). 
⦁	Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program. 

