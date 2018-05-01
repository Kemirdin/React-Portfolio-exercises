import React from "react";
import { PropTypes } from "prop-types";

//export default class TodoItem extends React.Component {

/**prevent loop render */
export default class TodoItem extends React.Component {
    static propTypes = {
        index: PropTypes.number,
        todoLabel: PropTypes.String,
        isDone: PropTypes.boolean,
        onDelete: PropTypes.func,
        clickTodo: PropTypes.func
    };

    // state = {
    //   s_checked: false
    // };

    doClick = e => {
        const item = {
            id: this.props.index,
            name: this.props.todoLabel,
            isDone: e.target.checked
        };

        this.props.clickTodo(item);


        // this.setState({
        //   s_checked: e.target.checked
        // });
    };

    render() {
        const { index, todoLabel, onDelete, isDone } = this.props;
        // const { s_checked } = this.state;
        const strikeLB = {
            textDecoration: "line-through"
        };
        console.log("TodoItem", todoLabel);
        // console.log("s_checked", s_checked);
        return (
            <div style={isDone === true ? strikeLB : {}}>
                <input type="checkbox" value={index} onChange={this.doClick} checked={isDone} />
                {todoLabel}
                <button onClick={() => onDelete(index)}>x</button>
            </div>
        );
    }
}
