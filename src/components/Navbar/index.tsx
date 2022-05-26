import { IconButton, InputBase } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  setMusica: React.Dispatch<React.SetStateAction<string>>;
  musica: string;
}

export default function SearchAppBar({ setMusica, musica }: Props) {
  const [nomeMusica, setNomeMusica] = useState<string>("");
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="bg-dark">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          LYRICS
        </Typography>

        <Box className="d-flex">
          <InputBase
            placeholder="Pesquise uma música..."
            className="text-white input-size"
            onChange={(e) => setNomeMusica(e.target.value)}
          />

          <IconButton
            type="submit"
            aria-label="search"
            onClick={() => {
              navigate("/musicas");
              setMusica(nomeMusica);
            }}
          >
            <SearchIcon className="text-light" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
