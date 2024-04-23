describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe de fallar", () => {
    // 1. Inicialización
    const message = "Hola mundo";
    // 2. Estimulo
    const message2 = message.trim();
    // 3. Observar el comportamiento... esperado
    expect(message).toBe(message2);
  });
});
