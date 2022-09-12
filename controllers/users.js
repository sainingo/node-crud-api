import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({...user, id: uuidv4()})
    res.send(`User with the name ${user.firstName} added to the db`);
}


export const getUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    res.send(user)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, Age} = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (Age) user.Age = Age
    res.send(`User with id ${id} updated successfull`)
}