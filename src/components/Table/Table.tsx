import styles from "./Table.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { deleteUser } from "../../store/userSlice";
import { TableProps } from "../../types";

const Table = ({ onEdit }: TableProps) => {


  const users = useSelector((state: RootState) => state.users.users);
  
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteUser = (userId:number) => {
     dispatch(deleteUser(userId));
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td><button className={styles.editButton} onClick={()=>onEdit(row)}>Editar</button>
              <button className={styles.deleteButton} onClick={()=>handleDeleteUser(row.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
