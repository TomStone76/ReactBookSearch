import React from "react";
import Jumbotron from "client/src/components/jumbotron";

class Books extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search for Books</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }



}