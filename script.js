
  function calculateBMI() {
    const height = parseFloat(document.getElementById("bmi-height").value) / 100;
    const weight = parseFloat(document.getElementById("bmi-weight").value);
    const resultBox = document.getElementById("bmi-result");

    if (!height || !weight || height <= 0 || weight <= 0) {
      resultBox.textContent = "Please enter valid height and weight.";
      return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal weight";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    resultBox.textContent = `Your BMI is ${bmi} — ${status}`;
  }



    const form = document.getElementById("gym-contact-form");
  const statusMsg = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mrblzaro", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      statusMsg.textContent = "✅ Message sent successfully!";
      statusMsg.style.color = "var(--secondary-color)";
      form.reset();
    } else {
      statusMsg.textContent = "❌ Failed to send. Please try again.";
      statusMsg.style.color = "#f44336";
    }

    setTimeout(() => {
      statusMsg.textContent = "";
    }, 5000);
  });





    document.querySelectorAll(".book-now").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

      document.querySelectorAll(".get-started").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const programsSection = document.getElementById("programs");
      if (programsSection) {
        programsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });







  const slides = document.querySelectorAll(".review__content");
  const nextBtn = document.getElementById("next-review");
  const prevBtn = document.getElementById("prev-review");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  showSlide(current);