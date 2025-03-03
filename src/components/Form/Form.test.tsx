import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import Form from './Form';

describe('Form Component', () => {
    test('should render the form', () => {
        render(<Form/>);

        expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        expect(screen.getByRole('button',{ name: 'Guardar'})).toBeInTheDocument();
    });

    test('should allow write in the inputs', () => {
        render(<Form/>);

        const nameInput = screen.getByLabelText('Nombre:');
        const emailInput = screen.getByLabelText('Email:');
        
        fireEvent.change(nameInput, {target : {value: 'Dante Patico'}});
        fireEvent.change(emailInput, {target : {value: 'Dante@outlook.com'}});

        expect(nameInput).toHaveValue('Dante Patico');
        expect(emailInput).toHaveValue('Dante@outlook.com');
    });

    test('should send the form and reset it', async() => {
        render(<Form/>);

        const nameInput = screen.getByLabelText('Nombre:');
        const emailInput = screen.getByLabelText('Email:');
        const ButtonForm = screen.getByRole('button',{name: 'Guardar'});
        
        fireEvent.change(nameInput, {target : {value: 'Dante Patico'}});
        fireEvent.change(emailInput, {target : {value: 'Dante@outlook.com'}});
        fireEvent.click(ButtonForm);

        await waitFor(() => {
            expect(nameInput).toHaveValue(""); 
            expect(emailInput).toHaveValue("");
          });
    });

    test("muestra mensajes de error cuando los inputs son inválidos", async () => {
        render(<Form />);

        fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: "a" } }); 
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "correo_invalido" } });
    
        fireEvent.submit(screen.getByRole("form"));

        await waitFor(() => {
            expect(screen.getByText(/mínimo 3 caracteres/i)).toBeInTheDocument();
            expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
        });
    });
})