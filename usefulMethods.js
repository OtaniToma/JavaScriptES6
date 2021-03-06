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



// const and let
const statuses = [ 
  { code: 'OK', response: '正常に完了しました' },
  { code: 'FAILED', response: 'エラーが発生しました' },
  { code: 'PENDING', response: '処理中です...' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}


// テンプレートリテラル
function doubleMessage(number) {
  return `${number}を2倍すると${2 * number}になります`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}


// アロー関数
// const fibonacci = function(n) {
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(10);



// const profile = {
//     name: '太郎'
// };

const profile = {
    name: '太郎',
    getName: function() {
        return this.name;
    }
};



// オブジェクトリテラル
function createBookShop(inventory) {
  return {
    // inventory: inventory,　キーとバリューが同じ場合は1回でOK
    inventory,
    // inventoryValue: function() {　バリューがfunctionの場合は消してOK
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
	};
}

const inventory = [
  { title: 'Harry Potter', price: 1000 },
  { title: 'JS入門', price: 1500 }
 ];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
'---'
bookShop.priceForTitle('Harry Potter');



function saveFile(url, data) {
  // $.ajax({ method: 'POST', url: url, data: data });
     $.ajax({ 
       url, 
       data,
       method: 'POST'
     });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);



const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };



const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };



const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}



const color = 'red';

// const Car = {
//   color: color,
//   drive: function() {
//     return 'ブーーン!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };

const Car = {
  color,
  drive: () => {
    return 'ブーーン!';
  },
  getColor: () => {
    return color;
  }
};

Car.drive();
Car.getColor();



// 関数のデフォルト引数の設定
function makeAjaxRequest(url, method = 'GET') {
  return method;
}
  
  // ajaxリクエストをするロジックがここにあると想定

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');
makeAjaxRequest('google.com', null); // nullで意図的に空にする
makeAjaxRequest('google.com', undefined); // undefinedならデフォルトに



// function sum(a, b) {
//   if (a === undefined) {
//     a = 0; 
//   }
//   
//   if (b === undefined) {
//     b = 0; 
//   }
//   
//   return a + b;
// }

function sum(a = 0, b = 0) {
  return a + b;
}

sum(1, 2);



// function addOffset(style) {
//   if (!style) {
//    style = {}; 
//   }
//   
//   style.offset = '10px';
//   
//   return style;
// }

function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}

addOffset();


// Rest演算子とSpread演算子
const MathLibrary = {
  calcProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a *b ;
  }
};

MathLibrary.calcProduct(2, 3);
MathLibrary.multiply(2, 3);
