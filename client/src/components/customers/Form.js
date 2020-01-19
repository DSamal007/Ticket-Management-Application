import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'


class CustomerForm extends React.Component { 
    constructor(props) {
        console.log('form customer constructor')
        super(props) 
        this.state = {
            name: props.customer?props.customer.name : '',
            email: props.customer?props.customer.email : '', 
            mobile: props.customer?props.customer.mobile : ''          
        }
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ 
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            name: this.state.name, 
            email: this.state.email,
            mobile: this.state.mobile,             
        }

        console.log(this.props)
        this.props.customer && (formData.id = this.props.customer._id)

        console.log(formData)
        this.props.handleCustomerSubmit(formData)
    }


    render() {
           return (
            <div> 
                <Form onSubmit={this.handleSubmit}> 
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" value={this.state.name} onChange={this.handleChange} name="name" /> 
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="text"  id="email" value={this.state.email} onChange={this.handleChange} name="email" />
                    </FormGroup>
​
                    <FormGroup>
                        <Label htmlFor="mobile">Mobile</Label>
                        <Input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" />
                    </FormGroup>
​
                    <Button type="submit" value="submit" >Submit</Button>
                </Form> 
            </div>
        )
    }
}

export default CustomerForm 