import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardComponent from "../components/Card";
import CardNoticia from "../components/CardNoticia";
import Carrossel from "../components/Carrossel";
import { ICard, IMusica, NoticiaCard } from "../types";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CardMusicaHome from "../components/CardMusicaHome";

export const key = "bceb3f4494e54d18493444c3a5e1542c";

export default function Home() {
  const [hotspots, setHotspots] = useState<ICard[]>([]);
  const [noticias, setNoticias] = useState<NoticiaCard[]>([]);
  const [musicas, setMusicas] = useState<IMusica[]>([]);
  console.log(musicas);

  useEffect(() => {
    async function fetchHotspots() {
      await fetch(`https://api.vagalume.com.br/hotspots.php?apikey=${key}`)
        .then((res) => res.json())
        .then((res) => setHotspots(res.hotspots));
    }

    async function fetchNoticias() {
      await fetch(`https://www.vagalume.com.br/news/index.js`)
        .then((res) => res.json())
        .then((res) => setNoticias(res.news));
    }

    async function fetchMusicas() {
      await fetch(
        `https://api.vagalume.com.br/rank.php?type=mus&period=week&periodVal=202234&scope=all&limit=10&apikey=${key}`
      )
        .then((res) => res.json())
        .then((res) => setMusicas(res.mus.week.all));
    }

    fetchMusicas();
    fetchNoticias();
    fetchHotspots();
  }, []);

  return (
    <>
      <Carrossel />

      <Grid container>
        <Grid
          item
          md={4}
          sm={12}
          className="d-flex flex-column w-100 bg-transparent"
          alignItems="center"
        >
          <Box className="d-flex align-items-center" marginY={2}>
            <Typography component="h1" variant="h6" marginRight={1}>
              Hotspots
            </Typography>

            <WhatshotIcon fontSize="small" />
          </Box>

          {hotspots.map((item) => (
            <CardComponent
              key={item.id}
              titulo={item.title}
              image={item.pic_src}
              descricao={item.descr}
              url={item.link}
            />
          ))}
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          className="d-flex flex-column w-100 bg-transparent"
          alignItems="center"
        >
          <Box className="d-flex align-items-center" marginY={2}>
            <Typography component="h1" variant="h6" marginRight={1}>
              Músicas recomendadas
            </Typography>
            <MusicNoteIcon fontSize="small" />
          </Box>

          {musicas.map((item) => (
            <CardMusicaHome
              artista={item.art.name}
              name={item.name}
              pic_medium={item.art.pic_medium}
              url={item.url}
              rank={item.rank}
            />
          ))}
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          className="d-flex flex-column w-100 bg-transparent"
          alignItems="center"
        >
          <Box className="d-flex align-items-center" marginY={2}>
            <Typography component="h1" variant="h6" marginRight={1}>
              Notícias
            </Typography>
            <NewspaperIcon fontSize="small" />
          </Box>

          {noticias.map((item) => (
            <CardNoticia
              key={item.id}
              descricao={item.kicker}
              titulo={item.headline}
              image={item.images[2]}
              url={item.url}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
