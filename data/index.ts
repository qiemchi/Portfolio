export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize active collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with foreign communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning NextJS and Tailwind",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to know more about me?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "DICEDU - Dice Education",
      des: "An educational snakes and ladders-like game using Python and Pygame module.",
      img: "/p1.svg",
      iconLists: ["/figma.svg", "/pygame.svg", "/python.svg"],
      link: "https://github.com/qiemchi/Dicedu-Dice-Education",
    },
    {
      id: 2,
      title: "Michael Vs Lalapan - Game",
      des: "A parody of Plants vs Zombies game implementing Java OOP Concept.",
      img: "/p2.svg",
      iconLists: ["/figma.svg", "/java.svg"],
      link: "https://github.com/qiemchi/Michael-Vs-Lalapan",
    },
    {
      id: 3,
      title: "Keyboard Speed Typing Test - Website",
      des: "A website that tracks how fast you type based on words per minute.",
      img: "/p3.svg",
      iconLists: ["/js.svg", "/html.svg", "/css.svg"],
      link: "https://github.com/qiemchi/Keyboard-Typing-Speed-Test",
    },
    {
      id: 4,
      title: "WayangWave - Program",
      des: "A CLI-Based Spotify program that is created fully using C Language",
      img: "/p4.svg",
      iconLists: ["/figma.svg", "/c.svg"],
      link: "https://github.com/qiemchi/Wayang-Wave",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "I had the pleasure of working alongside Rizqi during their internship at PT Datare. Rizqi consistently demonstrated a keen eye for detail and a deep understanding of user-centric design principles. Their contributions to our projects were invaluable, and their proactive approach to problem-solving greatly benefited our team.",
      name: "Kenneth Ezekiel",
      title: "Chief Executive Officer of Datare",
    },
    {
      quote:
        "I had the pleasure of working alongside Rizqi during their internship at PT Datare. Rizqi consistently demonstrated a keen eye for detail and a deep understanding of user-centric design principles. Their contributions to our projects were invaluable, and their proactive approach to problem-solving greatly benefited our team.",
      name: "Kenneth Ezekiel",
      title: "Chief Executive Officer of Datare",
    },
    {
      quote:
        "I had the pleasure of working alongside Rizqi during their internship at PT Datare. Rizqi consistently demonstrated a keen eye for detail and a deep understanding of user-centric design principles. Their contributions to our projects were invaluable, and their proactive approach to problem-solving greatly benefited our team.",
      name: "Kenneth Ezekiel",
      title: "Chief Executive Officer of Datare",
    },
    {
      quote:
        "I had the pleasure of working alongside Rizqi during their internship at PT Datare. Rizqi consistently demonstrated a keen eye for detail and a deep understanding of user-centric design principles. Their contributions to our projects were invaluable, and their proactive approach to problem-solving greatly benefited our team.",
      name: "Kenneth Ezekiel",
      title: "Chief Executive Officer of Datare",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Datare",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "ComLabs",
      img: "/Com.svg",
      nameImg: "/ComLabs.svg",
    },
    {
      id: 3,
      name: "Gigabit",
      img: "/gig.svg",
      nameImg: "/gigabit.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "UI/UX Intern - Datare",
      desc: "Assisted in the designing of a web-based hospitality platform using Figma, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Project Manager - Anmategra",
      desc: "Planned and managed the development of a website that integrates ITB student's organizational data.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Founder - Gigabit HMIF",
      desc: "Directed the establishment of Gigabit, an entrepreneurial project of HMIF ITB that provides digital commodities.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Computer Lab Assistant - ComLabs USDI ITB",
      desc: "Guided over 111 students through lab practicums, evaluating their Python programs and give feedbacks.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: "1",
      img: "/git.svg",
      link: "https://github.com/qiemchi",
    },
    {
      id: "2",
      img: "/twit.svg",
      link: "https://twitter.com/qiemchi",
    },
    {
      id: "3",
      img: "/link.svg",
      link: "https://www.linkedin.com/in/qiewi/",
    },
  ];