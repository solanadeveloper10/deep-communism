import { useState } from 'react'

const Contract = ({ bgLoaded }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "Ur23EJBKhR2Tq5rfXabSWCDHVf6tT6BUa6ciHy8vine";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        // Optionally, reset the copied status after a short delay
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed", error);
      });
  };

  return (
    <div className={'contract-wrapper ' + (bgLoaded ? 'loaded' : '')}>
      {isCopied ? <p>Contract copied!</p> : <><p>
        Ur23EJBKhR2Tq5rfXabSWCDHVf6tT6BUa6ciHy8vine
      </p>
        <button onClick={handleCopy} className='copy-btn'>Copy</button>
      </>}
    </div>
  )
}

export default Contract
