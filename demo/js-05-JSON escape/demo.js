// var obj = {
//     a: "abc",
//     b: 123,
//     c: [1, 2, 3]
// };
// var j = JSON.stringify(obj);
// console.log(j);


// var obj2 = {
//     a: 1,
//     b: 2
// };

// var j2 = JSON.stringify(obj2, function (key, value) {
//     if (typeof value === "number") {
//         value = 2 * value;
//     }
//     return value;
// });
// console.log(j2);

// var obj3 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// };
// var j3 = JSON.stringify(obj3, ["d", "c"]);
// console.log(j3);
// var obj4 = {
//     p1: 1,
//     p2: 2
// };
// var j4 = JSON.stringify(obj4, null, 2);
// console.log(j4);


// console.log(JSON.parse('{"a":"b","b":"\\\\"}') );
// var obj = {
//     a: "b",
//     b: "\\",
//     c: {
//         b: "\\",
//         a: {
//             b: "\\"
//         }
//     }
// };
// var json_str = JSON.stringify(obj);
// console.log(JSON.stringify(obj));
// console.dir(JSON.parse(json_str));
// console.dir(JSON.parse('{"a":"b","b":"\\\\","c":{"b":"\\\\","a":{"b":"\\\\"}}}'));