const carousel = document.getElementById("carousel");

function goToSlide(slideIndex) {
  const sectionWidth = carousel.offsetWidth;
  carousel.scrollTo({
    left: sectionWidth * slideIndex,
    behavior: 'smooth'
  });
}

const modal = document.getElementById("medicalModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");

function openModal(imageSrc) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.innerText = imageSrc.split('/').pop();
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    goToSlide(1);
    window.scrollTo({ top: 0 });
  }, 400);
});
