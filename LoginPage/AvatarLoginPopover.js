import { signOutOfApp } from "./SignOut";

function avatarLoginPopover() {
  const avatarPopover = document.createElement("div");
  avatarPopover.id = "avatarPopover";
  const avatar = document.getElementById("userAvatar");

  avatar.addEventListener("click", () => {
    if (avatarPopover.classList.contains("avatarOpen")) {
      avatarPopover.classList.remove("avatarOpen");
    } else {
      avatarPopover.classList.add("avatarOpen");
    }
  });
  return avatarPopover;
}

function isUserLoggedIn() {
  const avatarPopover = document.getElementById("avatarPopover");
  const logOutButton = document.createElement("button");
  logOutButton.id = "logOutButton";
  logOutButton.textContent = "Log Out";
  logOutButton.addEventListener("click", () => {
    signOutOfApp();
  });

  avatarPopover.appendChild(logOutButton);
}

export { avatarLoginPopover, isUserLoggedIn };
