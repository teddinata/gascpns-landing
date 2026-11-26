import { readSessionHint, dashboardUrl } from "./sessionHint";

const cookie = (v) => `other=1; gascpns_hint=${encodeURIComponent(JSON.stringify(v))}`;

test("reads the name and role from the shared marker", () => {
  expect(readSessionHint(cookie({ n: "Teddi", r: "user" }))).toEqual({ name: "Teddi", role: "user" });
  expect(dashboardUrl({ role: "admin" })).toBe("https://app.gascpns.id/admin/dashboard");
  expect(dashboardUrl({ role: "user" })).toBe("https://app.gascpns.id/member/dashboard");
});

test("treats a missing, empty or broken marker as signed out", () => {
  expect(readSessionHint("")).toBeNull();
  expect(readSessionHint(cookie({ n: "  " }))).toBeNull();
  expect(readSessionHint("gascpns_hint=%7Bbroken")).toBeNull();
  expect(readSessionHint(cookie({ n: 5 }))).toBeNull();
});
