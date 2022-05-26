import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Link,
  Typography,
} from "@mui/material";

interface Props {
  url: string;
  pic_medium: string;
  name: string;
  artista: string;
  rank: string;
}

export default function CardMusicaHome({
  url,
  pic_medium,
  name,
  artista,
  rank,
}: Props) {
  return (
    <Card sx={{ width: 280, marginBottom: 2, height: 320 }} className="bg-dark">
      <CardMedia component="img" height="150px" image={pic_medium} className="imagem" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="text-light"
        >
          {artista}
        </Typography>
        <Typography variant="body2" className="text-light">
          {name}
        </Typography>

        <Typography variant="body2" className="text-light mt-2">
          Rank: {rank}
        </Typography>
      </CardContent>

      <CardActions>
        <Link href={url}>
          <Button size="small">Escute agora</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
