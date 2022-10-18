import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "one punch";

  test("debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    // expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    screen.debug();
  });

  test("debe mostrar items cuando se cargan las imagenes", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "CBA",
        title: "Goku",
        url: "https://localhost/saitama.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
    expect(screen.getAllByText('')).toBeTruthy();

});
});
