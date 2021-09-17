import * as React from 'react';
import { Accordion, Container, Card, ListGroup, Table } from "react-bootstrap";

class Operation extends React.Component {
    render() {
        return (
            <Table borderless style={{ textAlign: "center", verticalAlign: "bottom", marginTop: 4 }}>
                <tbody>
                    <tr>
                        <td rowspan="2" style={{ verticalAlign: "middle", width: "7%", fontSize: "32px", fontWeight: "bold", color: this.props.type === "+" ? "green" : "red" }}>{this.props.type}</td>
                        <td style={{textAlign: "left"}}>{this.props.category}</td>
                        <td rowspan="2" style={{ verticalAlign: "middle", width: "32%", color: this.props.type === "+" ? "green" : "red", fontWeight: "bold", fontSize: "24px" }}>{this.props.sum} р.</td>
                        <td rowspan="2" style={{ verticalAlign: "middle", width: "10%" }}>{this.props.time}</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left", fontSize: "24px", fontWeight: "bold"}}>{this.props.target}</td>
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
                            <Accordion.Toggle as={Card.Header} eventKey="0" style={{fontSize: "18px"}}>
                                <div style={{fontSize: "22px"}}>Счет: {tab.label}</div>
                                <div>Баланс: {tab.balance}</div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <ListGroup>
                                    <ListGroup.Item as={Operation} type="+" target="Затинацкий И.В." category="Переводы" sum="1223" time="11:21"></ListGroup.Item>
                                    <ListGroup.Item as={Operation} type="-" target="Пятерочка" category="Супермаркеты" sum="1223" time="09:43"></ListGroup.Item>
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