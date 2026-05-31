const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const container = accordion.querySelector(".accordion-container");
  const data = accordion.querySelector(".accordion-data");
  const icon = accordion.querySelector(".fa-chevron-down");

  data.style.display = "none";
  icon.style.transition = "transform 0.3s ease";

  container.addEventListener("click", () => {
    const isOpen = data.style.display === "block";

    document.querySelectorAll(".accordion-data").forEach((d) => {
      d.style.display = "none";
    });
    document.querySelectorAll(".accordion .fa-chevron-down").forEach((i) => {
      i.style.transform = "rotate(0deg)";
    });

    if (!isOpen) {
      data.style.display = "block";
      icon.style.transform = "rotate(180deg)";
    }
  });
});