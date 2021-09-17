import React, { Component } from 'react';
import 'sass/app.scss';
import Account from '@/Account'

import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Container>
          <Col>
            <Row>
              <h1>Чичина Алина</h1>
              <br/><br/>
            </Row>
            <Row>
              <Account/>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
