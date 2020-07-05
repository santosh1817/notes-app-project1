import React from 'react'
import axios from 'axios';
import CategoryForm from './Form'

class CategoryEdit extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            category: {},
            isLoaded: false 
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`http://localhost:3005/category/view/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        }).then(response => this.setState(() => ({ category: response.data, isLoaded: true })))
    }

    handleSubmit = (formData) => {
        const id = this.props.match.params.id
        axios.put(`http://localhost:3005/category/edit/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                // console.log(response.data)
                this.props.history.push(`/category/viewall`)
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h2>Edit Category</h2>
                    {this.state.isLoaded && <CategoryForm handleSubmit={this.handleSubmit} category={this.state.category} />}
                </div>
            </div>
        )
    }
}

export default CategoryEdit