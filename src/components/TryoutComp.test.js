import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TryoutComp from "./TryoutComp";

const mockFeed = (list) => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ data: { data: list } }) }));
};

afterEach(() => jest.resetAllMocks());

test("published bundles are promoted above single packages", async () => {
  mockFeed([
    { id: 1, name: "Paket Satuan", price: 29000, discount: null, is_bundle: false },
    {
      id: 2, name: "Bundle Formasi Guru", slug: "bundle-formasi-guru", price: 79000, discount: null, is_bundle: true,
      bundle_items_count: 4, bundle_normal_price: 116000, bundle_saving: 37000,
      bundle_items: [{ id: 11, name: "Paket A" }, { id: 12, name: "Paket B" }, { id: 13, name: "Paket C" }, { id: 14, name: "Paket D" }, { id: 15, name: "Paket E" }],
    },
  ]);
  render(<TryoutComp />);
  expect(await screen.findByText("Bundle hemat")).toBeInTheDocument();
  expect(screen.getByText("Bundle · 4 paket")).toBeInTheDocument();
  expect(screen.getByText(/Hemat Rp\s?37\.000/)).toBeInTheDocument();
  expect(screen.getByText("dan 1 paket lainnya")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Lihat isi bundle/ })).toHaveAttribute("href", expect.stringContaining("/member/paket/detail/bundle-formasi-guru"));
  expect(screen.getByText("Paket Satuan")).toBeInTheDocument();
});

test("no bundle block when nothing is published", async () => {
  mockFeed([{ id: 1, name: "Paket Satuan", price: 29000, is_bundle: false }]);
  render(<TryoutComp />);
  expect(await screen.findByText("Paket Satuan")).toBeInTheDocument();
  expect(screen.queryByText("Bundle hemat")).not.toBeInTheDocument();
});

test("the biggest bundle is featured and singles stop at six with a link to the rest", async () => {
  const singles = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, name: `Paket ${i + 1}`, slug: `paket-${i + 1}`, price: 29000, is_bundle: false }));
  mockFeed([
    ...singles,
    { id: 20, name: "Bundle Kecil", slug: "bundle-kecil", price: 79000, is_bundle: true, bundle_items_count: 4, bundle_normal_price: 116000, bundle_saving: 37000, bundle_items: [] },
    { id: 21, name: "Bundle Ultimate", slug: "bundle-ultimate", price: 199000, is_bundle: true, bundle_items_count: 15, bundle_normal_price: 406000, bundle_saving: 207000, bundle_items: [] },
  ]);
  render(<TryoutComp />);
  expect(await screen.findByText("Paling hemat")).toBeInTheDocument();
  const featured = screen.getByText("Paling hemat").closest("li");
  expect(featured).toHaveTextContent("Bundle Ultimate");
  expect(screen.getByText(/hemat sampai Rp\s?207\.000/)).toBeInTheDocument();
  expect(screen.getByText("Paket 6")).toBeInTheDocument();
  expect(screen.queryByText("Paket 7")).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Lihat semua 8 paket di aplikasi" })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /Ambil paket ini/ })[0]).toHaveAttribute("href", expect.stringContaining("/member/paket/detail/paket-1"));
});
