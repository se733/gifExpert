const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components/AddCategory");

describe("Pruebas en AddCategory", () => {
  test("Debe cambiar el valor en la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "saitama" } });

    expect(input.value).toBe("saitama");

    test('Debe llamar onNewCategory si el input tiene un valor')
  });
});
