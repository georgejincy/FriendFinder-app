// ===============================================================================
// DATA
// Below data will hold all friends.
// ===============================================================================

var friendsArray = [
  {
  "name":"Gugu",
  "photo":"https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
  "name":"Rufus",
  "photo":"https://static.pexels.com/photos/119705/pexels-photo-119705.jpeg",
  "scores":[
      4,
      2,
      3,
      3,
      4,
      2,
      1,
      4,
      3,
      1
    ]
},
{
  "name":"Jenelle",
  "photo":"https://static.pexels.com/photos/27411/pexels-photo-27411.jpg",
  "scores":[
      3,
      1,
      3,
      3,
      2,
      2,
      3,
      5,
      4,
      1
    ]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
