import React from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../components/Input";

export default function Registration() {
    return (
        <Container className="mt-5 mb-5">
            <h4>Create your account</h4>
            <Card className="d-flex-row p-5">
                <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Input
                            type={"text"}
                            placeholder={"Enter Full Name"}
                            classes={"form-control mb-3"}
                            name={"full_name"}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Input
                            type={"email"}
                            placeholder={"Enter Email"}
                            classes={"form-control mb-3"}
                            name={"email"}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Input
                            type={"password"}
                            placeholder={"Enter Password"}
                            classes={"form-control mb-3"}
                            name={"password"}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Input
                            type={"text"}
                            placeholder={"Enter Phone Number"}
                            classes={"form-control mb-3"}
                            name={"phone_no"}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Birth Date</Form.Label>
                            <Input
                            type={"date"}
                            classes={"form-control mb-3"}
                            name={"dob"}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select name="gender">
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                            <option value={"others"}>Others</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Form.Check></Form.Check>
                    <Form.Label>I would like to accept the terms & conditions.
                    </Form.Label>
                    <Button className="mb-3 mt-3 btn-secondary">Sign Up</Button>
                    <h4>Or Sign up with</h4>
                    <Row>
                        <Col><Button className="col-12 btn-success">GOOLE</Button></Col>
                        <Col><Button className="col-12 btn-primary">FACEBOOK</Button></Col>
                    </Row>
                </Row>
                </Form>
            </Card>
        </Container>
    );
}
