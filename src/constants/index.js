// constants/index.js

import {
  // Service Icons
  backend,
  web,
  fullstack,
  mobile,
  // Technology Icons
  python,
  cpp,
  java,
  javascript,
  sql,
  tensorflow,
  pytorch,
  opencv,
  scikitlearn,
  pandas,
  numpy,
  mongodb,
  docker,
  git,
  // Education & Experience Icons
  capsitech, // Add your capsitech.png to assets
  procentris, // Add your procentris.png to assets
  fit, // Add your fit.png to assets
  nhs, // Add your nhs.png to assets
  // Certification Icons
  coursera, // Add your coursera.png to assets
  google, // Add your google.png to assets
  // Project Images
  person_counting, // Add your project images to assets
  hair_follicle,
  gait_analysis,
  head_detection,
  object_tracking,
  safevision,
  invoiceai,
  omnitranslate,
  emsai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Computer Vision Specialist",
    icon: mobile,
  },
  {
    title: "Deep Learning Developer",
    icon: fullstack,
  },
  {
    title: "Python & Data Science",
    icon: web,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "TensorFlow", icon: tensorflow },
  { name: "PyTorch", icon: pytorch },
  { name: "OpenCV", icon: opencv },
  { name: "Scikit-learn", icon: scikitlearn },
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "SQL", icon: sql },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "C++", icon: cpp },
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
];

const education = [
  {
    title: "B.Tech in Computer Science & Engineering (AI & ML)",
    company_name: "Future Institute of Technology, Kolkata (MAKAUT)",
    icon: fit,
    iconBg: "#383E56",
    date: "July 2020 - July 2024",
    points: [
      "Specialization in Artificial Intelligence and Machine Learning.",
      "Achieved a final CGPA of 8.81 out of 10.",
    ],
  },
  {
    title: "Higher Secondary Education (12th Grade)",
    company_name: "Navanalanda High School, Kolkata (WBCHSE)",
    icon: nhs,
    iconBg: "#E6DEDD",
    date: "April 2018 - March 2020",
    points: [
      "Focused on the Science stream, including Physics, Chemistry, and Mathematics.",
      "Secured an aggregate score of 83.33%.",
    ],
  },
  {
    title: "Secondary Education (10th Grade)",
    company_name: "Navanalanda High School, Kolkata (WBBSE)",
    icon: nhs,
    iconBg: "#383E56",
    date: "Completed: March 2018",
    points: [
      "Completed secondary schooling under the West Bengal Board of Secondary Education.",
      "Scored an aggregate of 74.14%.",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer (AIML)",
    company_name: "Procentris India Private Limited",
    icon: procentris, // see note below
    iconBg: "#383E56",
    date: "May 2026 - Present",
    points: [
      "OmniTranslate: Built an end-to-end document translation pipeline for PNG/JPG/PDF inputs using OCR and Gemini Flash, reconstructing translated PDFs while preserving original layout, formatting, and text positioning.",
      "InvoiceAI: Developed an AI-powered medical invoice and insurance-claim pipeline that extracts data from PDF/image inputs and maps it to a predefined JSON schema using Gemini Flash, with UI-based validation of beneficiary, amount, and claim details.",
      "EmsAI: Built an incremental email-thread summarization system that updates stored summaries using previous summaries and newly received conversations; integrated Gemini and Qwen through a switchable LLM architecture.",
      "Document Authenticity Analysis: Built a fraud-analysis pipeline for image, PDF, DOC, and DOCX files using ExifTool and supporting libraries to extract metadata and content, followed by Gemini-based analysis of inconsistencies and anomalies to generate fraud prediction and confidence scores.",
    ],
  },
  {
    title: "Assistant ML Engineer",
    company_name: "Capsitech",
    icon: capsitech,
    iconBg: "#E6DEDD",
    date: "June 2024 - April 2026",
    points: [
      "Developed a real-time computer vision employee tracking system using SCRFD for face detection and ResNet50-based ArcFace for long-distance identity recognition.",
      "Built a document QA assistant using FAISS-based semantic retrieval and LLM inference with strict prompt constraints to reduce hallucinations.",
      "Built a YOLO-based hair follicle detection system on a custom dataset, followed by Hough Line Transform analysis for dermatological applications.",
      "Developed a crowded-environment person counting system using ResNet50 with Feature Pyramid Network (FPN) and real-time inference optimization.",
      "Extracted gait silhouettes using YOLOv8 and Segment Anything Model (SAM) for downstream feature extraction.",
      "Researched and implemented SORT, DeepSORT, ByteTrack, BoT-SORT, and OC-SORT for multi-object tracking.",
    ],
  },
];

const extracurricular = [
  {
    title: "Machine Learning",
    type: "Coursera",
    icon: coursera,
    iconBg: "#2A73BA",
    date: "Oct 2022",
    points: [
      "Acquired proficiency in Decision Trees, Neural Networks, Logistic Regression, and Recommender Systems.",
    ],
    credential: "link-to-certificate", // Add your credential link here
  },
  {
    title: "Convolutional Neural Networks",
    type: "Coursera",
    icon: coursera,
    iconBg: "#2A73BA",
    date: "Jul 2023",
    points: [
      "Gained expertise in Deep Learning, Facial Recognition, CNNs, TensorFlow, Object Detection, and Segmentation.",
    ],
    credential: "link-to-certificate",
  },
  {
    title: "Google Data Analytics",
    type: "Coursera",
    icon: google,
    iconBg: "#4285F4",
    date: "Sept 2023",
    points: [
      "Mastered data cleaning, analysis, and visualization using SQL, R programming, and Tableau.",
    ],
    credential: "link-to-certificate",
  },
  {
    title: "Google Advanced Data Analytics",
    type: "Coursera",
    icon: google,
    iconBg: "#4285F4",
    date: "Sept 2023",
    points: [
      "Acquired skills in building regression and machine learning models for data analysis and interpretation.",
    ],
    credential: "link-to-certificate",
  },
];

// const projects = [
//   {
//     name: "CrowdLens",
//     description:
//       "A deep learning-based system designed to accurately count people in crowded environments. It uses a ResNet50 backbone with a Feature Pyramid Network (FPN) to improve detection accuracy in dense scenes and is optimized for real-time performance.",
//     tags: [
//       { name: "Python", color: "blue-text-gradient" },
//       { name: "PyTorch", color: "pink-text-gradient" },
//       { name: "ResNet50", color: "green-text-gradient" },
//       { name: "Computer Vision", color: "orange-text-gradient" },
//     ],
//     image: person_counting,
//     source_code_link: "https://github.com/arkaghosh566",
//   },
//   {
//     name: "ShadowTrack",
//     description:
//       "An automated pipeline that integrates YOLOv8 with the Segment Anything Model (SAM) to extract high-quality, high-fidelity human silhouettes from surveillance video. These masks are crucial for downstream gait analysis tasks like generating Gait Energy Images (GEI).",
//     tags: [
//       { name: "YOLOv8", color: "blue-text-gradient" },
//       { name: "SAM", color: "green-text-gradient" },
//       { name: "OpenCV", color: "pink-text-gradient" },
//       { name: "Gait Analysis", color: "orange-text-gradient" },
//     ],
//     image: gait_analysis,
//     source_code_link: "https://github.com/arkaghosh566",
//   },
//   {
//     name: "FollicleNet",
//     description:
//       "A specialized computer vision model capable of identifying minute hair follicles from dermatological images and calculating their precise orientation angles. This contributes to advancements in automated cosmetic and medical analysis.",
//     tags: [
//       { name: "Deep Learning", color: "blue-text-gradient" },
//       { name: "TensorFlow", color: "pink-text-gradient" },
//       { name: "Image Processing", color: "green-text-gradient" },
//     ],
//     image: hair_follicle,
//     source_code_link: "https://github.com/arkaghosh566",
//   },
//   {
//     name: "HeadMark",
//     description:
//       "A head detection system using YOLOv8, fine-tuned on a custom merged dataset of colored and black-and-white images to ensure generalization across visual domains. Ensemble learning with multiple model variants was used to boost prediction robustness.",
//     tags: [
//       { name: "YOLOv8", color: "blue-text-gradient" },
//       { name: "Fine-Tuning", color: "green-text-gradient" },
//       { name: "Ensemble Learning", color: "pink-text-gradient" },
//     ],
//     image: head_detection,
//     source_code_link: "https://github.com/arkaghosh566",
//   },
//   {
//     name: "TrackVerse",
//     description:
//       "A research and implementation project focused on evaluating the performance of various state-of-the-art tracking algorithms, including SORT, DeepSORT, ByteTrack, and BoT-SORT, across diverse surveillance scenarios to enhance tracking accuracy and robustness.",
//     tags: [
//       { name: "SORT", color: "blue-text-gradient" },
//       { name: "DeepSORT", color: "green-text-gradient" },
//       { name: "Object Tracking", color: "pink-text-gradient" },
//     ],
//     image: object_tracking,
//     source_code_link: "https://github.com/arkaghosh566",
//   },
//   {
//     name: "SafeVision",
//     description:
//       "A real-time computer vision–based employee tracking system designed to monitor workplace activity, enhancing operational oversight and accountability. The system leverages state-of-the-art deep learning models for robust face and body detection, enabling seamless large-scale deployment.",
//     tags: [
//       { name: "PyTorch", color: "blue-text-gradient" },
//       { name: "Computer Vision", color: "green-text-gradient" },
//       { name: "ResNet100", color: "pink-text-gradient" },
//       { name: "SCRFD-10G", color: "orange-text-gradient" },
//     ],
//     image: safevision,
//     source_code_link: "https://github.com/arkaghosh566",
//   },
// ];

const projects = [
  // --- PROCENTRIS ---
  {
    name: "InvoiceAI",
    description:
      "An AI-powered medical invoice and insurance-claim pipeline that extracts structured data from PDF and image inputs and maps it to a predefined JSON schema using Gemini Flash. Includes a UI-based validation layer for beneficiary, amount, and claim details to ensure accuracy before downstream processing.",
    tags: [
      { name: "Gemini Flash", color: "blue-text-gradient" },
      { name: "OCR", color: "green-text-gradient" },
      { name: "Document AI", color: "pink-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
    ],
    image: invoiceai,
  },
  {
    name: "OmniTranslate",
    description:
      "An end-to-end document translation pipeline that accepts PNG, JPG, and PDF inputs, performs OCR to extract text, translates it via Gemini Flash, and reconstructs a translated PDF while preserving the original layout, formatting, and text positioning.",
    tags: [
      { name: "Gemini Flash", color: "blue-text-gradient" },
      { name: "OCR", color: "green-text-gradient" },
      { name: "PDF Reconstruction", color: "pink-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
    ],
    image: omnitranslate,
  },
  {
    name: "EmsAI",
    description:
      "An incremental email-thread summarization system that updates stored summaries using previous summaries combined with newly received messages. Integrates Gemini and Qwen through a switchable LLM architecture, allowing the summarization backend to be swapped without changing the pipeline.",
    tags: [
      { name: "Gemini", color: "blue-text-gradient" },
      { name: "Qwen", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
      { name: "NLP", color: "orange-text-gradient" },
    ],
    image: emsai,
  },

  // --- CAPSITECH ---
  {
    name: "SafeVision",
    description:
      "A real-time computer vision-based employee tracking system designed to monitor workplace activity and enhance operational oversight. Uses SCRFD for face detection and a ResNet50-based ArcFace model for long-distance identity recognition, enabling seamless large-scale deployment.",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "green-text-gradient" },
      { name: "ArcFace", color: "pink-text-gradient" },
      { name: "SCRFD", color: "orange-text-gradient" },
    ],
    image: safevision,
  },
  {
    name: "CrowdLens",
    description:
      "A deep learning-based system designed to accurately count people in crowded environments. Uses a ResNet50 backbone with a Feature Pyramid Network (FPN) to improve detection accuracy in dense scenes, optimized for real-time inference performance.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "ResNet50", color: "green-text-gradient" },
      { name: "Computer Vision", color: "orange-text-gradient" },
    ],
    image: person_counting,
  },
  {
    name: "FollicleNet",
    description:
      "A specialized computer vision model that identifies minute hair follicles from dermatological images and calculates their precise orientation angles using Hough Line Transform analysis, contributing to advancements in automated cosmetic and medical diagnostics.",
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
      { name: "YOLO", color: "pink-text-gradient" },
      { name: "Image Processing", color: "green-text-gradient" },
      { name: "Hough Transform", color: "orange-text-gradient" },
    ],
    image: hair_follicle,
  },
];

// Arka's resume does not have testimonials.
// You can add some here when you get them.
const testimonials = [];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};
