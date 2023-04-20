import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const ParentComponent = () => {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = ((data) => {
    setFormData(data);
    }, []);

    return (
    <>
        <Form onSubmit={handleFormSubmit} />
        <Card formData={formData} />
    </>
    );
};

export default ParentComponent;
