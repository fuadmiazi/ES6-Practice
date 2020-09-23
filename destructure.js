const person = {name: 'Fuad Hasan', age: 22, job: 'gaming', address: 'Kakrail', phone: '01986064381', friends: ['Not Found', 'NaN', 'Error 404']}

const {phone} = person;

const complexObject = {
    name: 'Kuddus',
    info: {
        address: 'Kakrail',
        leader : 'Shuor Khan'
    }
}

const {leader} = complexObject.info;
// const fullName = person.name;
// // const phone = person.phone;

// console.log(name, phone, job, address, salary);
// console.log(fullName, phone);
// console.log(fullName, phone);
// console.log(fullName, phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, ...restFriend] = friends;
console.log(restFriend);