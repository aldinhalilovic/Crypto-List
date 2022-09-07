import React from "react";
import "./CryptoTitle.css";
import "bulma/css/bulma.css";

const CryptoTitle = () => {
  return (
    <div className="crypto-title">
      <h1>INSERT CRYPTO DATA</h1>
      <button class="button is-white">White</button>
      <button class="button is-black">Black</button>
      <button
        class="button is-primary is-large"
        title="Disabled button"
        disabled
      >
        Disabled
      </button>
    </div>
  );
};

export default CryptoTitle;
