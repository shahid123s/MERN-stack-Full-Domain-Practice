// Give me an example for switch 

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

switch (x) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    default:
        console.log('Invalid day');
        break;
}



// Optional chaining (?.) an nullish operators / nullish coalescing (??)

const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};

const street = user?.address?.street;

let name = user?.name ?? 'Anonymous';
