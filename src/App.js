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

function App() {
  return (
    <>
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
