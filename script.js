// SBA 308: JavaScript Fundamentals
//
// Your goal is to analyze and transform this data such that the output of your program
//  is an ARRAY OF OBJECTS, each containing the following information in the following format:
// {
//     // the ID of the learner for which this data has been collected "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

console.log(CourseInfo); // object
console.log(LearnerSubmissions); // checking its type, it is an array full of objects
console.log(AssignmentGroup); // object
// learner_id and assignment_id are arrays, submission is an object
let Amy = { learner_id: 125 };
let Zach = { learner_id: 132 };
if (LearnerSubmissions[0].learner_id === 125) {  // index of 0, 
    console.log(`This student's name is Amy.`);
} else {
    console.log(`This student's name is Zach.`);
}
console.log(Amy);
console.log(Zach);


// let's deal with the simple information first

// check if AssignmentGroup and Course match
console.log(AssignmentGroup.course_id + ' compared to ' + CourseInfo.id) // expect a match
function checkCourseAssignmentMatch(course, ag) {
    try {
        if (ag.course_id !== course.id) {
            throw new Error('Invalid- AssignmentGroup does not match Course')
        }
    } catch (error) {
        console.error('An error has occurred:', error.message)
    }
}
// 