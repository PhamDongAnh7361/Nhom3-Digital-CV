// Hiển thị avatar khi chọn ảnh
document.getElementById("avatar-upload").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById("avatar").src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Hiệu ứng scroll
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  });
  