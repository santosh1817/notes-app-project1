import React from 'react' 
import Form from './Form'
import axios from 'axios'

class Add extends React.Component {

    handleSubmit = (formData) => {
        axios.post('http://localhost:3005/category/add', formData, {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            this.props.history.push(`/category/${response.data.category._id}`)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3"> 
                    <h2>Add Category</h2>
                    <Form handleSubmit={this.handleSubmit} />
                </div> 
            </div>
        )
    }
}

export default Add