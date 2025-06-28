import FormClima from "./components/FormClima";
import Clima from "./components/Clima";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

function App() {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "505093f53ef7dcf24dee4a2fd32a302a";
  const obtenerClima = async () => {
    if (!pais || ciudad === "") {
      setError("Debes escribir un pais y una ciudad");
      return;
    }
    try {
      setSpinner(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}&units=metric&lang=es`;
      const clima = await fetch(url);
      if (clima.status === 200) {
        const datos = await clima.json();
        setClima(datos);
        setSpinner(false);
      } else {
        setError("no se encontraron datos para esa ciudad o pais");
        setClima({});
        setSpinner(false);
      }
    } catch(error) {
      console.error(error);
      setError("Error al consultar el clima ");
      setSpinner(false);
    }
  };

  return (
    <>
      {spinner ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <FormClima
            pais={pais}
            setPais={setPais}
            ciudad={ciudad}
            setCiudad={setCiudad}
            obtenerClima={obtenerClima}
            setError={setError}
          ></FormClima>
          <Clima datoClima={clima}></Clima>
        </>
      )}
      {error && <p className="text-danger text-center fw-bold">{error}</p>}
    </>
  );
}

export default App;
