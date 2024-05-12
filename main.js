const steps = document.querySelectorAll(".step");
let currentStepIndex = 0;

const showCurrentStep = () => {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStepIndex);
  });
  currentStepIndex = (currentStepIndex + 1) % steps.length;
};

showCurrentStep();

const intervalId = setInterval(showCurrentStep, 3000);
