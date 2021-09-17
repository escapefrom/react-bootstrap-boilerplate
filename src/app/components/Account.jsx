import * as React from 'react';
import { Accordion, Container, Card, ListGroup, Table, Badge } from "react-bootstrap";

class Operation extends React.Component {
    render() {
        return (
            <Table striped bordered hover style={{ textAlign: "center", verticalAlign: "bottom", marginTop: 4 }}>
                <tbody>
                    <tr>
                        <td rowspan="2" style={{ verticalAlign: "middle", width: "7%" }}>+</td>
                        <td>2</td>
                        <td rowspan="2" style={{ verticalAlign: "middle", width: "32%" }}>3</td>
                    </tr>
                    <tr>
                        <td as={Badge}>4</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

class Account extends React.Component {
    render() {
        var accounts = [
            { id: 1, label: "Account 1", balance: "9999" },
            { id: 2, label: "Account 2", balance: "4464643" }
        ];

        return (
            <Container>
                {accounts.map(tab => (
                    <Accordion defaultActiveKey="0" style={{ marginBottom: 20 }}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                {tab.label}
                                <br />
                                {tab.balance}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <ListGroup>
                                    <ListGroup.Item as={Operation}></ListGroup.Item>
                                    <ListGroup.Item as={Operation}></ListGroup.Item>
                                </ListGroup>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))}
            </Container>
        )
    }
}

export default Account;