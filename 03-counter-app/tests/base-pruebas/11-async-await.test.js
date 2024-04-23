import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba de 11-async-await", () => {
  test("getImagen debe de retornar un url", async () => {
    const url = await getImagen();
    console.log("hola", url);
    expect(typeof url).toBe(`string`);
  });
  test("getImagen debe de retornar un error", async () => {
    const url = await getImagen();
    console.log("hola", url);
    expect(url).toBe(`No se encontro la imagen`);
  });
});
