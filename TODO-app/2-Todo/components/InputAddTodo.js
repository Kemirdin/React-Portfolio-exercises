import React from "react";
import { PropTypes } from "prop-types";

export default class InputAddTodo extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string,
        onAdd: PropTypes.func
    };

    state = {
        st_val: ''
    };

    onInputChange = e => {
        this.setState({
            st_val: e.target.value
        });
        //console.log()
    };

    onEnter = e => {
        // console.log('e.keyCode', e.keyCode)
        const { st_val } = this.state;
        const { onAdd } = this.props;
        if (e.keyCode === 13) {
            //this.props.onAdd(this.state.value);
            onAdd(st_val);
            this.setState({
                st_val: ""
            });
        }
    };

    render() {
        // console.log("InputAddTodo.props", this.props);
        const { st_val } = this.state;
        const { label } = this.props;
        return (
            <div>
                <h3>{label}</h3>
                <input
                    type="text"
                    value={st_val}
                    onChange={this.onInputChange}
                    onKeyUp={this.onEnter}
                />
            </div>
        );
    }
}
