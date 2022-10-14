import {getGifs} from '../../src/helpers/getGifs'

describe("Pruebas en getGifs", () => {
  test("Debe retornar un arreglo de Gifs", async() => {
     const gifs = await getGifs('one punch')

     expect(gifs.length).toBeGreaterThan(0)
     expect(gifs[0]).toEqual({
        id: expect.any(String), 
        url: expect.any(String),
        title: expect.any(String)
     })
    });
});
