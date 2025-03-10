import styles from "./Table.module.css";
import { TableProps} from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const Table = ({ onEdit }: TableProps) => {

  const users = useSelector((state: RootState) => state.users.users);

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
              <button className={styles.deleteButton} onClick={()=>onDelete(row.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
