import { useState, useRef, useEffect } from "react";

export function useScrollSections() {
  const [activeSection, setActiveSection] = useState("intro");
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = {
      intro: introRef.current,
      skills: skillsRef.current,
      education: educationRef.current,
    }[id];

    if (section) {
      const offset = 80; // Adjust based on your fixed header height
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = [
      { id: "intro", ref: introRef },
      { id: "skills", ref: skillsRef },
      { id: "education", ref: educationRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.5 } // Adjust this value if needed
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return {
    activeSection,
    setActiveSection,
    introRef,
    skillsRef,
    educationRef,
    scrollToSection,
  };
}
