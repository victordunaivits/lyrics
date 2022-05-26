import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavigateFunction } from "react-router-dom";

interface Props {
  band: string;
  title: string;
  setIdMusica: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  navigate: NavigateFunction;
}

export default function CardMusica({
  band,
  title,
  setIdMusica,
  id,
  navigate,
}: Props) {
  return (
    <Card className="border-primary">
      <Card.Body>
        <Card.Title>
          {band} - {title}
        </Card.Title>
        <Card.Text>
          Veja agora a letra da música {title} da banda {band}.
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/letra");
            setIdMusica(id);
          }}
        >
          Veja a letra
        </Button>
      </Card.Body>
    </Card>
  );
}
