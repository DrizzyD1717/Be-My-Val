let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let Question = document.querySelector(".main-content");
let Rejected = document.querySelector(".rejected-page");
let Accepted = document.querySelector(".result-page");

const handleYes = () => {
  Question.classList.toggle("hide");
  Accepted.classList.toggle("hide");
  alert(
    "Take a screenshot of the response and send to whoever sent you the link"
  );
};

const handleNo = () => {
  alert(
    "Take a screenshot of the response and send to whoever sent you the link"
  );
  Question.classList.add("hide");
  Accepted.classList.add("hide");
  Rejected.classList.toggle("hide");
};

yes.addEventListener("mouseover", () => {
  yes.innerHTML = "💖💖💖";
});

yes.addEventListener("mouseout", () => {
  yes.innerHTML = "Yes💖";
});

no.addEventListener("mouseover", () => {
  no.innerHTML = "😒😒😒";
});

no.addEventListener("mouseout", () => {
  no.innerHTML = "No🥲";
});
