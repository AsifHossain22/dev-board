// backgroundColorChange (you can customize)
const bgColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "black",
  "gray",
  "teal",
];

document.getElementById("random-bg-btn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  const randomColor = bgColors[randomIndex];
  document.body.style.backgroundColor = randomColor;
});

const completedButtons = document.getElementsByClassName("task-completed-btn");

for (const completedBtn of completedButtons) {
  completedBtn.addEventListener("click", function () {
    // disableButton
    completedBtn.disabled = true;
    completedBtn.classList.add("opacity-50", "cursor-not-allowed");
    completedBtn.classList.remove(
      "hover:bg-transparent",
      "hover:text-[#3752FD]",
      "hover:border-[#3752FD]",
      "hover:cursor-pointer"
    );

    // incrementCompletedTask
    const taskCompleted = getInnerTextById("task-completed-count");
    const totalTaskCompleted = taskCompleted + 1;
    setInnerTextByIdAndValue("task-completed-count", totalTaskCompleted);

    // decrementTaskAssigned
    const taskAssigned = getInnerTextById("task-assigned-count");
    const remainingTaskAssigned = taskAssigned - 1;
    setInnerTextByIdAndValue("task-assigned-count", remainingTaskAssigned);
  });
}
