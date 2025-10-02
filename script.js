// Tabs functionality
document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    // Remove active class from all buttons
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));

    // Show selected tab content
    document.getElementById(tabId).classList.remove("hidden");
  });
});
