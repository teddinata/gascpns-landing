import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import FreeTryoutComp from "./FreeTryoutComp";

const mockFeed = (list) => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ data: { data: list } }) }));
};

afterEach(() => {
  jest.resetAllMocks();
  document.cookie = "gascpns_hint=; max-age=0; path=/";
});

const free = { id: 2, name: "SKD HOTS 2027 Paket 01: Pelayanan Kependudukan", total_question: 110, total_duration: 100, cover_path: "https://api.gascpns.id/storage/package_cover/a.png" };

test("shows the free tryout hook with a sign-up link for visitors", async () => {
  mockFeed([free]);
  render(<FreeTryoutComp />);
  expect(await screen.findByText(/satu tryout SKD lengkap/)).toBeInTheDocument();
  expect(screen.getByText(/Paket 01: Pelayanan Kependudukan: 110 soal HOTS dalam 100 menit/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Daftar dan klaim gratis" })).toHaveAttribute("href", expect.stringContaining("app.gascpns.id/register"));
  expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining("type=free"));
});

test("a signed-in visitor goes straight to the free tryouts", async () => {
  document.cookie = `gascpns_hint=${encodeURIComponent(JSON.stringify({ n: "Rina", r: "user" }))}; path=/`;
  mockFeed([free]);
  render(<FreeTryoutComp />);
  expect(await screen.findByRole("link", { name: "Kerjakan tryout gratis" })).toHaveAttribute("href", expect.stringContaining("/member/latihan-soal"));
});

test("renders nothing when no free package is open", async () => {
  mockFeed([]);
  const { container } = render(<FreeTryoutComp />);
  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  expect(container).toBeEmptyDOMElement();
});
