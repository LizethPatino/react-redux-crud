import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Modal from "../components/Modal";
import styles from "./CrudPage.module.css";
import { User } from "../types";

const CrudPage = () =>{

    const [ showModal, setShowModal] = useState<boolean>(false);

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

    const handleAddUser = (newUser: User) => {
        setUsers([...users, {...newUser}]);
        setShowModal(false);
    }

    return (
        <div>
            <h1>CRUD de usuarios</h1>
            {
                showModal && (
                   <Modal onClose={()=>{setShowModal(false)}}>
                         <Form onAddUser={handleAddUser}></Form>
                   </Modal> 
                )
            }
            <Table data={users} onDelete={handleDeleteUser}></Table>
            <button className={styles.add__button} onClick={()=>{setShowModal(true)}}>Agregar Usuario</button>
        </div>
    );
}

export default CrudPage;