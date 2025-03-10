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

    const [editingUser, setEditingUser] = useState<User | null>(null);  

    const handleDeleteUser = (userId: number) => {
        setUsers(users.filter( user => user.id !==userId));
    } 

    const handleSaveUser = (newUser: User) => {
       if(editingUser){
        setUsers(((prevUsers) =>
             prevUsers.map( user=> ( user.id===editingUser.id ? newUser: user))));
       }else{
        setUsers([...users, {...newUser}]);
       }
       setShowModal(false);
       setEditingUser(null);
    }

    const handleEditUser = (editableUser: User) => {
        setShowModal(true);
        setEditingUser(editableUser);

    }

    return (
        <div>
            <h1>CRUD de usuarios</h1>
            {
                showModal && (
                   <Modal onClose={()=>{setShowModal(false)}}>
                         <Form onAddUser={handleSaveUser} editingUser={editingUser}></Form>
                   </Modal> 
                )
            }
            <Table data={users} onDelete={handleDeleteUser} onEdit={handleEditUser}></Table>
            <button className={styles.add__button} onClick={()=>{setShowModal(true)}}>Agregar Usuario</button>
        </div>
    );
}

export default CrudPage;