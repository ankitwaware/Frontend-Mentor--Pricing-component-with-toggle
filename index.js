"use strict";

const plansContainer = document.querySelector(".pricing-plans");
const plans = document.querySelectorAll(".plan");
const annually = document.getElementById("annually");
const monthly = document.getElementById("monthly");
const pricingAnnuallyall = document.querySelectorAll(".pricing-annually");
const pricingMonthlyall = document.querySelectorAll(".pricing-monthly");
const radioButtons = document.querySelectorAll(".toggle-wrapper input");

function hideMonthly_showAnnually() {
  pricingMonthlyall.forEach((price) => price.classList.add("hide"));
  pricingAnnuallyall.forEach((price) => price.classList.remove("hide"));
}

function showMonthly_hideAnnually() {
  pricingMonthlyall.forEach((price) => price.classList.remove("hide"));
  pricingAnnuallyall.forEach((price) => price.classList.add("hide"));
}

// toggle buttons
radioButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (annually.checked) {
      hideMonthly_showAnnually();
    }

    if (monthly.checked) {
      showMonthly_hideAnnually();
    }
  });
});

// tab price component
plansContainer.addEventListener("click", function (e) {
  const clickedPlan = e.target.closest(".plan");

  //gurd clause
  if (!clickedPlan) return;

  // remove active from all before click
  plans.forEach((plan) => plan.classList.remove("active"));

  // add active
  clickedPlan.classList.add("active");
});

// annually deafult
if (annually.checked) {
  hideMonthly_showAnnually();
}
