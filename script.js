// SBA 308: JavaScript Fundamentals
// data provided
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

// go through submissions
function getLearnerData(course, group, submissions) {
    // // check if the assignment group matches the  course
    // if (group.course_id !== course.id) {
    //     throw new Error("AssignmentGroup course_id does not match CourseInfo id");
    // }

    const currentDate = new Date();      // get the current date to compare with assignment due dates
    const learnersData = {};      // 0bject to store data for each learner

    submissions.forEach(submission => {      // loop through each submission
        const assignment = group.assignments.find(a => a.id === submission.assignment_id);
        if (!assignment) {          // find the corresponding assignment for each submission
            throw new Error("Assignment not found");
        }


        // Convert due date and submission date to Date objects for comparison
        const dueDate = new Date(assignment.due_at);
        const submittedDate = new Date(submission.submission.submitted_at);
        // console.log(dueDate);
        // console.log(dueDate);

        // skip assignments not yet due ... totally looked this up
        switch (true) {
            case (dueDate > currentDate):
                return;
        }

        // create and initialize object for each learner, check if exists
        if (!learnersData[submission.learner_id]) {
            learnersData[submission.learner_id] = {
                id: submission.learner_id,
                avg: 0,
                totalPoints: 0,
                totalWeightedScore: 0
            };
        }

        const learnerData = learnersData[submission.learner_id];
        console.log(learnerData);
        let score = submission.submission.score;
// console.log(score);
        if (submittedDate > dueDate) {          // deduct 10% if the assignment was submitted late
            score -= assignment.points_possible * 0.1;
        }


        // calculate percentage score for the assignment and store it
        learnerData[assignment.id] = (score / assignment.points_possible).toFixed(2); // converts number to string
        learnerData.totalPoints += assignment.points_possible;
        learnerData.totalWeightedScore += score;
    });

    // convert the learnersData object into array format
    return Object.values(learnersData).map(learnerData => {
        learnerData.avg = (learnerData.totalWeightedScore / learnerData.totalPoints).toFixed(2);
        // delete learnerData.totalPoints;
        // delete learnerData.totalWeightedScore;
        return learnerData;
    });
}

// invoke the function, store the result
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

//



// const latePenaltyRate = 0.1; // Penalty rate for late submissions
// let result = []; // Variable to store the final result

// // check if AssignmentGroup and Course match
// console.log(AssignmentGroup.course_id + ' compared to ' + CourseInfo.id) // expect a match
// function checkCourseAssignmentMatch(course, ag) {
//     try {
//         if (ag.course_id !== course.id) {
//             throw new Error('Invalid- AssignmentGroup does not match Course')
//         }
//     } catch (error) {
//         console.error('An error has occurred:', error.message)
//     }
// }
// // 
// let assignment; // find the matching assignment.
// for (let matching of ag.assignments) { // for of loop iterates over the assignments array in the object ag.
//   if (matching.id === assignment_id) { // checks if id property === assignment_id.
//     assignment = matching; // A match was found.
//     break; // once a match is found then break.
//   }
// }