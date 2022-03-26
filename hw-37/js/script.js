'use strict';

function Student(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = new Date().getFullYear() - yearOfBirth;
    this.yearOfBirth = yearOfBirth;

    this.journal = {
        presents: new Array(10),
        grades: new Array(10)
    };

    Object.defineProperty(this, 'journal', {
        enumerable: false
    })
    Object.defineProperty(this, 'yearOfBirth', {
        enumerable: false
    })
}

//METHODS
Student.prototype.present = function () {
    const index = this.journal.presents.findIndex((elem) => {
        return typeof elem === 'undefined'
    })
    if (index < 0) throw new Error('Attendance list is full')
    this.journal.presents[index] = true;
}

Student.prototype.absent = function () {
    const index = this.journal.presents.findIndex((elem) => {
        return typeof elem === 'undefined'
    })
    if (index < 0) throw new Error('Attendance list is full')
    this.journal.presents[index] = false;
}

Student.prototype.mark = function (grade) {
    const index = this.journal.grades.findIndex((elem) => {
        return typeof elem === 'undefined'
    })
    if (index < 0) throw new Error('Grade list is full');
    if (grade < 1 || grade > 10) throw new Error('Invalid grade')
    this.journal.grades[index] = grade;
}

Student.prototype.summary = function () {
    let averageGrade = null;
    let averagePresent = null;

    function calcGrade() {
        const grades = this.journal.grades.reduce((accum, item) => {
            if (!item) return
            accum += item;
            return accum;
        })

        const gradesLength = this.journal.grades.filter(item => {
            return typeof item != 'undefined'
        }).length
        averageGrade = grades / gradesLength;
    }

    function calcPresents() {
        const presents = this.journal.presents.reduce((accum, item) => {
            if (typeof item === 'undefined') return
            accum += item;
            return accum;
        })

        const presentListLength = this.journal.presents.filter(item => {
            return typeof item != 'undefined'
        }).length
        averagePresent = presents / presentListLength;
    }

    calcGrade.bind(this)();
    calcPresents.bind(this)();

    if ((averageGrade > 9) && (averagePresent > 0.9)) {
        return 'Ути какой молодчинка!'
    } else if ((averageGrade > 9) || (averagePresent > 0.9)) {
        return 'Норм, но можно лучше!'
    } else return 'Редиска!'
}












