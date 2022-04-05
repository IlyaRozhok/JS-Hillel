class Human {

    constructor(name, surname, yearOfBirth) {
        this.firstName = name;
        this.lastName = surname;
        this.age = yearOfBirth;
    }

    static ageDiff(person, anotherPerson) {
        const diff = `The age difference is ${Math.abs(person.age - anotherPerson.age)}`;
        if (person.age > anotherPerson.age) {
            return `${person.firstName} older than ${anotherPerson.firstName}. ${diff}`
        } else if (person.age === anotherPerson.age) {
            return `${person.firstName} was born in the same year as ${anotherPerson.firstName}.`
        } else return `${person.firstName} younger than ${anotherPerson.firstName}. ${diff}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (typeof value != 'string') throw new Error('Use only string data!')
        if (value.length < 3 || value.length > 15) throw new Error('Invalid length of name')
        return this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (typeof value != 'string') throw new Error('Use only string data!')
        if (value.length < 1 || value.length > 15) throw new Error('Invalid length of surname')
        return this._lastName = value;
    }

    get age() {
        return this._age
    }

    set age(value) {
        if (typeof value != 'number') throw new Error('Use only numbers!')
        if ((value < 1900) || (value > 2022)) throw new Error('Wrong year of birth entered!')
        return this._age = new Date().getFullYear() - value;
    }
}

class Student extends Human {

    constructor(name, surname, yearOfBirth) {
        super(name, surname, yearOfBirth);
        this.journal = {
            presents: new Array(10),
            grades: new Array(10)
        };
    }

    present() {
        const index = this.journal.presents.findIndex((elem) => {
            return typeof elem === 'undefined'
        })
        if (index < 0) throw new Error('Attendance list is full')
        this.journal.presents[index] = true;
    }

    absent() {
        const index = this.journal.presents.findIndex((elem) => {
            return typeof elem === 'undefined'
        })
        if (index < 0) throw new Error('Attendance list is full')
        this.journal.presents[index] = false;
    }

    mark(grade) {
        const index = this.journal.grades.findIndex((elem) => {
            return typeof elem === 'undefined'
        })
        if (index < 0) throw new Error('Grade list is full');
        if (grade < 1 || grade > 10) throw new Error('Invalid grade')
        this.journal.grades[index] = grade;
    }

    summary() {
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
}





