const modalRegister = () => {
  document.getElementById("open-modal").style.display = "none";
  document.getElementById("closed-modal").style.display = "none";
};

const onclickButtonOpen = () => {
  const valueName = document.getElementById("nameInput").value;
  const nameLength = document.getElementById("nameInput").textLength;
  const valueEmail = document.getElementById("emailInput").value;
  const localSetName = localStorage.setItem("@Efront:user", valueName);
  const localSetEmail = localStorage.setItem("@Efront:email", valueEmail);
  const localGetName = localStorage.getItem("@Efront:user");
  const localGetEmail = localStorage.getItem("@Efront:email");
  if (nameLength >= 3 && localGetEmail.includes("@")) {
    document.getElementById("open-modal").style.display = "flex";
  } else {
    document.getElementById("closed-modal").style.display = "flex";
  }
};

const onclickModalOpen = () => {
  document.getElementById("open-modal").style.display = "none";
};

const onclickModalClosed = () => {
  document.getElementById("closed-modal").style.display = "none";
};

window.onload = () => {
  modalRegister();
};
