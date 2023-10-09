const calculateButton = document.getElementById("calculate");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");
const dayOutput = document.getElementById("dayOutput");
const monthOutput = document.getElementById("monthOutput");
const yearOutput = document.getElementById("yearOutput");
const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth() + 1;
const thisDay = new Date().getDate();

function leapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function validate() {
  let validDay = false;
  let validMonth = false;
  let validYear = false;
  // handling Errors
  // day validation
  if (dayInput.value.length === 0) {
    validDay = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayError.innerText = "This field is required";
    dayError.classList.remove("hidden");
  } else if (
    dayInput.value < 1 ||
    dayInput.value > 31 ||
    (monthInput.value == 2 &&
      ((leapYear(yearInput.value) && dayInput.value > 29) ||
        (!leapYear(yearInput.value) && dayInput.value > 28))) ||
    ([4, 6, 9, 11].includes(parseInt(monthInput.value)) && dayInput.value > 30)
  ) {
    validDay = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayError.innerText = "Must be valid day";
    dayError.classList.remove("hidden");
  } else if (
    yearInput.value == thisYear &&
    monthInput.value == thisMonth &&
    dayInput.value > thisDay
  ) {
    validDay = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayError.innerText = "Must be in the past";
    dayError.classList.remove("hidden");
  } else {
    validDay = true;
    dayError.innerText = "";
    dayError.classList.add("hidden");
  }
  // month validation
  if (monthInput.value.length === 0) {
    validMonth = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthError.innerText = "This field is required";
    monthError.classList.remove("hidden");
  } else if (monthInput.value < 1 || monthInput.value > 12) {
    validMonth = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthError.innerText = "Must be valid month";
    monthError.classList.remove("hidden");
  } else if (yearInput.value == thisYear && monthInput.value > thisMonth) {
    validMonth = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthError.innerText = "Must be in the past";
    monthError.classList.remove("hidden");
  } else {
    validMonth = true;
    monthError.innerText = "";
    monthError.classList.add("hidden");
  }
  // year validation
  if (yearInput.value.length === 0) {
    validYear = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearError.innerText = "This field is required";
    yearError.classList.remove("hidden");
  } else if (yearInput.value > thisYear) {
    validYear = false;
    dayInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearInput.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearError.innerText = "Must be in the past";
    yearError.classList.remove("hidden");
  } else {
    validYear = true;
    yearError.innerText = "";
    yearError.classList.add("hidden");
  }
  if (validDay && validMonth && validYear) {
    calculateButton.disabled = false;
    calculateButton.style.removeProperty("background-color");
    dayInput.previousElementSibling.style.removeProperty("color");
    dayInput.style.removeProperty("border");
    monthInput.previousElementSibling.style.removeProperty("color");
    monthInput.style.removeProperty("border");
    yearInput.previousElementSibling.style.removeProperty("color");
    yearInput.style.removeProperty("border");
  } else {
    calculateButton.disabled = true;
    calculateButton.style.backgroundColor = "hsl(259, 50%, 75%)";
  }
}

function calculateAge() {
  let years,
    months = 0,
    days = 0;
  let yearInputValue = +yearInput.value;
  let monthInputValue = +monthInput.value;
  let dayInputValue = +dayInput.value;
  if (
    monthInputValue > thisMonth ||
    (monthInputValue === thisMonth && dayInputValue > thisDay)
  ) {
    years = thisYear - yearInputValue - 1;
  } else {
    years = thisYear - yearInputValue;
  }
  while (thisMonth !== monthInputValue) {
    if (monthInputValue === 12) {
      monthInputValue = 1;
    } else {
      monthInputValue++;
    }
    months++;
  }
  if (dayInputValue > thisDay) {
    if (months === 0) {
      months = 11;
    } else {
      months--;
    }
    while (dayInputValue !== thisDay) {
      if (
        (leapYear(thisYear) && thisMonth - 1 === 2 && dayInputValue === 29) ||
        (!leapYear(thisYear) && thisMonth - 1 === 2 && dayInputValue === 28) ||
        ([4, 6, 9, 11].includes(thisMonth - 1) && dayInputValue === 30) ||
        dayInputValue === 31
      ) {
        dayInputValue = 1;
      } else {
        dayInputValue++;
      }
      days++;
    }
  } else {
    while (thisDay != dayInputValue) {
      days++;
      dayInputValue++;
    }
  }
  for (let i = 0; i <= years; i++) {
    setTimeout(() => {
      yearOutput.innerText = i;
    }, 40 * i);
  }
  setTimeout(() => {
    for (let i = 0; i <= months; i++) {
      setTimeout(() => {
        monthOutput.innerText = i;
      }, 40 * i);
    }
  }, years * 40);
  setTimeout(() => {
    for (let i = 0; i <= days; i++) {
      setTimeout(() => {
        dayOutput.innerText = i;
      }, 40 * i);
    }
  }, (years + months) * 40);
  calculateButton.disabled = true;
}

dayInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  validate();
});

monthInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  validate();
});

yearInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  validate();
});

calculateButton.addEventListener("click", (event) => {
  // calculating the age
  event.preventDefault();
  calculateAge();
});
