// Welcome.jsx

function Welcome() {
  const name = "TESTER"
  const name2 = "Mikey the Freakey"
  return (
    <div className="welcome-card">
      <h1>Привіт світ!</h1>
      <h2>Це компонент!</h2>
      <p>Output test: {name2} (works as {name})</p>
    </div>
  );
}

export default Welcome;
