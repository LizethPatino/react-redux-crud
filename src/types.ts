export interface User {
    id: number;
    name: string;
    email: string;
  }
  
export interface FormData {
  name: string;
  email: string;
}

export interface FormProps {
  onAddUser: ( user:User) => void;
  editingUser: User | null;
}  

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export interface TableProps {
  data: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}