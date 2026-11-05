// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "TutorSphere | Find and Book Tutors",
//   description: "Learn from the best or share your knowledge with the world.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`dark ${geistSans.variable} ${geistMono.variable}`}
//     >
//       <body className="bg-[#0b0705] text-zinc-100 min-h-screen flex flex-col font-sans antialiased selection:bg-[#ff5722] selection:text-white">
        
//         <Navbar />
//         <Hero></Hero>
//         <About></About>
//         <Skills></Skills>
//         <Projects></Projects>
        

//         {/* pt-24 যোগ করা হয়েছে যাতে ফিক্সড নেভবারের নিচে লেখা না হারায় */}
//         <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
//           {children}
//         </main>
        
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rimon Hasan | Web Developer",
  description: "Personal portfolio website of Rimon Hasan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b0705] text-zinc-100 min-h-screen antialiased`}
      >
        <Navbar />

        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education></Education>
          <Contact></Contact>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
