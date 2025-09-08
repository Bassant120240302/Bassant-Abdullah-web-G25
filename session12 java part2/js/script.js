
// function looping(a, b, c, d) {
//     if (a == undefined || b == undefined || c == undefined || d == undefined) console.log('enter the four nums')
//     else {
//         for (var i = a; i < b; i++) {
//             if (i == c) continue
//             else if (i == d) break
//             console.log(i)
//         }

//     }
// }
// looping(4 , 20 , 7, 15)
// console.log('')
// looping(4,7)
// looping(0, 3,1,2)

var courses=["html", "js" ,"python"]
var search=prompt("Enter your course")
if(courses.includes(search)){
 console.log('found')
}
else courses.push(search)
console.log(courses)