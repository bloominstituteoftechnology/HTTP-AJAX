import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Tooltip } from 'reactstrap';
import styled from 'styled-components';

const Header = styled.h2`
    text-align: center;
    color: darkcyan;
    margin-bottom: 30px;
`

export default class Friend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friend: {},
            tooltipOpen: false
        }
    }
    
    componentDidMount() {
        this.setState({
            friend:  this.props.friends.find(friend => `${friend.id}` === this.props.match.params.id)
        })
    }

    toggleToolTip = () => this.setState({tooltipOpen: !this.state.tooltipOpen})

    render() {
    return  <Container>
                <Row>
                    <Col xs={"12"}md={{ size: 6, offset: 3 }}>
                        <Header>More Details About Your Friend</Header>
                        <Card>
                            <CardBody>
                                <CardTitle className ="text-center">Here is {this.state.friend.name}'s Profile</CardTitle>
                                <CardSubtitle className ="text-center">Contact him/her at {this.state.friend.email}</CardSubtitle>
                                <CardText>{this.state.friend.description}</CardText>
                                <Button id="home" color="info" onClick={() => this.props.history.push('/')} block >Home</Button>
                                <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="home" toggle={this.toggleToolTip}>
                                    Go To Home Page!
                                </Tooltip>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    } 
}
