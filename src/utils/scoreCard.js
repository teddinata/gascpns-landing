const W = 1080;
const H = 1350;
const INK = "#0b0707";
const PAPER = "#f5f8fa";
const CYAN = "#0ba7e3";
const BLUE = "#0066cc";
const GOLD = "#ffd700";
const NAVY = "#293149";

const roundRect = (ctx, x, y, w, h, r) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

const block = (ctx, x, y, w, h, r, fill, shadow = 12) => {
  if (shadow) {
    ctx.fillStyle = INK;
    roundRect(ctx, x + shadow, y + shadow, w, h, r);
    ctx.fill();
  }
  ctx.fillStyle = fill;
  roundRect(ctx, x, y, w, h, r);
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = INK;
  ctx.stroke();
};

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

// Draws a 1080x1350 (IG portrait) score card and resolves to a PNG blob.
export async function renderScoreCard({ score, max, time, budget, results }) {
  if (document.fonts && document.fonts.load) {
    await Promise.all([
      document.fonts.load('800 120px "Archivo"'),
      document.fonts.load('600 40px "Archivo"'),
      document.fonts.load('700 60px "JetBrains Mono"', "0123456789/+:"),
    ]).catch(() => {});
  }

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = CYAN;
  ctx.fillRect(0, 0, W, 300);
  ctx.fillStyle = INK;
  ctx.fillRect(0, 300, W, 6);

  const logo = await loadImage("/logo-gascpns-putih-480.png");
  if (logo) ctx.drawImage(logo, 80, 80, 280, 80);

  ctx.fillStyle = INK;
  ctx.font = '800 64px "Archivo", sans-serif';
  ctx.fillText("Skor Simulasi Kilat CAT", 80, 250);

  block(ctx, 80, 380, 920, 520, 36, "#ffffff");

  ctx.fillStyle = INK;
  ctx.font = '600 40px "Archivo", sans-serif';
  ctx.fillText("3 soal: TWK, TIU, TKP", 140, 480);
  ctx.font = '800 64px "Archivo", sans-serif';
  ctx.fillText("Satu soal,", 140, 610);
  ctx.fillText("54 detik.", 140, 685);
  ctx.font = '600 38px "Archivo", sans-serif';
  ctx.fillText(`Waktu ${time}`, 140, 790);
  ctx.fillText(`dari jatah ${budget}`, 140, 840);

  // Score stamp, same mark as the result screen.
  ctx.save();
  ctx.translate(770, 640);
  ctx.rotate((-8 * Math.PI) / 180);
  ctx.strokeStyle = BLUE;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(0, 0, 165, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, 142, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = BLUE;
  ctx.textAlign = "center";
  ctx.font = '800 34px "Archivo", sans-serif';
  ctx.fillText("SKOR", 0, -62);
  ctx.textAlign = "left";
  ctx.font = '700 120px "JetBrains Mono", monospace';
  const bigW = ctx.measureText(`${score}`).width;
  ctx.font = '700 42px "JetBrains Mono", monospace';
  const smallW = ctx.measureText(`/${max}`).width;
  const startX = -(bigW + 4 + smallW) / 2;
  ctx.font = '700 120px "JetBrains Mono", monospace';
  ctx.fillText(`${score}`, startX, 58);
  ctx.font = '700 42px "JetBrains Mono", monospace';
  ctx.fillText(`/${max}`, startX + bigW + 4, 58);
  ctx.restore();

  const TONES = { TWK: [BLUE, "#ffffff"], TIU: [CYAN, INK], TKP: [GOLD, INK] };
  results.forEach((r, i) => {
    const x = 140 + i * 280;
    const y = 960;
    const [fill, text] = TONES[r.label] || ["#ffffff", INK];
    block(ctx, x, y, 240, 150, 24, fill, 8);
    ctx.fillStyle = text;
    ctx.font = '800 44px "Archivo", sans-serif';
    ctx.fillText(r.label, x + 28, y + 64);
    ctx.font = '700 40px "JetBrains Mono", monospace';
    ctx.fillText(`+${r.points}`, x + 28, y + 120);
  });

  ctx.fillStyle = NAVY;
  ctx.fillRect(0, H - 150, W, 150);
  ctx.fillStyle = "#ffffff";
  ctx.font = '800 46px "Archivo", sans-serif';
  ctx.fillText("Berani coba? gascpns.id", 80, H - 62);
  ctx.fillStyle = GOLD;
  ctx.fillRect(80, H - 40, 300, 8);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}
