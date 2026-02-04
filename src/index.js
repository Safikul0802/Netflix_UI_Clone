let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    let content = this.nextElementSibling;
    const icon = this.querySelector("i");

    // Check if this one is already open
    const isOpen = content.style.maxHeight;

    // Step 1: Close all accordions
    for (let j = 0; j < accordian.length; j++) {
      const otherIcon = accordian[j].querySelector("i");
      accordian[j].nextElementSibling.style.maxHeight = null;
      otherIcon.classList.remove("fa-times");
      otherIcon.classList.add("fa-plus");
    }

    // Step 2: Open only if it was previously closed
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-times");
    }
  });
}

