import { render } from "@testing-library/react";
import {screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de GifItem', () => {

    const title='Link';
    const url='http://zeldaTerasOfTheKingdom/link.jpg';

    test('debe de hacer mach con el snapshot', () => {
        
        const {container}=render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('',()=>{
        render(<GifItem title={title} url={url} />);
        expect(screen.getByRole('img').src).toBe(url.toLowerCase());
    });
});