import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import  { Input } from '../Input';
import {  useRef } from 'react';
import { Modal } from '../Modal';
import { FormHandles } from '@unform/core';



interface EditFood { 
    image: string;
    name: string;
    price: string;
    description: string
}

interface TypeFood {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: EditFood) => void;
  editingFood: TypeFood;
}

export function ModalEditFood({handleUpdateFood, setIsOpen, isOpen, editingFood }: ModalEditFoodProps) {
  
  const handleSubmit = async (data: EditFood) => {

    handleUpdateFood(data);
    setIsOpen();
  };
  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

