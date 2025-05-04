import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllocationForm = () => {
    const [department, setDepartment] = useState('');
    const [allocation, setAllocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ department, allocation });
        alert('Allocation saved successfully!');
        setDepartment('');
        setAllocation('');
    };

    return (
        <Container className="mt-5">
            <Row className="">
                <Col md={8}>
                    <div className="card-body">
                        <h3 className="card-title mb-4">Change Allocation</h3>
                        
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-end">
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Department</Form.Label>
                                        <Form.Select 
                                            value={department} 
                                            onChange={(e) => setDepartment(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Department</option>
                                            <option value="HR">Human Resources</option>
                                            <option value="IT">Information Technology</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Sales">Sales</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Allocation</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter allocation amount or details"
                                            value={allocation}
                                            onChange={(e) => setAllocation(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                
                                <Col md={4} className="text-center">
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        className="mb-3"
                                        style={{ 
                                            backgroundColor: '#007bff',
                                            borderColor: '#007bff',
                                            padding: '10px 30px',
                                            fontSize: '16px',
                                            boxShadow: '0 4px 6px rgba(0, 123, 255, 0.3)'
                                        }}
                                    >
                                        Save Allocation
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AllocationForm;
