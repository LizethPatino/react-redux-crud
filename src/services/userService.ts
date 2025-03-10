import axios from "axios";

const fetchUsers = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data;
    } catch (error) {
        console.error("Error al obtener usuarios", error); 
    }
}

export default fetchUsers;