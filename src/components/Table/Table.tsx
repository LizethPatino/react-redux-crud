import styles from "./Table.module.css";
import { User } from "../../types";

interface TableProps {
  data: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const Table = ({ data, onDelete, onEdit }: TableProps) => {
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
          {data.map((row) => (
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
