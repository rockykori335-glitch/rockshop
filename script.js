// ===== STAR BADAL 🎬 SCRIPT =====

// 👋 Welcome animation
window.addEventListener("load", () => {
  alert("Welcome to 🌟 STAR BADAL – Your Filmy World!");
});

// 🎬 Watch trailer button
const heroBtn = document.querySelector(".hero button");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    window.open("https://www.youtube.com/results?search_query=latest+bollywood+trailers", "_blank");
  });
}

// 💌 Contact form validation
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[name='name']").value.trim();
    const email = contactForm.querySelector("input[name='email']").value.trim();
    const message = contactForm.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !message) {
      alert("⚠ Please fill in all fields!");
      return;
    }

    alert(✅ Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message});
    contactForm.reset();
  });
}

// ⭐ Movie card “Watch Now” buttons
const movieButtons = document.querySelectorAll(".movie-card button");
movieButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("🎬 Redirecting to movie page...");
    window.open("https://www.hotstar.com/in/movies", "_blank");
  });
});

// 🎭 Actor cards animation hover
const actorCards = document.querySelectorAll(".actor-card");
actorCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 0 20px #ffcc00";
  });
  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 0 15px #ff0000";
  });
});

// 🔝 Scroll-to-top button (auto show after scroll)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.background = "#ff0000";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 🔍 Movie search function
function searchMovies() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const movies = document.querySelectorAll(".movie-card");
  movies.forEach(movie => {
    const name = movie.getAttribute("data-name").toLowerCase();
    movie.style.display = name.includes(input) ? "block" : "none";
  });
}
