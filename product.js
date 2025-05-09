const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeModal = document.querySelector(".close");

  cartBtn.addEventListener("click", () => {
    cartModal.classList.add("show");
  });

  closeModal.addEventListener("click", () => {
    cartModal.classList.remove("show");
    setTimeout(() => {
      cartModal.style.display = "none";
    }, 300);
  });

  window.addEventListener("click", (e) => {
    if (e.target == cartModal) {
      cartModal.classList.remove("show");
      setTimeout(() => {
        cartModal.style.display = "none";
      }, 300);
    }
  });


  const observer = new MutationObserver(() => {
    if (cartModal.classList.contains("show")) {
      cartModal.style.display = "flex";
    }
  });

  observer.observe(cartModal, { attributes: true });