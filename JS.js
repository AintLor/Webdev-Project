document.addEventListener("DOMContentLoaded", () => {
    // Handle Navbar Sticky Effect on Scroll
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.offsetHeight;
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Scroll to the Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.classList.add("scroll-top-btn");
    scrollTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollTopBtn);

    // Show/Hide the scroll-top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Smooth Scroll to Top
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll(".portfolio-filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Toggle active class on buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show/hide portfolio items based on category
            portfolioItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Form Validation
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        // Basic validation
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Optional: Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes, submit the form (or send an email via an API)
        alert("Thank you for your message! We'll get back to you soon.");
        contactForm.reset(); // Reset the form
    });

    // Expandable Blog Section
    const blogToggleBtn = document.querySelector(".expand-blog-btn");
    const blogSection = document.querySelector(".blog-section");

    if (blogToggleBtn && blogSection) {
        blogToggleBtn.addEventListener("click", () => {
            blogSection.classList.toggle("expanded");
            if (blogSection.classList.contains("expanded")) {
                blogToggleBtn.innerHTML = "Collapse Blog";
            } else {
                blogToggleBtn.innerHTML = "Expand Blog";
            }
        });
    }

    // Photo Montage Hover Effect
    const photoMontageImgs = document.querySelectorAll(".photo-montage img");
    photoMontageImgs.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
