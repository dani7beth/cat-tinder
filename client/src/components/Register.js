import { useState, useContext } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456");

  const { handleRegister } = useContext(AuthContext);

  const handleSubmit = () => {
    //frontend check
    if (password === passwordConfirmation) {
      handleRegister({ email, password }, props.history);
    } else {
      alert(`passwords don't match`);
    }
  };

  return (
    <>
      <Segment>
        <Header as="h1" textAlign="center">
          Register
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            required
            autoFocus
            label="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            required
            label="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Input
            required
            label="Confirm Password"
            value={passwordConfirmation}
            name="passwordConfirmation"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Segment textAlign="center" basic>
            <Button type="submit">register</Button>
          </Segment>
        </Form>
      </Segment>
    </>
  );
};
