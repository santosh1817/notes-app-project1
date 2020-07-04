import React from 'react' 

class Form extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: props.contact ? props.contact.name : '',
            errors: props.contact ? props.contact.errors : {}
        }
        //console.log('constructor',this.state)
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        this.props.handleSubmit(formData)
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
    
    render() {
        return (
            <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                name
                                <input type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="person name"
                                />
                            </label>
                        </div>

                        
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
        )
    }
}

export default Form