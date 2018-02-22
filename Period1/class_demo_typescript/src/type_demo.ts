let is_done: boolean = true;  // let scope is nears
is_done = false;

let count: number = 1;
count += 1;

let user: string = "Kurt Wonnegut";
user = "Simon Voulgh";

let msg = `********************
    Hi ${user} welcome back
********************`;

let numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
let numbers2: Array<number> = [];
numbers2.push(2);

let number_string: any = 1;
number_string + "5";

function log_info(info: any): void {
    console.log(info);
}
log_info(msg);

let skill = 0;

enum skills {Low, Medium, High, Expert};

if (skill === skills.Medium){
    //do something
}
if (skill === skills.Expert){
    //do something else
}

let tuple_list: Array<[string, number]>;
tuple_list = [["Name",35]];