import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba de getGifs()',()=>{
    test('debe retornar un arreglo de gifs', async () => {
        const gifs=await getGifs('Zelda');
        const long=gifs.length;
        expect(long).toBeGreaterThan(0);
        for(let i=0;i<long;i++){
            expect(gifs[i].title).not.toBeUndefined();
            expect(gifs[i].url).not.toBeUndefined();
            expect(gifs[i].id).not.toBeUndefined();
        }
        
    });
});