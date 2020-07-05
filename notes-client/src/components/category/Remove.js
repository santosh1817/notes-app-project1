import React from 'react'
import axios from 'axios';

class CategoryRemove extends React.Component{
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

    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if(confirm) {
            const id = this.props.match.params.id 
            axios.delete(`http://localhost:3005/category/delete/${id}`, {
                headers: {
                    'x-auth' : localStorage.getItem('token')
                }
            })
            .then(response => {
                this.props.history.push('/category/viewall')
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    
                    {this.state.isLoaded && this.handleRemove()} 
                    
                </div>
            </div>
        )
    }
}

export default CategoryRemove