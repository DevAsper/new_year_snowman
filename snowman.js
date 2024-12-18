document.addEventListener("DOMContentLoaded", () => {
  // Загружаем анимацию снеговика
  lottie.loadAnimation({
    container: document.getElementById("snowman-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "snowman.json", // JSON-файл вашей анимации
  });

  // Показать сообщение через 3 секунды
  const message = document.getElementById("message");
  setTimeout(() => {
    message.style.opacity = 1;
  }, 3000);
});
