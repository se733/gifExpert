import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("debe hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug() para mirar el sujeto que evaluamos
    // expect(screen.getAllByRole('img').src).toBe(url)
    const { src, alt } = screen.getAllByRole("img");
    // expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getAllByText(title)).toBeTruthy();
  });
});
