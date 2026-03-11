     // Scroll animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 },
      );

      document
        .querySelectorAll(".fade-in")
        .forEach((el) => observer.observe(el));

      // Slide dots
      document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.addEventListener("click", () => {
          document
            .querySelectorAll(".dot")
            .forEach((d) => d.classList.remove("active"));
          dot.classList.add("active");
        });
      });

      // Country card hover effect
      document.querySelectorAll(".country-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-6px) scale(1.02)";
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "";
        });
      });

      // Form submit
      document.querySelector(".form-btn").addEventListener("click", () => {
        const inputs = document.querySelectorAll(".form-input");
        const hasEmpty = Array.from(inputs).some((i) => !i.value);
        if (hasEmpty) {
          alert("Please fill all the fields to get your free counselling!");
        } else {
          alert("Thank you! Our counsellor will contact you shortly. 🎉");
        }
      });

      