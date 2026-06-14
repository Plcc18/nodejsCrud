class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `Hello,${this.name}`;
    }
}

module.exports = {
    Person,
};