import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function DeleteDeckButton({ deckId }) {
  const history = useHistory();
  
  const handleDelete = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      <span className="oi oi-trash" />
    </button>
  );
}

export default DeleteDeckButton;