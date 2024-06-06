
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.querySelector(".modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
