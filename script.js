// ===== Rock Star ⭐ Store Script =====

// Add to Cart Buttons
const addButtons = document.querySelectorAll(".add-cart");
addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    alert(🛒 ${name} added to your cart!);
  });
});

// Buy Now Buttons
const buyButtons = document.querySelectorAll(".buy-now");
buyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    alert(✅ You purchased "${name}" successfully! Thank you for shopping at Rock Star ⭐);
  });
});

// Navbar Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Floating Message Animation
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// Optional Example (you can trigger it anywhere)
showToast("🎉 Welcome to Rock Star ⭐ Store!");
