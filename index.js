const showMenu = (data) => {
  let menu = document.getElementById("menu");
  if (data == "block") {
    menu.classList.replace("hidden", "block");
    document.body.style.height = "95vh";
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.replace("block", "hidden");
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
  }
};

// <<<<<<< HEAD ======= >>>>>>> 2e9b862f448b909601b8bd96a30c5885e67cfe94
const menuBarHandle = () => {
  document.getElementById("bar-icon").style.display = "none";
  document.getElementById("x-icon").style.display = "block";
  showMenu("block");
};
const crossHandle = () => {
  document.getElementById("x-icon").style.display = "none";
  document.getElementById("bar-icon").style.display = "block";
  showMenu("none");
};

const showFeacture = (value) => {
  let feacture = document.getElementById("feacture");

  let showAllFeacture = document.getElementById("show-all-feacture");
  let seePlan = document.getElementById("see-plan");

  if (value == "showFeacture") {
    feacture.innerText = "Plan Features";
    showAllFeacture.style.display = "grid";

    feacture.style.display = "block";
    seePlan.style.display = "none";
  } else {
    feacture.innerText = "See All Feacture";
    showAllFeacture.style.display = "none";

    feacture.style.display = "block";
    seePlan.style.display = "none";
  }
};

const showSubList = (id) => {
  let host = document.getElementById(id);
  const iconId = id + "-icon";
  let classList = host.classList;
  let icon = document.getElementById(iconId);

  if (classList.contains("hidden")) {
    hideSubList();
    icon.classList.add("rotate-180");
    classList.replace("hidden", "block");
  } else if (classList.contains("block")) {
    icon.classList.remove("rotate-180");
    classList.replace("block", "hidden");
  }
};

const hideSubList = () => {
  let list = ["host", "vpn", "email", "domain"];

  for (let i = 0; i < 4; i++) {
    const element = document.getElementById(list[i]);
    const icon = document.getElementById(list[i] + "-icon");
    if (element.classList.contains("block")) {
      element.classList.replace("block", "hidden");
      icon.classList.remove("rotate-180");
    }
  }
  // <<<<<<< HEAD
};
