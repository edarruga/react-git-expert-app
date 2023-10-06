import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas de AddCategory',()=>{
    
    test('Debe de cambiar el valor de la caja de texto',()=>{
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input=screen.getByRole('textbox');
        fireEvent.input(input,{target:{value: 'Zelda'} });
        expect(input.value).toBe('Zelda');
    });

    test('Debe de llamar a onNewCategory si el input tiene un valor',()=>{
        const inputValue='Zelda';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input=screen.getByRole('textbox');
        const form=screen.getByRole('form');
        fireEvent.input(input,{target:{value: inputValue} });
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        //screen.debug();

    });

    test('No debe de llamar a onNewCategory si el input está vacio',()=>{
        const inputValue='';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input=screen.getByRole('textbox');
        const form=screen.getByRole('form');
        fireEvent.input(input,{target:{value: inputValue} });
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        //screen.debug();

    });
});