import React, { Component } from 'react'
import { Container, ContainerCard } from '../style/container'
import Form from './Regester/SignIn'
export class Components extends Component {
    render() {
        return (
            <Container>
                <ContainerCard>
                    <Form />
                </ContainerCard>
            </Container>
        )
    }
}

export default Components
