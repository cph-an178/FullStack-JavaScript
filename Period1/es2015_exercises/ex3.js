// A
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    // const me = this; ES5 way
    this.nums.forEach(v => {
        if (v % 5 === 0) {
            this.fives.push(v); // Change this. to me.
        }
    });
}
let numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
// console.log(numbers.fives);

// B
var counter = {
    count: 0,
    inc: () => {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

// It makes it worse because it doesnt count upwards. 