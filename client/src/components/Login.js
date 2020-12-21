import { useState, useContext } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");

  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = () => {
    handleLogin({ email, password }, props.history);
  };

  return (
    <>
      <Segment>
        <Header as="h1" textAlign="center">
          Login
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
          <Segment textAlign="center" basic>
            <Button type="submit">login</Button>
          </Segment>
        </Form>
      </Segment>
    </>
  );
};
