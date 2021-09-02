import React, { useState } from 'react';
import Email from "./Email";
import Password from "./Password";
import Username from "./Username";

const steps = {
  1: Username,
  2: Email,
  3: Password,
};

export default function Regester() {
    const [step, setStep] = useState(3);
    const Step = steps[step];
  
    return (
      <>
        <Step />
      </>
    );
}


