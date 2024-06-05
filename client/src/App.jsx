import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme.js";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    overflow-x: hidden;
    overflow-y: hidden;
    transition: all 0.2s ease;
  `;

  const Wrapper = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
  `;

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact></Route>
              <Route path="/create-post" element={<CreatePost />} exact></Route>
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
