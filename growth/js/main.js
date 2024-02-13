/* FAQ Section */
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content")

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header")

    if (!groupHeader) return //Ignore clicks that aren't on group headers

    const group = groupHeader.parentElement
    const groupBody = group.querySelector(".faq-group-body")
    const icon = groupHeader.querySelector("i")

    //Toggle the plus and minus icons
    icon.classList.toggle("fa-plus")
    icon.classList.toggle("fa-minus")

    //Toggle the visibility of the FAQ group body
    groupBody.classList.toggle("open")

    //Close other open FAQ group bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group")
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body")
        const otherIcon = otherGroup.querySelector(".faq-group-header i")

        otherGroupBody.classList.remove("open")
        otherIcon.classList.remove("fa-minus")
        otherIcon.classList.add("fa-plus")
      }
    })
  })
})

/* Hamburger Button / Mobile Menu */
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })
})
