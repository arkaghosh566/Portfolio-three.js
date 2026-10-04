// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const RESUME = `Name: Arka Ghosh. Email: arkaghosh566@gmail.com. Phone: +91-7044110254.
// GitHub: https://github.com/arkaghosh566
// LinkedIn: https://www.linkedin.com/in/arka-ghosh-aaab5a270/

// TOTAL EXPERIENCE: 2.5+ years as a Machine Learning Engineer.

// Education: B.Tech in Computer Science and Engineering (AI & ML) from Future Institute of Technology, MAKAUT, July 2024, CGPA 8.81.

// Work Experience:
// - Software Engineer (AIML) at Procentris India Private Limited (May 2026 - Present, Kolkata): OmniTranslate, InvoiceAI, EmsAI, Document Authenticity Analysis.
// - Assistant ML Engineer at Capsitech (June 2024 - April 2026, Jodhpur): employee tracking with SCRFD + ArcFace, hair follicle detection, crowd counting with ResNet50 + FPN, gait analysis with YOLOv8 + SAM, multi-object tracking research.

// Skills: Python, C++, Java, JavaScript, SQL, TensorFlow, PyTorch, OpenCV, Scikit-learn, Pandas, NumPy, MongoDB, Docker, Flask, Streamlit.

// Certifications: Machine Learning (Coursera), Convolutional Neural Networks (Coursera), Google Data Analytics, Google Advanced Data Analytics.

// Languages: English, Bengali, Hindi.`;

// const SYSTEM_PROMPT = `You are a helpful assistant for Arka Ghosh's portfolio. Answer questions about Arka using ONLY the information below. If the answer is not in the information, say: "I don't have that information. You can reach Arka at arkaghosh566@gmail.com." Keep answers to 1-2 sentences. Speak about Arka in third person.

// INFORMATION:
// ${RESUME}`;

// // Manual Qwen2.5 chat template
// const buildPrompt = (userQuestion) =>
//   `<|im_start|>system\n${SYSTEM_PROMPT}<|im_end|>\n<|im_start|>user\n${userQuestion}<|im_end|>\n<|im_start|>assistant\n`;

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       content:
//         "Hi! I'm Arka's AI assistant. Ask me about his experience, skills, or projects.",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [modelReady, setModelReady] = useState(false);
//   const [loadProgress, setLoadProgress] = useState(0);
//   const [errorDetail, setErrorDetail] = useState(null);
//   const generatorRef = useRef(null);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isLoading]);

//   useEffect(() => {
//     if (isOpen) {
//       const t = setTimeout(() => inputRef.current?.focus(), 200);
//       return () => clearTimeout(t);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen || generatorRef.current || modelReady) return;

//     let cancelled = false;

//     (async () => {
//       setIsLoading(true);
//       try {
//         const { pipeline, env } = await import("@huggingface/transformers");
//         env.allowLocalModels = false;

//         const generator = await pipeline(
//           "text-generation",
//           "onnx-community/Qwen2.5-0.5B-Instruct",
//           {
//             dtype: "q4",
//             device: "wasm",
//             progress_callback: (p) => {
//               if (p.status === "progress" && p.progress) {
//                 setLoadProgress(Math.round(p.progress));
//               }
//             },
//           }
//         );

//         if (cancelled) return;
//         generatorRef.current = generator;
//         setModelReady(true);
//       } catch (err) {
//         console.error("Model load failed:", err);
//         setErrorDetail("Load: " + (err?.message || String(err)));
//         setMessages((m) => [
//           ...m,
//           {
//             role: "assistant",
//             content:
//               "Sorry, the AI model failed to load. Try Chrome or Edge on desktop.",
//           },
//         ]);
//       } finally {
//         if (!cancelled) setIsLoading(false);
//       }
//     })();

//     return () => {
//       cancelled = true;
//     };
//   }, [isOpen, modelReady]);

//   const sendMessage = async () => {
//     const trimmed = input.trim();
//     if (!trimmed || isLoading || !modelReady) return;

//     setMessages((m) => [...m, { role: "user", content: trimmed }]);
//     setInput("");
//     setIsLoading(true);
//     setErrorDetail(null);

//     try {
//       const prompt = buildPrompt(trimmed);

//       const out = await generatorRef.current(prompt, {
//         max_new_tokens: 120,
//         do_sample: false,
//         return_full_text: false,
//       });

//       console.log("RAW OUTPUT:", JSON.stringify(out));

//       let reply = "";

//       if (Array.isArray(out) && out[0]) {
//         if (typeof out[0].generated_text === "string") {
//           reply = out[0].generated_text;
//         } else if (Array.isArray(out[0].generated_text)) {
//           const last = out[0].generated_text[out[0].generated_text.length - 1];
//           reply = last?.content || "";
//         }
//       }

//       // Strip any template tokens that leaked through
//       reply = reply
//         .replace(/<\|im_end\|>/g, "")
//         .replace(/<\|im_start\|>/g, "")
//         .replace(/^assistant\s*/i, "")
//         .trim();

//       if (!reply) {
//         reply = "I couldn't generate a response. Please try again.";
//       }

//       setMessages((m) => [...m, { role: "assistant", content: reply }]);
//     } catch (err) {
//       console.error("INFERENCE ERROR:", err);
//       const detail = err?.message || String(err);
//       setErrorDetail("Inference: " + detail);
//       setMessages((m) => [
//         ...m,
//         {
//           role: "assistant",
//           content:
//             "Something went wrong. Please try again, or email Arka at arkaghosh566@gmail.com.",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <>
//       <motion.button
//         onClick={() => setIsOpen((v) => !v)}
//         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isOpen ? (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         ) : (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//             />
//           </svg>
//         )}
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[520px] bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
//           >
//             <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
//               <h3 className="font-semibold text-sm">Arka&apos;s AI Assistant</h3>
//               <p className="text-xs text-white/80">
//                 {modelReady
//                   ? "Ready — runs locally in your browser"
//                   : isLoading && loadProgress > 0
//                   ? `Loading model… ${loadProgress}%`
//                   : "Loading model…"}
//               </p>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 space-y-3">
//               {messages.map((msg, idx) => (
//                 <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
//                   <div
//                     className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
//                       msg.role === "user"
//                         ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-sm"
//                         : "bg-gray-800 text-gray-100 rounded-bl-sm"
//                     }`}
//                   >
//                     {msg.content}
//                   </div>
//                 </div>
//               ))}

//               {errorDetail && (
//                 <div className="text-xs text-red-400 bg-red-950/40 border border-red-900 rounded p-2 break-words">
//                   Debug: {errorDetail}
//                 </div>
//               )}

//               {isLoading && modelReady && (
//                 <div className="flex justify-start">
//                   <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
//                     <div className="flex gap-1">
//                       <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
//                       <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
//                       <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div ref={messagesEndRef} />
//             </div>

//             <div className="p-3 border-t border-white/10 flex gap-2">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder={modelReady ? "Ask about my skills, experience..." : "Model loading…"}
//                 disabled={!modelReady || isLoading}
//                 className="flex-1 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={!modelReady || isLoading || !input.trim()}
//                 className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Chatbot;


import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -------- KNOWLEDGE BASE --------
// Each entry: keywords to match + the answer.
// The first matching entry wins. Order matters — put specific ones before generic.
const QA = [
  // --- EXPERIENCE (specific first) ---
  {
    keywords: ["total experience", "how many years", "years of experience", "how long"],
    answer: "Arka has 2.5+ years of experience as a Machine Learning Engineer.",
  },
  {
    keywords: ["current company", "current job", "currently", "now working", "where does he work now"],
    answer: "Arka is currently a Software Engineer (AIML) at Procentris India Private Limited, Kolkata, since May 2026.",
  },
  {
    keywords: ["procentris"],
    answer: "At Procentris India, Arka builds GenAI systems: OmniTranslate (document translation), InvoiceAI (medical invoice extraction), EmsAI (email summarization), and Document Authenticity Analysis (fraud detection).",
  },
  {
    keywords: ["capsitech"],
    answer: "At Capsitech, Arka worked as an Assistant ML Engineer (June 2024 – April 2026), building real-time employee tracking with SCRFD + ArcFace, hair follicle detection, crowd counting (ResNet50 + FPN), gait analysis (YOLOv8 + SAM), and multi-object tracking research.",
  },
  {
    keywords: ["experience", "work history", "career", "jobs", "worked"],
    answer: "Arka has 2.5+ years of experience. Currently a Software Engineer (AIML) at Procentris India (May 2026 – Present). Previously an Assistant ML Engineer at Capsitech (June 2024 – April 2026).",
  },

  // --- SKILLS ---
  {
    keywords: ["computer vision", "cv", "vision", "opencv"],
    answer: "Computer Vision is one of Arka's strongest areas. He's built person counters, hair follicle detectors, multi-object trackers, and identity recognition systems using YOLO, ResNet, SCRFD, ArcFace, and SAM.",
  },
  {
    keywords: ["deep learning", "neural network", "dl"],
    answer: "Arka works extensively with Deep Learning — TensorFlow, PyTorch, Keras, and OpenCV. His projects include CNNs for detection, segmentation (SAM), and multi-object tracking.",
  },
  {
    keywords: ["generative ai", "genai", "gen ai", "llm", "gemini", "qwen"],
    answer: "Arka works with Generative AI at Procentris, integrating Gemini Flash and Qwen into document translation, invoice extraction, email summarization, and fraud detection pipelines.",
  },
  {
    keywords: ["skill", "tech stack", "technologies", "languages", "tools", "what does he know"],
    answer: "Languages: Python, C++, Java, JavaScript, SQL. Frameworks: TensorFlow, PyTorch, OpenCV, Scikit-learn, Keras, Pandas, NumPy. Tools: Docker, Flask, Streamlit, MongoDB.",
  },
  {
    keywords: ["python"],
    answer: "Yes, Python is Arka's primary language — used across all his ML and CV work, plus Flask and Streamlit for deployment.",
  },

  // --- PROJECTS ---
  {
    keywords: ["project", "built", "portfolio", "created"],
    answer: "Recent projects: InvoiceAI, OmniTranslate, EmsAI (Procentris); SafeVision, CrowdLens, FollicleNet (Capsitech). Scroll to the Projects section for full details.",
  },
  {
    keywords: ["invoiceai", "invoice ai", "invoice"],
    answer: "InvoiceAI is an AI-powered medical invoice and insurance-claim pipeline that extracts structured data from PDF/image inputs and maps it to a JSON schema using Gemini Flash, with UI-based validation.",
  },
  {
    keywords: ["omnitranslate", "translate", "translation"],
    answer: "OmniTranslate translates PNG/JPG/PDF documents using OCR and Gemini Flash, then reconstructs the output as a PDF while preserving the original layout and formatting.",
  },
  {
    keywords: ["emsai", "email", "summariz"],
    answer: "EmsAI is an incremental email-thread summarization system that updates stored summaries from previous ones plus new messages, using a switchable Gemini/Qwen architecture.",
  },
  {
    keywords: ["safevision", "safe vision", "employee tracking"],
    answer: "SafeVision is a real-time employee tracking system using SCRFD for face detection and ResNet50-based ArcFace for long-distance identity recognition.",
  },
  {
    keywords: ["crowdlens", "crowd", "person count", "counting"],
    answer: "CrowdLens counts people in crowded environments using a ResNet50 backbone with a Feature Pyramid Network (FPN), optimized for real-time inference.",
  },
  {
    keywords: ["folliclenet", "follicle", "hair"],
    answer: "FollicleNet detects hair follicles from dermatological images and computes their orientation angles using YOLO and Hough Line Transform.",
  },
  {
    keywords: ["tracking", "sort", "deepsort", "bytetrack"],
    answer: "Arka researched and implemented SORT, DeepSORT, ByteTrack, BoT-SORT, and OC-SORT for multi-object tracking across surveillance scenarios.",
  },
  {
    keywords: ["gait", "silhouette", "sam"],
    answer: "He built a pipeline using YOLOv8 and Segment Anything Model (SAM) to extract high-quality gait silhouettes for downstream analysis like Gait Energy Images.",
  },

  // --- EDUCATION ---
  {
    keywords: ["education", "study", "college", "degree", "university", "b.tech", "btech", "graduated"],
    answer: "Arka holds a B.Tech in Computer Science and Engineering (AI & ML) from Future Institute of Technology, MAKAUT (July 2024), with a CGPA of 8.81.",
  },
  {
    keywords: ["cgpa", "gpa", "marks"],
    answer: "Arka graduated with a CGPA of 8.81 out of 10 in his B.Tech.",
  },

  // --- CERTIFICATIONS ---
  {
    keywords: ["certification", "certificate", "course", "coursera"],
    answer: "Certifications: Machine Learning (Coursera), Convolutional Neural Networks (Coursera), Google Data Analytics, and Google Advanced Data Analytics.",
  },

  // --- CONTACT ---
  {
    keywords: ["contact", "email", "reach", "hire", "phone", "call"],
    answer: "You can reach Arka at arkaghosh566@gmail.com or +91-7044110254. LinkedIn: linkedin.com/in/arka-ghosh-aaab5a270",
  },
  {
    keywords: ["linkedin"],
    answer: "Arka's LinkedIn: https://www.linkedin.com/in/arka-ghosh-aaab5a270/",
  },
  {
    keywords: ["github"],
    answer: "Arka's GitHub: https://github.com/arkaghosh566",
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: "You can view and download Arka's resume from the Resume button in the About section.",
  },

  // --- LOCATION & PERSONAL ---
  {
    keywords: ["location", "where", "based", "city", "live"],
    answer: "Arka is based in Kolkata, India.",
  },
  {
    keywords: ["language"],
    answer: "Arka speaks English (Full Professional Proficiency), Bengali (Native), and Hindi (Limited Working Proficiency).",
  },
  {
    keywords: ["available", "availability", "notice period", "joining"],
    answer: "For availability, notice period, or joining details, please contact Arka directly at arkaghosh566@gmail.com.",
  },
  {
    keywords: ["salary", "ctc", "compensation", "pay"],
    answer: "Compensation details are best discussed directly with Arka. Reach him at arkaghosh566@gmail.com.",
  },

  // --- SMALL TALK ---
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    answer: "Hi! Ask me about Arka's experience, skills, projects, education, or how to contact him.",
  },
  {
    keywords: ["thanks", "thank you", "thank"],
    answer: "You're welcome! Let me know if you'd like to know anything else about Arka.",
  },
  {
    keywords: ["who is arka", "about arka", "about him", "tell me about"],
    answer: "Arka Ghosh is a Machine Learning Engineer with 2.5+ years of experience in Computer Vision, Deep Learning, and Generative AI. He's currently at Procentris India and previously worked at Capsitech.",
  },
];

const FALLBACK =
  "I don't have that information in Arka's resume. You can reach him directly at arkaghosh566@gmail.com or connect on LinkedIn: linkedin.com/in/arka-ghosh-aaab5a270";

// -------- MATCHING --------
function findAnswer(question) {
  const q = question.toLowerCase().trim();

  let bestAnswer = null;
  let bestScore = 0;

  for (const item of QA) {
    let score = 0;
    for (const kw of item.keywords) {
      // Whole-word-ish match: keyword as substring, plus bonus if it starts a word
      if (q.includes(kw)) {
        score += kw.length; // longer keyword = more specific = higher score
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  }

  return bestAnswer || FALLBACK;
}

// -------- SUGGESTED QUESTIONS --------
const SUGGESTIONS = [
  "How many years of experience?",
  "What's his current company?",
  "What are his skills?",
  "Tell me about his projects",
  "How can I contact him?",
];

// -------- COMPONENT --------
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Arka's assistant. Ask me anything about his experience, skills, or projects — or pick a suggestion below.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const send = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;

    const reply = findAnswer(q);

    setMessages((m) => [
      ...m,
      { role: "user", content: q },
      { role: "assistant", content: reply },
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[520px] bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h3 className="font-semibold text-sm">Arka&apos;s Assistant</h3>
              <p className="text-xs text-white/80">Instant answers — no wait</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-sm"
                        : "bg-gray-800 text-gray-100 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {messages.length <= 1 && (
                <div className="pt-2 space-y-2">
                  <p className="text-xs text-gray-500 px-1">Suggested:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-xs px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 border border-white/10 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my skills, experience..."
                className="flex-1 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;