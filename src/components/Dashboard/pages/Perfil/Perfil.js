import "./Perfil.css";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#262f35",
    color: "#fff",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Perfil() {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [crm, setCrm] = useState(localStorage.getItem("crm") || "");
  const [crp, setCrp] = useState(localStorage.getItem("crp") || "");
  const [tel, setTel] = useState(localStorage.getItem("tel") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  //function that removes the readOnly attribute from the input fields and changes the button text to "Salvar"

  function handleEdit() {
    if (isEditable) {
      // Save the changes here
      localStorage.setItem("name", name);
      localStorage.setItem("crm", crm);
      localStorage.setItem("crp", crp);
      localStorage.setItem("tel", tel);
      localStorage.setItem("email", email);
    }
    setIsEditable(!isEditable);
  }

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
    handleOpenPasswordModal();
  };

  const handleOpenPasswordModal = () => {
    setPasswordModalIsOpen(true);
  };

  const handleClosePasswordModal = () => {
    setPasswordModalIsOpen(false);
  };

  const handleChangePassword = () => {
    localStorage.setItem("password", newPassword);
    setNewPassword("");
    handleClosePasswordModal();
  };

  return (
    <div className="perfil">
      <h1>Perfil</h1>
      <div className="perfil-container">
        <div className="group">
          <label htmlFor="name">Nome: </label>
          <input
            type="string"
            id="name"
            value={name}
            readOnly={!isEditable}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
        <div className="group">
          <label htmlFor="tipo">
            {localStorage.getItem("tipo") === "medico" ? "CRM: " : "CRP:"}
          </label>
          <input
            type="string"
            id="tipo"
            value={localStorage.getItem("tipo") === "medico" ? crm : crp}
            readOnly={!isEditable}
            onChange={(e) =>
              localStorage.getItem("tipo") === "medico"
                ? setCrm(e.target.value)
                : setCrp(e.target.value)
            }
          />
        </div>
        <div className="group">
          <label htmlFor="tel">Telefone: </label>
          <input
            type="string"
            id="tel"
            value={tel}
            readOnlyreadOnly={!isEditable}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="email">E-mail: </label>
          <input
            type="string"
            id="email"
            value={email}
            readOnly={!isEditable}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleEdit}>{isEditable ? "Salvar" : "Editar"}</button>
      <button onClick={handleOpenModal}>Trocar Senha</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Confirm Dialog"
        style={customStyles}
      >
        <h2>Quer mesmo trocar sua senha?</h2>
        <button onClick={handleConfirm}>Sim</button>
        <button onClick={handleCloseModal}>Não</button>
      </Modal>
      <Modal
        isOpen={passwordModalIsOpen}
        onRequestClose={handleClosePasswordModal}
        contentLabel="Change Password Dialog"
        style={customStyles}
      >
        <h2>Digite sua nova senha:</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Mudar senha</button>
      </Modal>
    </div>
  );
}
