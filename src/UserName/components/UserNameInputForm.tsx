import React, { Component } from 'react'

interface Props {
    handleSubmit: (name: string) => void
}

interface State {
    username: string
}

class UserNameInput extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = { username: '' }
    }

    render() {
        const { handleSubmit } = this.props
        return (<>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="username"
                    >
                        Github User Name
                        </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="username"

                    name="username"
                    onChange={(e) => this.setState({ username: e.target.value })}
                />
                <div className="input-group-append">{
                    this.state.username && <button
                        type="submit"
                        className="btn btn-info"
                        onClick={() => handleSubmit(this.state.username)}
                    >
                        Login
                    </button>
                }</div>
            </div>
        </>)
    }
}

export default UserNameInput
