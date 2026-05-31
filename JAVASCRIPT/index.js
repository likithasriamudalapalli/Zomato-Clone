// Feather Icons
feather.replace();

// Radio Button - Email/Phone Toggle
const emailRadio = document.getElementById("email");
const phoneRadio = document.getElementById("phone");
const emailInput = document.querySelector(".email-input input");

emailRadio.addEventListener("change", () => {
  emailInput.type = "email";
  emailInput.placeholder = "Email";
});

phoneRadio.addEventListener("change", () => {
  emailInput.type = "tel";
  emailInput.placeholder = "Phone number";
});

// Share App Link Button
const shareBtn = document.querySelector(".btn");

shareBtn.addEventListener("click", () => {
  const value = emailInput.value.trim();

  if (!value) {
    alert("Please enter your email or phone number.");
    return;
  }

  if (emailRadio.checked && !value.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  if (phoneRadio.checked && !/^\d{10}$/.test(value)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  alert(`App link sent to: ${value}`);
  emailInput.value = "";
});

// Search - Enter key
const searchBox = document.querySelector(".search_box");

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchBox.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
    }
  }
});
