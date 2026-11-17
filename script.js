
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// スマホメニュー
menu.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menu.textContent = isOpen ? "×" : "☰";
  menu.setAttribute("aria-expanded", String(isOpen));
});

// メニューを押したら閉じる
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.textContent = "☰";
    menu.setAttribute("aria-expanded", "false");
  });
});
