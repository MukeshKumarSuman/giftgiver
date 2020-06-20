import React, {Component } from 'react';
import { Form, FormGroup, FormLabel, Button, FormControl } from 'react-bootstrap';
class Gift extends Component {
    state= {
        person: '',
        present: ''
    }

    onChnagePersonHandler = event => {
        this.setState({person: event.target.value});
    }

    onChnagePresentHandler = event => {
        this.setState({present: event.target.value});
    }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person Name</FormLabel>
                        <FormControl className='input-person' onChange={this.onChnagePersonHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl className='input-present' onChange={this.onChnagePresentHandler}/>
                    </FormGroup>
                </Form>
                <Button className='btn-remove' onClick={ () => this.props.removeGift(this.props.gift.id)}>Remove Gift</Button>
            </div>
        );
    }
}
export default Gift;