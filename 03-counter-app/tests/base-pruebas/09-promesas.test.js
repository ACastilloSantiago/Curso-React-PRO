import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas de 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un héroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe obtener un error", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        console.log(error);
        expect(error).toBe("No se pudo encontrar el héroe 100");

        done();
      });
  });
});
