import React from 'react' 
import CategoryForm from './Form'
import axios from 'axios'

class AddCategory extends React.Component {

    handleSubmit = (CategoryFormData) => {
        axios.post('http://localhost:3005/category/add', CategoryFormData, {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            this.props.history.push(`/category/viewall`)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3"> 
                    <h2>Add Category</h2>
                    <CategoryForm handleSubmit={this.handleSubmit} />
                </div> 
            </div>
        )
    }
}

export default AddCategory