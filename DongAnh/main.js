// Lấy phần tử chứa các liên kết menu trong navbar
const menu = document.querySelector(".navbar__links");

// Lấy phần tử nút menu (icon 3 gạch)
const menuButton = document.querySelector(".navbar__icons");

// Lấy phần tử overlay (lớp phủ khi mở menu trên mobile)
const overlay = document.querySelector("#overlay");

// Khi người dùng click vào nút menu
menuButton.addEventListener("click", () => {
  // Toggle (bật/tắt) lớp 'navbar__open' để hiển thị hoặc ẩn menu
  menu.classList.toggle("navbar__open");

  // Toggle lớp 'open' cho nút menu để đổi icon nếu cần
  menuButton.classList.toggle("open");

  // Toggle lớp 'show' cho overlay để hiển thị lớp phủ đen phía sau menu
  overlay.classList.toggle("show");
});

// Khi người dùng click vào overlay (lớp phủ nền mờ)
overlay.addEventListener("click", () => {
  // Đóng menu bằng cách loại bỏ các lớp hiển thị
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

// Khi người dùng click vào một liên kết trong menu, cũng đóng menu lại (dành cho mobile)
document.querySelectorAll('.navbar__links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('navbar__open');
    menuButton.classList.remove('open');
    overlay.classList.remove('show');
  });
});

// Lấy phần tử nút "Back to Top"
const backToTop = document.getElementById("backToTop");

// Lắng nghe sự kiện cuộn trang (scroll)
window.addEventListener("scroll", () => {
  // Nếu người dùng cuộn xuống hơn 300px, hiển thị nút
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    // Nếu ở đầu trang, ẩn nút
    backToTop.style.display = "none";
  }
});

// Khi người dùng click vào nút "Back to Top"
backToTop.addEventListener("click", () => {
  // Cuộn mượt về đầu trang
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
