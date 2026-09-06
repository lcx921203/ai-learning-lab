const toast = document.getElementById("toast");
let timer;
document.querySelectorAll("[data-tip]").forEach((el) => {
  el.addEventListener("click", () => {
    clearTimeout(timer);
    toast.textContent = el.dataset.tip || "已点击";
    toast.classList.add("show");
    timer = setTimeout(() => toast.classList.remove("show"), 1200);
  });
});
