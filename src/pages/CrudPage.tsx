import { useEffect, useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Modal from "../components/Modal";
import styles from "./CrudPage.module.css";
import { User } from "../types";
import fetchUsers  from "../services/userService";
import { useDispatch } from "react-redux";
import { AppDispatch} from "../store";
import { setUsers } from "../store/userSlice";

const CrudPage = () =>{

    const dispatch = useDispatch<AppDispatch>();

    const [ showModal, setShowModal] = useState<boolean>(false);

    const [editingUser, setEditingUser] = useState<User | null>(null);  

    useEffect(()=>{
        const loadUsers = async () =>{
            const data = await fetchUsers();
            if (data) dispatch(setUsers(data));
        } 
       loadUsers();
    },[dispatch])


   /* const handleDeleteUser = (userId: number) => {
        setUsers(users.filter( user => user.id !==userId));
    } */

   /* const handleSaveUser = (newUser: User) => {
       if(editingUser){
        setUsers(((prevUsers) =>
             prevUsers.map( user=> ( user.id===editingUser.id ? newUser: user))));
       }else{
        setUsers([...users, {...newUser}]);
       }
       setShowModal(false);
       setEditingUser(null);
    }*/

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
                         <Form editingUser={editingUser}></Form>
                   </Modal> 
                )
            }
            <Table onEdit={handleEditUser}></Table>
            <button className={styles.add__button} onClick={()=>{setShowModal(true)}}>Agregar Usuario</button>
        </div>
    );
}

export default CrudPage;