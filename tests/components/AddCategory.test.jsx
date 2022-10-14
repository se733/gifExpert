const { render,screen } = require("@testing-library/react");
const { AddCategory } = require("../../src/components/AddCategory");

describe("Pruebas en AddCategory", () => {
  test("Debe cambiar el valor en la caja de texto", () => {
    render(<AddCategory onNewCategory={ () => {} }/>)
    
    // screen.debug()
  });
});
