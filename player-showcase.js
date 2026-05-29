const cards = Array.from(document.querySelectorAll("[data-player-card]"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const searchInput = document.querySelector("[data-player-search]");
const statusLabel = document.querySelector("[data-player-status]");
const emptyState = document.querySelector("[data-empty-state]");
const revealItems = document.querySelectorAll("[data-reveal]");

let activeFilter = "all";

const updateGallery = () => {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const tags = (card.dataset.tags || "").toLowerCase();
    const text = card.textContent.toLowerCase();
    const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
    const matchesQuery = !query || tags.includes(query) || text.includes(query);
    const isVisible = matchesFilter && matchesQuery;

    card.hidden = !isVisible;

    if (isVisible) {
      visibleCount += 1;
    }
  });

  if (statusLabel) {
    statusLabel.textContent = `Showing ${visibleCount} of ${cards.length} players`;
  }

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";

    filterButtons.forEach((item) => {
      const isCurrent = item === button;
      item.classList.toggle("is-active", isCurrent);
      item.setAttribute("aria-pressed", String(isCurrent));
    });

    updateGallery();
  });
});

searchInput?.addEventListener("input", updateGallery);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

updateGallery();
