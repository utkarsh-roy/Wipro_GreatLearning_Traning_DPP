import Greeting from "./Greeting";

function GreetingWithBorders(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <WrappedComponent {...props} />
        <p>extra content is added in the greeting component!!!</p>
      </div>
    );
  };
}

const MyHoc = GreetingWithBorders(Greeting);
export default MyHoc;
