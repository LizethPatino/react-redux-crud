import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

interface User {
    id: number;
    name: string;
    email: string;
  }

const CrudPage = () =>{
    const [users, setUsers]= useState<User[]>([
        { id: 1, name: "Juan Pérez", email: "juan@example.com" },
        { id: 2, name: "Ana López", email: "ana@example.com" },
        { id: 3, name: "Carlos Ruiz", email: "carlos@example.com" },
        { id: 4, name: "Dante Patico", email: "dante@example.com" },
        { id: 5, name: "Sasha Patico", email: "Sasha@example.com" },
      ]);

    const handleDeleteUser = (userId: number) => {
        setUsers(users.filter( user => user.id !==userId));
    } 

    return (
        <div>
            <h1>CRUD de usuarios</h1>
             <Form></Form>
             <Table data={users} onDelete={handleDeleteUser}></Table>
        </div>
    );
}

export default CrudPage;