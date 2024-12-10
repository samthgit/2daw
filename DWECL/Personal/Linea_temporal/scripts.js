document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".timeline-event");
  
    const revealOnScroll = () => {
      events.forEach(event => {
        const top = event.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight - 100) {
          event.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Para cargar eventos ya visibles
  });
  