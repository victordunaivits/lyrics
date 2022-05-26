import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Letra from "./pages/Letra";
import Musicas from "./pages/Musicas";

export default function App() {
  const [musica, setMusica] = useState<string>("");
  const [idMusica, setIdMusica] = useState<string>("");
  const musicaFormatada = musica.replace(/\s+/g, "%");

  return (
    <CssBaseline>
      <BrowserRouter>
        <Navbar musica={musicaFormatada.toLowerCase()} setMusica={setMusica} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/musicas"
            element={
              <Musicas
                idMusica={idMusica}
                setIdMusica={setIdMusica}
                musica={musicaFormatada}
              />
            }
          />
          <Route path="/letra" element={<Letra id={idMusica} />} />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}
