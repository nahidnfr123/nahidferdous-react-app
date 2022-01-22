import styled, {ThemeProvider} from "styled-components"
import './App.css';
import {Routes, Route} from "react-router-dom";
import {lightTheme, darkTheme, GlobalStyles} from "./styles/globalStyles";
import {useDarkMode} from "./styles/useDarkMode";

// Page Components
import About from "./pages/About";
import Work from "./pages/Work";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Lamp from "./components/Layouts/Lamp/Lamp";
import Experience from "./pages/Experience";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
`

function App() {
    const [theme, toggleTheme] = useDarkMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={themeMode}>
            <Container>
                <GlobalStyles/>
                <div className="App">
                    <Lamp theme={theme} toggleTheme={toggleTheme}/>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route exact index element={<Home/>}/>
                            <Route exact path="experience" element={<Experience/>}/>
                            <Route exact path="work" element={<Work/>}/>
                            <Route path='work/*' element={<Project/>}/>
                            <Route exact path="hobbies" element={<Hobbies/>}/>
                            <Route exact path="about" element={<About/>}/>
                            <Route exact path="contact" element={<Contact/>}/>
                            <Route exact path="*" element={<NoPage/>}/>
                        </Route>
                    </Routes>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default App;
