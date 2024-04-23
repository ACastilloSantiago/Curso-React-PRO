import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj debe retornar un objeto", () => {
  test("usContext ", () => {
    const clave = "Sattog";
    const edad = 23;
    const user = usContext({ clave, edad });
    expect(user).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
