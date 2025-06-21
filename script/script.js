// backgroundColorChangeFeature
const bgColors = [
  "red",
  "green",
  "blue",
  "black",
  "yellow",
  "orange",
  "purple",
];

document.getElementById("random-bg-btn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  const randomColor = bgColors[randomIndex];
  document.body.style.backgroundColor = randomColor;
});

// skillsCompletedButtonFeature
const completedButtons = document.getElementsByClassName(
  "skills-completed-btn"
);

for (const completedBtn of completedButtons) {
  completedBtn.addEventListener("click", function () {
    // alertFeature
    alert("Learned Skills board updated successfully!");

    // disabledButtonFeature
    completedBtn.innerText = "Completed";
    completedBtn.disabled = true;
    completedBtn.classList.add("opacity-50", "cursor-not-allowed");
    completedBtn.classList.remove(
      "hover:bg-transparent",
      "hover:text-[#3752FD]",
      "hover:border-[#3752FD]",
      "hover:cursor-pointer"
    );

    // decrementSkillAssignedFeature
    const skillAssigned = getInnerTextByIdAndConvertToNumber(
      "skills-assigned-count"
    ); // usingUtilities
    const remainingSkillAssigned = skillAssigned - 1;
    setInnerTextByIdAndValue("skills-assigned-count", remainingSkillAssigned); // usingUtilities

    // incrementCompletedSkillFeature
    const skillCompleted = getInnerTextByIdAndConvertToNumber(
      "skill-completed-count"
    ); // usingUtilities
    const totalSkillCompleted = skillCompleted + 1;
    setInnerTextByIdAndValue("skill-completed-count", totalSkillCompleted); // usingUtilities
  });
}

// activityLogFeature
const activityLogContainer = document.getElementById("activity-log-history");
const clearHistoryBtn = document.getElementById("clear-history-btn");

for (const completedBtn of completedButtons) {
  completedBtn.addEventListener("click", function () {
    const cardTitle = this.closest(".skillCard").querySelector("h2").innerText;
    const activityLogItem = document.createElement("p"); // createElement
    activityLogItem.className = "p-5 mb-3 bg-[#F4F7FF] rounded-lg text-sm";
    const time = new Date().toLocaleTimeString(); // localTime
    activityLogItem.innerHTML = `You have completed the task <strong>"${cardTitle}"</strong> at ${time}`;
    activityLogContainer.appendChild(activityLogItem);
  });
}

clearHistoryBtn.addEventListener("click", function () {
  activityLogContainer.innerHTML = ""; // clearActivityLogHistory
  location.reload(); // reloadThePage
});

// goToNotesPage
document
  .getElementById("notes-container")
  .addEventListener("click", function () {
    window.location.href = "../notes.html";
  });
