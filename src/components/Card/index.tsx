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
  image: string,
  titulo: string,
  descricao: string,
  url: string
}

export default function CardComponent({ image, titulo, descricao, url }: Props) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }} className="bg-dark">
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className="text-light">
          {titulo}
        </Typography>
        <Typography variant="body2" className="text-light">
          {descricao}
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
