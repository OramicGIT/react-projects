// Welcome.jsx

function Welcome() {
  const name = "TESTER"
  const name2 = "Mikey the Freakity"
  return (
    <div className="welcome-card">
      <h1>Привіт світ!</h1>
      <h2>Це компонент!</h2>
      <p>Work variables: {name2} (works as {name})</p>
      <p>Badge: {Reporter()}</p>
      <p>ID: {MathTest(1)} (should be 0.30000000000000004)</p>
    </div>
  );
}

function MathTest(xp){
  const math = 0.1 + 0.2
  return math * xp
}

function Reporter(){
  return <span>You're a jobless entity</span>
}

export default Welcome;
