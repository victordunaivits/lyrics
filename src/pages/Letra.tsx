import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ILetra } from "../types";
import { key } from "./Home";

interface Props {
  id: string;
}

export default function Letra({ id }: Props) {
  const [apiLetra, setApiLetra] = useState<ILetra[]>([]);
  const [nomeBanda, setNomeBanda] = useState<string>();
  const [idBanda, setIdBanda] = useState<string>();
  const [traducao, setTraducao] = useState<boolean>(false);
  const [apiBanda, setApiBanda] = useState<string>();

  useEffect(() => {
    async function fetchLetra() {
      await fetch(
        `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`
      )
        .then((res) => res.json())
        .then((res) => {
          setIdBanda(res.art.id);
          setApiLetra(res.mus);
          setNomeBanda(res.art.name);
          setTraducao(res.mus[0].translate[0].text);
        });
      fetchImagemArtista();
    }

    async function fetchImagemArtista() {
      await fetch(`https://api.vagalume.com.br/image.php?bandID=${idBanda}`)
        .then((res) => res.json())
        .then((res) => setApiBanda(res.images[0].url));
    }

    fetchLetra();
  }, [id, idBanda]);

  return (
    <>
      {id ? (
        <Grid container height="93.4vh" flexGrow={1}>
          {apiLetra.map((item) => (
            <Grid
              item
              md={7}
              className="w-100 d-flex flex-column align-items-center"
              paddingX="10%"
            >
              <Typography variant="h5" fontWeight={600} marginTop={5}>
                {nomeBanda}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {item.name}
              </Typography>
              <Typography paddingTop={5} paddingBottom={2}>
                {item.text}
              </Typography>

              {traducao !== false ? (
                <>
                  <Button className="text-primary">Tradução</Button>
                  <Typography paddingTop={2} paddingBottom={2}>
                    {item.translate[0].text}
                  </Typography>
                </>
              ) : (
                <Button disabled>
                  Ainda não existe tradução para esta letra!
                </Button>
              )}
            </Grid>
          ))}
          <Grid
            item
            md={5}
            className="w-100 d-flex flex-column align-items-center bg-dark"
            paddingX="10%"
          >
            <Typography
              variant="h5"
              fontWeight={600}
              marginTop={5}
              marginBottom={3}
              className="text-light"
            >
              {nomeBanda}
            </Typography>

            {apiBanda ? (
              <img src={apiBanda} className="imagem pb-5" />
            ) : (
              <p className="text-light">Imagem não encotrada!</p>
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          className="w-100"
          height="80vh"
        >
          Letra não encontrada!
        </Grid>
      )}
    </>
  );
}
