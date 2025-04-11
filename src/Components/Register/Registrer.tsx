import "./Register.css";

function Register() {
  return (
    <form>
      <label>Entrer votre nom</label>
      <br />
      <input type="text" placeholder="nom" />
      <br /> <br />
      <label>Entrer votre prénom</label>
      <br />
      <input type="text" placeholder="prénom" />
      <br /> <br />
      <label>Entrer votre date de naissance</label>
      <br />
      <input type="date" />
      <br /> <br />
      <label>
        Entrer votre numéro de téléphone <small>Format: 01-23-45-67-89</small>
      </label>
      <br />
      <input type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" required />
      <br /> <br />
      <label>Entrer votre email</label>
      <br />
      <input type="email" placeholder="nom.prenom@gmail.com" required />
      <br /> <br />
      <label>Password (8 characters minimum):</label>
      <br />
      <input type="password" required />
      <br /> <br />
      <input type="submit" value="Envoyer le formulaire" id="submit" />
      <br />
    </form>
  );
}
export default Register;
