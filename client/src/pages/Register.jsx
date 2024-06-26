import React, { useState } from 'react';
import { Container, Row, Col, Card, FloatingLabel, Form, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  // Age calculating...................................
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    setDob(dobValue);
    const calculatedAge = calculateAge(dobValue);
    setAge(calculatedAge);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
//......................................................................................
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 nextStep={nextStep} />
        );
      case 2:
        return (
          <Step2 nextStep={nextStep} prevStep={prevStep} />
        );
      case 3:
        return (
          <Step3 prevStep={prevStep} />
        );
      default:
        return (
          <Step1 nextStep={nextStep} />
        );
    }
  };

  return (
    <>
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="text-center shadow-lg">
              <Card.Header><h3>Register</h3></Card.Header>
              <Card.Body>
                <ProgressBar now={(step / 3) * 100} className="mb-3" />
                {renderStep()}
              </Card.Body>
              <Card.Footer className="text-muted">
                Already have an account? <Link to="/login">Login</Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

const Step1 = ({ nextStep }) => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    setDob(dobValue);
    const calculatedAge = calculateAge(dobValue);
    setAge(calculatedAge);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <Card.Title>Step 1: Personal Details</Card.Title>
      <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
        <Form.Control size='sm' type="text" placeholder="First Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
        <Form.Control size='sm' type="text" placeholder="Last Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingDob" label="Date of Birth" className="mb-3">
        <Form.Control
          size='sm'
          type="date"
          value={dob}
          onChange={handleDobChange}
          placeholder="Date of Birth"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
        <Form.Control size='sm' type="text" value={age} placeholder="Age" readOnly />
      </FloatingLabel>
      <Button variant="primary" onClick={nextStep}>Next</Button>
    </>
  );
};

const Step2 = ({ nextStep, prevStep }) => (
  <>
    <Card.Title>Step 2: Contact Details</Card.Title>
    <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
      <Form.Control size='sm' type="email" placeholder="name@example.com" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
      <Form.Control size='sm' type="tel" placeholder="Phone Number" />
    </FloatingLabel>
    <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
    <Button variant="primary" onClick={nextStep}>Next</Button>
  </>
);

const Step3 = ({ prevStep }) => (
  <>
    <Card.Title>Step 3: Account Details</Card.Title>
    <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
      <Form.Control size='sm' type="text" placeholder="Username" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
      <Form.Control size='sm' type="password" placeholder="Password" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
      <Form.Control size='sm' type="password" placeholder="Confirm Password" />
    </FloatingLabel>
    <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
    <Button variant="primary">Register</Button>
  </>
);

export default Register;
