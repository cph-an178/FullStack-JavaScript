function say_hello(f_name: string, l_name: string, role?: string) {
    let response = `Hello ${f_name} ${l_name}`;
    response += (role) ? `, your role is: ${role}`: '';
    console.log(response);
}
/*
say_hello('Kurt', 'Wonnegut', 'Janitor')
say_hello('Jimmy', 'Jensen')
*/

class Person {
    private f_name:string;
    constructor(f_name: string, private l_name:string) {
        this.f_name = f_name;
        this.l_name = l_name;
    }
    say_hello_v1() {
        const self = this;
        setTimeout(function() {
            console.log(`Hi ${self.f_name}`);
        })
    }
    say_hello_v2() {
        setTimeout(() => {
            console.log(`Hi ${this.f_name}`);
        })
    }
}

let p1 = new Person('Kurt', 'Woeengut');
p1.say_hello_v1();
p1.say_hello_v2();

export {}