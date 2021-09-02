import React from 'react'
import { ButtonNext, FormGroup } from './Component'


export default function Email() {
    return (
        <>
            <FormGroup id='email' type="email" text='Email address' />
            <FormGroup id='phone' type="number" text='Or Phone number' />
            <ButtonNext type="button" text="Next" icon="fas fa-arrow-right" />
        </>
    )
}
