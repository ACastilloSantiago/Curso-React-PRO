/**
 * @jest-environment jsdom
 */
import CounterApp from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <CounterApp/>", () => {
  const initialValue = 100;
  test("Debe de hacer match con el snapshot ", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar el valor inicial de 100 <CounterApp value{100}/> ", () => {
    render(<CounterApp value={initialValue} />);

    //   ! Distintas maneras de comprobar
    expect(screen.getByText(initialValue).innerHTML).toContain("100");
    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });
  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });
  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    // !screen.debug(); Asi podemos ver como se esta renderizando el componente en consola
    expect(screen.getByText("99")).toBeTruthy();
  });
  test("debe de hacer reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // !Una manera es la que esta abajo, pero no es muy efectiva por que contempla que dentro del boton si o si diga reset para seleccionarlo. Osea una manera no tan especifica.
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    // screen.debug();

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
