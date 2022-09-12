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