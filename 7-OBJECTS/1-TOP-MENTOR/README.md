# Top Mentor

We are given the same array of mentors, where each student now has a list of scores received on the portal (available in the `allScores` property of the `student` object).

Calculate which student has the highest total score and store the ID of their mentor in the variable:

```js
let topStudentsMentorId;
```

## Array example

```
const mentors = [
    {
        id: 100,
        firstName: 'Michael',
        lastName: 'Anderson',
        course: 'Computer Science',
        students: [
            {
                id: 1,
                firstName: 'Jake',
                lastName: 'Miller',
                allScores: [11, 3, 3, 4, 1, 0, 5, 6]
            },
            {
                id: 2,
                firstName: 'Leo',
                lastName: 'Turner',
                allScores: [0, 1, 1, 11, 10]
            },
            {
                id: 3,
                firstName: 'Emily',
                lastName: 'Wright',
                allScores: [3, 1, 9]
            },
            {
                id: 4,
                firstName: 'Lucas',
                lastName: 'Carter',
                allScores: [10, 10, 15, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 5,
                firstName: 'Sophia',
                lastName: 'Cooper',
                allScores: [10, 10, 15, 5, 6, 3, 3, 10, 3, 7, 5]
            }
        ]
    },
    {
        id: 200,
        firstName: 'George',
        lastName: 'Matthews',
        course: 'Digital Design',
        students: [
            {
                id: 6,
                firstName: 'Ryan',
                lastName: 'Gray',
                allScores: [6, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 7,
                firstName: 'Lily',
                lastName: 'Simmons',
                allScores: [10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 8,
                firstName: 'Samantha',
                lastName: 'Bennett',
                allScores: [3, 10, 3, 10, 5]
            },
            {
                id: 9,
                firstName: 'Matthew',
                lastName: 'Armstrong',
                allScores: [5, 15, 7, 5, 15, 10, 5, 6, 3, 10, 10, 3, 10, 3, 10]
            }
        ]
    },
    {
        id: 300,
        firstName: 'Anna',
        lastName: 'Peterson',
        course: 'Career Development',
        students: [
            {
                id: 10,
                firstName: 'Ethan',
                lastName: 'Reed',
                allScores: [10, 5, 6, 3, 7, 5, 10, 10, 15, 10, 3]
            },
            {
                id: 11,
                firstName: 'Isabella',
                lastName: 'Hughes',
                allScores: [10, 10, 3, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 12,
                firstName: 'Logan',
                lastName: 'Mitchell',
                allScores: [1, 10, 5, 6, 10, 10, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
            },
            {
                id: 13,
                firstName: 'Owen',
                lastName: 'Stewart',
                allScores: [3, 10, 5, 15, 7, 5]
            },
            {
                id: 14,
                firstName: 'Chloe',
                lastName: 'Sanders',
                allScores: [15, 10, 5, 6, 10, 10, 3, 10, 7, 5]
            }
        ]
    },
    {
        id: 400,
        firstName: 'Laura',
        lastName: 'Watson',
        course: 'English Club',
        students: [
            {
                id: 15,
                firstName: 'Zach',
                lastName: 'Foster',
                allScores: [5, 15, 7, 5]
            },
            {
                id: 16,
                firstName: 'Noah',
                lastName: 'Russell',
                allScores: [5]
            },
            {
                id: 17,
                firstName: 'Aaron',
                lastName: 'West',
                allScores: [6, 10, 10, 3, 10, 5, 10, 15, 20, 25]
            },
            {
                id: 18,
                firstName: 'Nathan',
                lastName: 'Perry',
                allScores: [6, 3, 10, 3, 10, 5, 10, 15, 20, 25]
            },
            {
                id: 19,
                firstName: 'Rita',
                lastName: 'Harrison',
                allScores: [10, 10, 15, 10, 5, 3, 10, 5, 15, 7, 5]
            }
        ]
    }
];
```
