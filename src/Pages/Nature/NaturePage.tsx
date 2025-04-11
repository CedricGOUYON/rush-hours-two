import PexelsGallery from "/Users/Cédric/Desktop/LOCAL/rush-hours-2/src/Components/Api/PexelsGallery";
import Header from "../../Components/Header/Header";

function NaturePage() {
  return (
    <>
      <Header />
      <p id="experience">
        <strong>Profiter de l'instant présent !</strong>
      </p>
      <p>Vivre pleinement l'instant présent, c'est savourer chaque seconde, laisser de côté les regrets du passé et les inquiétudes de l'avenir. Profitez de chaque moment avec gratitude et simplicité.</p>
      <br />
      <div className="App">
        <PexelsGallery />
      </div>
    </>
  );
}

export default NaturePage;
