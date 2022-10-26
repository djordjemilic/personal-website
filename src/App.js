import { Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "../src/globals/global-styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/components/themes/themes";
import Main from "./components/main/main.component";
import About from "./components/about/about.component";
import Blog from "./components/blog/blog.component";
import Work from "./components/work/work.component";
import MySkills from "./components/my-skills/my-skills.component";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="64, 64, 64"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={7}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<MySkills />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
