import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: { data: [] } }),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("hero quiz, calculator, and lead form work end to end", async () => {
  render(<App />);

  expect(
    await screen.findByText(/Daftar sekarang, dapatkan akses tryout gratis/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1, name: /54 detik/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Mulai soal 1/i }));
  fireEvent.click(screen.getByRole("button", { name: /Menolak penawaran tersebut secara objektif/i }));
  expect(screen.getByText(/Pembahasan singkat/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Soal berikutnya/i }));
  fireEvent.click(screen.getByRole("button", { name: /^C Sebagian pendaftar instansi pusat wajib/i }));
  fireEvent.click(screen.getByRole("button", { name: /Soal berikutnya/i }));
  fireEvent.click(screen.getByRole("button", { name: /^B Menjelaskan kondisi gangguan/i }));
  fireEvent.click(screen.getByRole("button", { name: /Lihat skor/i }));
  expect(screen.getByText(/Insting CAT kamu tajam/i)).toBeInTheDocument();

  const pemda = screen.getByRole("button", { name: /Pemprov \/ pemkab/i });
  fireEvent.click(pemda);
  expect(pemda).toHaveAttribute("aria-pressed", "true");

  const submit = screen.getByRole("button", { name: /Lanjut ke WhatsApp admin/i });
  fireEvent.click(submit);
  expect(screen.getByText(/Tulis nama lengkap, minimal 2 huruf/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Nama lengkap/i), { target: { value: "Rizky Pratama" } });
  fireEvent.change(screen.getByLabelText(/Nomor WhatsApp/i), { target: { value: "081234567890" } });
  fireEvent.click(submit);
  expect(screen.getByText(/Satu langkah lagi, Rizky Pratama/i)).toBeInTheDocument();
});
