// ===== 1. CUỘN MƯỢT KHI BẤM VÀO MENU =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== 2. NÚT LÊN ĐẦU TRANG =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollToTop";
scrollBtn.title = "Lên đầu trang";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--blue);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  font-size: 20px;
  z-index: 999;
  box-shadow: 0 0 10px var(--accent);
`;

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// HIỆU ỨNG FADE TỪNG KÝ TỰ CHO DÒNG CHÀO
const introHeading = document.querySelector(".intro h1");
const text = "Xin chào, tôi Phan Minh Hưng";

introHeading.innerHTML = ""; // Xóa ban đầu

[...text].forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.opacity = 0;
  span.style.transition = `opacity 0.3s ease ${index * 50}ms`;
  introHeading.appendChild(span);
});

setTimeout(() => {
  document.querySelectorAll(".intro h1 span").forEach(span => {
    span.style.opacity = 1;
  });
}, 100);


// ===== 4. HIỆN DẦN KHI CUỘN (Intersection Observer) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section, footer").forEach(el => {
  observer.observe(el);
});
