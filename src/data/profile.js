// Single source of truth for personal details. Edit here, not in components.

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Maneesha Yapa',
  brand: 'MANEESHA.',
  title: 'Final-Year HICT Undergraduate | Web Developer | Data Analytics & AI/ML Enthusiast',
  location: 'Sri Lanka',
  email: 'maneeshayapa9@gmail.com',
  phone: '+94 76 763 4766',
  phoneHref: 'tel:+94767634766',
  github: 'https://github.com/maneeshayapa',
  linkedin: 'https://www.linkedin.com/in/maneesha-yapa-01a235329/',
  // Put your CV PDFs in /public/cv/ using these exact names (see README).
  cvFiles: [
    { label: 'Web Development CV', href: `${base}cv/Maneesha-Yapa-CV-Web-Development.pdf` },
    { label: 'AI / ML CV', href: `${base}cv/Maneesha-Yapa-CV-AI-ML.pdf` },
  ],
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const aboutParagraphs = [
  'I am a final-year undergraduate pursuing a BHSc (Hons) in Health Information and Communication Technology at Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka.',
  'I have practical experience in developing web applications, mobile applications, data analytics dashboards, and machine learning projects through academic and personal work.',
  'My technical interests include web development, data-driven applications, artificial intelligence, and software engineering. I enjoy learning new technologies and applying them to solve practical problems.',
  'I am currently looking for opportunities to improve my technical skills, gain industry experience, and contribute to meaningful technology projects.',
]

export const education = {
  degree: 'BHSc (Hons) in Health Information and Communication Technology',
  school: 'Gampaha Wickramarachchi University of Indigenous Medicine (GWUIM)',
  status: 'Final-Year Undergraduate',
}

export const experience = {
  role: 'IT Assistant Intern',
  company: 'SITEC',
  duration: '1 month internship',
  description:
    'Gained practical experience in a professional IT working environment while developing communication, teamwork, and workplace skills. Enhanced understanding of professional working practices and day-to-day IT operations.',
}

export const achievements = [
  'First Place – Smart Line Follower Robot Competition',
]

export const activities = [
  'Editorial Team Member – MINI SCOPE Exhibition',
  'Member – SPAG Unity',
]
