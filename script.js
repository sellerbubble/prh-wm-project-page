/*
Role: Add small interactions for the PRH-WM GitHub Pages site.
Status: Active static-page helper.
Inputs: Citation copy controls in docs/index.html.
Outputs: Clipboard feedback.
Owner or module: docs GitHub Pages project page.
Safe-to-delete / safe-to-move status: Safe to delete only if the page no longer needs copy feedback.
*/

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);

    if (!target) {
      return;
    }

    try {
      await navigator.clipboard.writeText(target.innerText);
      const original = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      button.textContent = "Select";
    }
  });
});
