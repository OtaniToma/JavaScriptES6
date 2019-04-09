var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin === true;
});

admin;

// 回答例
// var admin = users.find(function(user) {
//   return user.admin;
// });
