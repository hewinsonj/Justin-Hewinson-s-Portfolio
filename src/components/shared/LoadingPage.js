import { Spinner } from "react-bootstrap";
import { Divider } from "semantic-ui-react";

const LoadingScreen = () => (
  <div style={{ textAlign: "center" }}>
    <Divider hidden></Divider>
    <Spinner role="status" animation="border">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default LoadingScreen;
