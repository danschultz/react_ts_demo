import * as geom from './geom';
import * as logging from './logging';

type Maybe<T> = T | void;
type Person = {firstName: string, lastName: string};

let nums = [1, 2, 3];
let strings = nums.map((num) => num.toString());

function greet(person: Person): string {
  return `Hi ${person.firstName}`;
}

logging.log(1);

let pt = new geom.Point(1, 2);
logging.log(pt.toString());
