import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () =>{

    const category= 'Zelda';

    test('Debe mostrar el loading inicialmente', ()=> {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        //screen.debug();
    });

    test('Debe de mostrar items cuando se cargan las imágenes', async() =>{
        const gifs=[
            {
                id: 'ABC',
                title: 'ABC',
                url: 'ABC'
            },
            {
                id: 'ABCD',
                title: 'ABCD',
                url: 'ABCD'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    });
});