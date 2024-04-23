import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Prueba 08-imp-exp", () => {
  test("getHeroByid debe retornar un heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroByid debe retornar undefined si no existe id", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
    //!! Esta es una manera corta de probar si el valor es NULL,UNDEFINED O FALSE
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar 3 heros DC", () => {
    const owner = "DC";
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(3);
    expect(heros).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },

      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
    //!! De esta manera es mas escalable ya que comparamos con la funcionalidad de la funcion, no los heroes que hay
    expect(heros).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
  test("getHeroesByOwner debe retornar 2 heros Marvel", () => {
    const owner = "Marvel";
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(2);
    expect(heros).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },

      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);

    //!! De esta manera es mas escalable ya que comparamos con la funcionalidad de la funcion, no los heroes que hay
    expect(heros).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
