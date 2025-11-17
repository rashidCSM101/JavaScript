// const myArray = [1,4,6,8,9,5,4,2]
// const squareArray = myArray.map((myArrayValues)=>{
// //  console.log(myArrayValues * myArrayValues);
//     return (myArrayValues * myArrayValues);
// });
// console.log(squareArray);
const apiData = [
    { id: 1, user_name: "ahmed_khan", created_at: "2025-01-01" },
    { id: 2, user_name: "ali_ahmed", created_at: "2025-01-02" }
];

const cleanData = apiData.map(item => ({
    id: item.id,
    username: item.user_name,
    createdAt: new Date(item.created_at)
}));
console.log(cleanData);