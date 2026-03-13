function Greeting({ person }) {
  return (
    <div>
      <h2>Hello, {person.name}!</h2>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default Greeting;
