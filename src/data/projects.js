// Real project data only. To add a screenshot, drop the image into /public/projects
// and set `screenshot` (e.g. '/projects/ledgerly.png'). `live` stays null unless a real demo exists.

export const categories = ['All', 'Web Development', 'Data Analytics', 'AI & Machine Learning', 'Mobile Applications']

export const projects = [
  {
    id: 'ledgerly',
    title: 'Ledgerly',
    subtitle: 'Full-Stack Expense Tracker',
    categories: ['Web Development'],
    summary:
      'Responsive expense tracker with Firebase authentication, Google Sign-In and Firestore data management.',
    description:
      'Designed and developed a responsive expense tracking application with Firebase authentication, Google Sign-In, and Firestore data management.',
    features: [
      'User authentication and Google Sign-In',
      'Transaction management',
      'Search and filtering',
      'Financial summaries',
      'Interactive dashboard charts',
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'Firebase Authentication', 'Cloud Firestore'],
    github: 'https://github.com/maneeshayapa/expense-tracker.git',
    live: null,
    screenshot: '/projects/ledgerly.png',
  },
  {
    id: 'ngems',
    title: 'NGEMS',
    subtitle: 'National Government Electronic Medical System',
    categories: ['Web Development'],
    team: true,
    summary: 'Team-built hospital management system covering patients, staff, wards, laboratory and pharmacy.',
    description: 'Collaborated with a team to develop a hospital management system.',
    features: [
      'Patient and staff management',
      'Appointment scheduling',
      'Admissions',
      'Ward management',
      'Laboratory management',
      'Pharmacy management',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/kavishka2002/NGEMS.git',
    live: null,
    screenshot: '/projects/ngems.png',
  },
  {
    id: 'churn',
    title: 'Customer Churn Prediction System',
    subtitle: 'Machine learning on the Telco Customer Churn dataset',
    categories: ['Data Analytics', 'AI & Machine Learning'],
    summary:
      'ML system that predicts customer churn, with a Streamlit dashboard for predictions and customer insights.',
    description:
      'Developed a machine learning system to predict customer churn using the Telco Customer Churn dataset. Performed data preprocessing, model training, and performance evaluation.',
    highlight: { value: '0.8359', label: 'ROC-AUC (evaluated Logistic Regression baseline)' },
    features: [
      'Data preprocessing',
      'Machine learning model development',
      'Model evaluation',
      'Churn prediction',
      'Streamlit dashboard',
      'Customer insights visualization',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'Streamlit'],
    github: 'https://github.com/maneeshayapa/customer-churn-prediction.git',
    live: null,
    screenshot: '/projects/churn-prediction.png',
  },
  {
    id: 'sales',
    title: 'Smart Demand & Sales Prediction System',
    subtitle: 'Retail sales forecasting',
    categories: ['Data Analytics', 'AI & Machine Learning'],
    summary:
      'Sales forecasting system built on historical retail data and a Random Forest model, with an interactive dashboard.',
    description: 'Developed a sales forecasting system using historical retail data and a Random Forest model.',
    features: [
      'Sales data analysis',
      'Seven-day sales forecasting',
      'Model comparisons',
      'Feature importance visualization',
      'Interactive Streamlit dashboard',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Streamlit'],
    github: 'https://github.com/maneeshayapa/smart-demand-sales-prediction.git',
    live: null,
    screenshot: '/projects/sales-prediction.png',
  },
  {
    id: 'researchmate',
    title: 'ResearchMate AI',
    subtitle: 'AI-Based Research Assistant',
    categories: ['AI & Machine Learning'],
    status: 'Ongoing Project',
    summary:
      'Work in progress: an AI research assistant that retrieves relevant information from research documents using embeddings and FAISS.',
    description:
      'Developing an AI-based research assistant using embedding models and FAISS to retrieve relevant information from research documents. This project is still in development.',
    highlight: { value: '86.82%', label: 'evidence matching coverage (current evaluation)' },
    features: [
      'Semantic retrieval from research documents',
      'Embedding-based information retrieval',
      'Retrieval evaluation using Recall@K',
      'Evidence matching coverage evaluation',
    ],
    tech: ['Python', 'FAISS', 'Embedding Models', 'Information Retrieval'],
    github: null,
    live: null,
    screenshot: '/projects/researchmate.png',
    screenshotLabel: 'Dashboard design preview',
  },
  {
    id: 'eclinic',
    title: 'E-Clinic Book',
    subtitle: 'Flutter Mobile Application',
    categories: ['Mobile Applications'],
    summary: 'Flutter app for managing clinic activities with separate patient and doctor accounts.',
    description:
      'Developed a Flutter application for managing clinic activities with patient and doctor accounts.',
    features: [
      'Patient and doctor accounts',
      'Appointment management',
      'Medical history',
      'Prescription management',
      'Laboratory report handling',
      'QR-based patient identification',
    ],
    tech: ['Flutter', 'Dart', 'Firebase Authentication', 'Cloud Firestore', 'Supabase Storage'],
    github: 'https://github.com/maneeshayapa/e_clinic_book.git',
    live: null,
    screenshot: '/projects/clinic-book.png',
    screenshotFit: 'contain',
  },
  {
    id: 'ridebuddy',
    title: 'RideBuddy',
    subtitle: 'Smart Fuel and Vehicle Management System',
    categories: ['Mobile Applications'],
    summary:
      'Mobile app for vehicle details, fuel records, expenses, mileage and trip costs, with an AI chatbot.',
    description:
      'Developed a mobile application for managing vehicle details, fuel records, expenses, mileage, and trip costs.',
    features: [
      'Vehicle information management',
      'Fuel record management',
      'Expense and mileage tracking',
      'Trip cost management',
      'AI-powered chatbot using Gemini API and Flask backend',
    ],
    tech: ['Flutter', 'Dart', 'REST API', 'Gemini API', 'Supabase Storage', 'Flask'],
    github: 'https://github.com/sadeepadilshan084-1/ride_buddy_app.git',
    live: null,
    screenshot: '/projects/ridebuddy.png',
    screenshotFit: 'contain',
  },
]
