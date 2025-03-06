import styles from "./Table.module.css";

interface User {
  id: number;
  name: string;
  email: string;
}

interface TableProps {
  data: User[];
  onDelete: (id: number) => void;
}

const Table = ({ data, onDelete }: TableProps) => {
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
              <td><button className={styles.deleteButton} onClick={()=>onDelete(row.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
