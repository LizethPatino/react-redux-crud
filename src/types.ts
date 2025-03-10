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
  editingUser: User | null;
}  

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export interface TableProps {
  onEdit: (user: User) => void;
}