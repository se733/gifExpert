const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components/AddCategory");

describe("Pruebas en AddCategory", () => {
  test("Debe cambiar el valor en la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "saitama" } });

    expect(input.value).toBe("saitama");
  });

  test("Debe llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "saitama";
    //funcion ficticia de onNewCategory
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    //referencias al input y formulario
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //disparando los eventos
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    //toHaveBeenCalledWith es para que la funcion sea llamada con dicho valor
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar el onNewCategory si el input está vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
