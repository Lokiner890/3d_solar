// List of prompts to display whilst loading textures.
const loadingPrompts = [
  "Баним СексиСосу.",
  "Не отписываем посты",
  "Добавляем барашек",
  "Убиваем ролевиков",
  "Притворяемся что любим ролевиков",
  "Бомбим спутник",
  "Создаем мемы",
  "Прокрастинируем",
];

// Switch loading screen text every 2 seconds.
const switchLoadText = setInterval(() => {
  const index = Math.floor(Math.random() * loadingPrompts.length);
  const loadText = document.getElementById("loader-text") as HTMLDivElement;
  loadText.textContent = `${loadingPrompts[index]}...`;
}, 2000);

/**
 * Updates the loading screen once textures are loaded.
 */
export const onLoaded = () => {
  clearInterval(switchLoadText);
  const loadText = document.getElementById("loader-text") as HTMLDivElement;
  loadText.textContent = "Кликни чтобы глянуть...";

  const loadIcon = document.getElementById("loader-circle") as HTMLDivElement;
  const svg = loadIcon.children[0] as HTMLElement;
  svg.style.animation = "none";

  const loadContainer = document.getElementById("loading") as HTMLDivElement;
  loadContainer.style.cursor = "pointer";

  loadContainer.addEventListener("click", () => {
    loadContainer.style.pointerEvents = "none";
    const animation = loadContainer.animate(
      { opacity: [1, 0], transform: ["scale(1)", "scale(0.75)"] },
      {
        duration: 750,
        easing: "ease",
        fill: "forwards",
      }
    );

    animation.onfinish = () => {
      loadContainer.style.display = "none";
    };
  });
};
