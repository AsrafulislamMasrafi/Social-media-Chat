import React from 'react'
import { ButtonNext, FormGroup } from './Component'


export default function Username() {
    return (
        <>
            <FormGroup id='username' type="text" text='Username' />
            <FormGroup id='name' type="text" text='Full Name' />
            <ButtonNext type="button" text="Next" icon="fas fa-arrow-right" />
        </>
    )
}
