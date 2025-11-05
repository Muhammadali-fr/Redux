export default async function getUsers(prop: number) {
    console.log(prop)
    return await fetch(`https://jsonplaceholder.typicode.com/users/${prop}`).then(data => data.json());
};