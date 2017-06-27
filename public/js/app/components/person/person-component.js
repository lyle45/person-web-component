class Person {

    constructor() {
    }

    $onInit() {
        if (this.size === "large") {
            this.layout = "column"
        } else {
            this.layout = "row";
        }
    }
}


app.component('person', {
    templateUrl: 'js/app/components/person/person.html',
    controller: Person,
    bindings: {
        person: '=',
        size: '@'
    }
});