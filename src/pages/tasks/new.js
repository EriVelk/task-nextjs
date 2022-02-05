import { Form, FormInput, FormTextArea, Grid, GridColumn, GridRow, Button } from 'semantic-ui-react';
import { useState } from 'react';

export default function TaskFormPage() {

    const [newTask, setNewTask] = useState({
        title: "",
        description: ""
    })

    const [errors, setErrors] = useState({

    });

    const validate = () =>{
        
        const errors = {};

        if(!newTask.title) errors.title = 'Title is required';
        if(!newTask.description) errors.description = 'Description is required';

        return errors;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let errors  = validate();
        if(Object.keys(errors).length) return setErrors(errors);
        
        await createTask();

    }

    const createTask = async () => {
        try {
            await fetch('http://localhost:3000/api/tasks',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newTask)
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => setNewTask({ ...newTask, [e.target.name]: e.target.value });

    return (
        <Grid
            centered
            verticalAlign='middle'
            columns={3}
            style={{ height: "40vh" }}
        >
            <GridRow>
                <GridColumn textAlign='center'>
                    <h1>Create a Task</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormInput 
                            label='Title' 
                            placeholder='Title' 
                            name='title' 
                            onChange={handleChange} 
                            error={errors.title ? {content: errors.title, pointing: "below"} : null}/>
                        <FormTextArea 
                            label='Description' 
                            placeholder='Description' 
                            name='description' 
                            onChange={handleChange}
                            error={errors.description ? {content: errors.description, pointing: "below"} : null}/>
                        <Button primary>Submit</Button>
                    </Form>
                </GridColumn>
            </GridRow>
        </Grid>

    );
}
