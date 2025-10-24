import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ClientScripts() {
  const router = useRouter();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in-up");
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".programa-card, .contact-card, .location-card");
    cards.forEach((card) => {
      card.classList.remove("fade-in-up"); 
      observer.observe(card);
    });

    const handleAnchorClick = (e) => {
      const link = e.currentTarget;
      const href = link.getAttribute("href");
      
      if (href !== "#" && href !== "#contato") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => link.addEventListener("click", handleAnchorClick));

    return () => {
      cards.forEach(card => observer.unobserve(card));
      anchorLinks.forEach(link => link.removeEventListener("click", handleAnchorClick));
    };
  }, [router.pathname]);

  return null;
}