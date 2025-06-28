import { Button, Card, Container } from "react-bootstrap";

const Clima = ({ datoClima }) => {
  if (!datoClima || Object.keys(datoClima).length === 0) return null;

  const { name, sys, main, weather, wind } = datoClima;
  const icono = weather[0]?.icon;
  const descripcion = weather[0]?.description;
  return (
    <Container className="d-flex justify-content-center">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://openweathermap.org/img/wn/${icono}@2x.png`}
          />
          <Card.Body>
            <Card.Title>
              {name}, {sys?.country}
            </Card.Title>
            <Card.Text>🌤️{descripcion} </Card.Text>
            <Card.Text>
              🌡️{main?.temp}°C - Sensacion: {main?.feels_like}°C
            </Card.Text>
            <Card.Text>💧Humedad: {main?.humidity}%</Card.Text>
            <Card.Text>🌬️Viento {wind?.speed}</Card.Text>
            <Card.Text></Card.Text>
            <Button
            className="w-100"
              variant="info"
              href={`https://openweathermap.org/find?q=${name}`}
              target="_blank"
            >
              Ver más
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Clima;
