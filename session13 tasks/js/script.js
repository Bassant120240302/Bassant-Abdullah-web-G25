// var courses=["java","css","html","bootstrap"]
// var p=prompt('Enter course name')
// var search=courses.findIndex((ele)=>ele===p)
// if(search !== -1){
//     console.log('found')
// }
// else{
//     courses.push(p)
//     console.log(courses)
// }

// var users=[
//     {
//         name:"Basant",
//         job: "Engineer",
//         age: 19
//     },
//     {
//         name:"Malak",
//         job:"student",
//         age:15
//     },
//     {
//         name:"Nancy",
//         job:"Doctor",
//         age:23
//     }

// ]
// var i = users.findIndex((ele)=>{
//     return ele.age==23
// })

// console.log(i)



// Bank System Task //
var Users=[]
function add_user() {
  var name = prompt('User Name')
  var id = prompt('User ID')
  var balance = prompt('User Balance')

  var usersInfo = {
    user_name: name,
    user_id: id,
    user_balance: balance,
  }
  Users.push(usersInfo)
}

function edit_user() {
  var searchId = prompt('Enter User Id To Edit')
  var userIndex = Users.findIndex(function(user) {
    return user.user_id === searchId;
  })
  if (userIndex !== -1) {
    var userToEdit = Users[userIndex]
    var newBalance = prompt('Enter the new balance:')
    userToEdit.user_balance = newBalance;
    console.log(userToEdit)}
    else{
         console.log('user not found')
    }
}
function delete_user(){
    var searchId = prompt('Enter User Id To delete')
     var userIndex = Users.findIndex(function(user) {
    return user.user_id === searchId;
  })
  if (userIndex !== -1) {
    Users.splice(userIndex);
    console.log('deleted')
  }
    else{
         console.log('user not found')
    }


}

var usersNum=prompt('Enter the number of users')
for(var i=1; i<=usersNum;i++){
    add_user()
}

console.log('users before edit:',Users)
 edit_user()
 console.log('users after edit',Users)
 delete_user()
 console.log(Users)