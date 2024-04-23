/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas de <FirstApp /> ", () => {
  // test("debe de hacer match con el snapshot", () => {
  //   const title = "Hola, soy Goku";
  //   const { container } = render(<FirstApp title={title} />);
  //   // console.log(container);
  //   expect(container).toMatchSnapshot();
  // });
  test("debe de mostrar el titulo en un h1 ", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
    //! Con toContain solo comprobamos que lo contenga, en cambio con toBe comprueba que sea exacto
  });
  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getByText } = render(
      <FirstApp subTitle={subTitle} title={title} />
    );
    // console.log(container);
    expect(getByText(subTitle)).toBeTruthy();
  });
});
