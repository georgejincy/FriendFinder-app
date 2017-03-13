// ===============================================================================
// DATA
// Below data will hold all friends.
// ===============================================================================

var friendsArray = [
  {
  "name":"Gugu",
  "photo":"images/gugu.jpg",
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
  "photo":"images/rufus.jpg",
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
  "photo":"images/jenelle.jpg",
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
