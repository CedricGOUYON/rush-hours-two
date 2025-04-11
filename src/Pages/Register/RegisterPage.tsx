import Header from "../../Components/Header/Header";
import Register from "../../Components/Register/Registrer";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <>
      <Header />
      <p id="experience">
        <strong>Connectez vous, pour votre première une expérience! </strong>
      </p>

      <br />
      <p>Plongez dans une toute nouvelle aventure. Pour votre première expérience, laissez-vous guider pas à pas et découvrez un univers pensé pour vous, simple, intuitif et mémorable.</p>
      <Register />
    </>
  );
}
export default RegisterPage;
