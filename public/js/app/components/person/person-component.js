class Person {

    constructor() {
    }
}

app.component('person', {
    templateUrl: 'js/app/components/person/person.html',
    controller: Person,
    bindings: {
        person: '='
    }
});