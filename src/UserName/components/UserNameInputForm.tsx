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
        return (
            <>
                <label>Github User Name</label>
                <input
                    type="text"
                    name="username"
                    id="username"

                    onChange={(e) => this.setState({ username: e.target.value })}
                />
                {this.state.username && <button type="submit" onClick={() => handleSubmit(this.state.username)} />}
            </>)
    }
}

export default UserNameInput
