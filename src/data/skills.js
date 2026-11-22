import { Code, Terminal, ChartColumn, Presentation, Database, Smartphone, Brain, Palette, Wrench } from 'lucide-react'

// Categorised skills only. No percentages or progress bars.
export const skillGroups = [
  {
    title: 'Web Development',
    icon: Code,
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Programming',
    icon: Terminal,
    items: ['Python', 'Java', 'C', 'Kotlin'],
  },
  {
    title: 'Data Analytics',
    icon: ChartColumn,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning', 'Data Preprocessing'],
  },
  {
    title: 'Data Visualization',
    icon: Presentation,
    items: ['Streamlit', 'Dashboard Development'],
  },
  {
    title: 'Database Management',
    icon: Database,
    items: ['MySQL', 'Firebase Authentication', 'Cloud Firestore'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    items: ['Flutter', 'Dart', 'REST API Integration'],
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    items: ['Scikit-learn', 'Logistic Regression', 'Random Forest', 'FAISS', 'Embedding Models'],
  },
  {
    title: 'Design Tools',
    icon: Palette,
    items: ['Canva', 'Adobe Photoshop', 'Figma'],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Android Studio'],
  },
]
