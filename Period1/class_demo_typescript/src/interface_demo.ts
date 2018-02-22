interface i_person {
    readonly id: number;
    first_name: string;
    last_name: string;
    email: string;
    landline?: string;
}

function person_logger(person: i_person) {
    const str = `********************
    ID: ${person.id}
    Name: ${person.first_name} ${person.last_name}
    Phone: ${person.landline}
********************`

    return str;

}

let p1: i_person = {
    id: 1, 
    first_name: 'Kurt', 
    last_name: 'Wonneguth', 
    email: 'kurt@gmail.com'
}

console.log(person_logger(p1));