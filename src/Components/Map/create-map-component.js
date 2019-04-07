import React from 'react';
import { Container, Card, InputGroup, FormControl, Button} from 'react-bootstrap'

export default function CreateMapComponent( props ) {



    return (
        <Container>
         
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                  
                    aria-label="map name"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                    
                    <Button variant="primary" onClick={props.handleSubmit} >Submit</Button>
                    
             
        </Container>

    )

}