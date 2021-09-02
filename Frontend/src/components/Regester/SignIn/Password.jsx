import React from 'react'
import { ButtonNext, FormGroup } from './Component'


export default function Password() {
    return (
        <>
            <FormGroup id='password' type="password" text='Password' />
            <FormGroup id='ComfirmPassword' type="password" text='Confirm password'/>
            <ButtonNext type="button" text="Next" icon="fas fa-arrow-right" />
        </>
    )
}

