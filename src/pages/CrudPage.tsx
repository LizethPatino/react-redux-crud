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

    const handleEditUser = (editableUser: User) => {
        setEditingUser(editableUser);
        setShowModal(true);
      };

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
            <Table onEdit={handleEditUser} ></Table>
            <button className={styles.add__button} onClick={() => {
    setEditingUser(null);
    setShowModal(true);
  }}>Agregar Usuario</button>
        </div>
    );
}

export default CrudPage;