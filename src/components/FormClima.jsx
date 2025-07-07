import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { WiDaySunny } from 'react-icons/wi';

const FormClima = ({ pais, setPais, ciudad, setCiudad, obtenerClima,setError }) => {
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          obtenerClima();
        }}
      >
        <div className="d-flex align-items-center justify-content-center gap-3 my-3">
          <Form.Group className="mb-3" controlId="pais">
            <Form.Label>Escriba su Pais🌍</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej; ar"
              value={pais}
              onChange={(e) =>{ setPais(e.target.value)
                setError("")
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ciudad o provincia🏙️</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej;Tucumán"
              value={ciudad}
              onChange={(e) => {setCiudad(e.target.value)
                setError("")
              }}
            />
          </Form.Group>
          <Button type="submit">Consultar Clima <WiDaySunny size={30}color="yellow" /> </Button>
        </div>
      </Form>
    </>
  );
};

export default FormClima;
<h1>desde form</h1>;
