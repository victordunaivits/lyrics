import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardMusica from "../components/CardMusica";
import { Musica } from "../types";

interface Props {
  musica: string;
  setIdMusica: React.Dispatch<React.SetStateAction<string>>;
  idMusica: string;
}

export default function Musicas({ musica, setIdMusica, idMusica }: Props) {
  const [apiMusica, setApiMusica] = useState<Musica[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMusicas() {
      fetch(`https://api.vagalume.com.br/search.excerpt?q=${musica}`)
        .then((res) => res.json())
        .then((res) => {
          setApiMusica(res.response.docs);
          setIdMusica(res.response.docs.id);
        });
    }

    fetchMusicas();
  }, [musica]);

  return (
    <>
      {musica ? (
        <Grid container flexDirection="column">
          {apiMusica.map((item) => (
            <Grid item marginY={1} marginX={2}>
              <CardMusica
                navigate={navigate}
                setIdMusica={setIdMusica}
                title={item.title}
                band={item.band}
                id={item.id}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          className="w-100"
          height="80vh"
        >
          Música não encontrada!
        </Grid>
      )}
    </>
  );
}
