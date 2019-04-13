// every
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted === true;
});

hasSubmitted;



// some
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
  return request.status === 'pending';
});

inProgress;



// reduce
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === '(') { return previous + 1; }
    if (char === ')') { return previous - 1; }
  }, 0); 
}
balancedParens('((()))'); // true
balancedParens('((())'); // false
balancedParens(')('); // false


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var totalDistance = trips.reduce(function(sum, trip) {
    return sum + trip.distance;
}, 0);
totalDistance;

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var deskTypes = desks.reduce(function(sum, desk) {
    if (desk.type === 'sitting') {
      sum.sitting++;
    } else {
      sum.standing++;
    }
  return sum;
}, { sitting: 0, standing: 0 });
deskTypes;
