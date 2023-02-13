import React from "react";
import { useHistory } from "react-router-dom";

function CreateButton() {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-success mb-4 btn-lg"
      onClick={() => history.push("/decks/new")}
    >
    Create Deck
    </button>
  );
}

export default CreateButton;