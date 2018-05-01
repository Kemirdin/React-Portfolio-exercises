import React from "react";
import { PropTypes } from "prop-types";

export default class FilterButton extends React.PureComponent {
    static propTypes = {
        filtering: PropTypes.func
    };

    render() {
        const { filtering } = this.props;
        return (
            <div>
                <button onClick={() => filtering('all')}>ALL</button>
                <button onClick={() => filtering(true)}>DONE</button>
                <button onClick={() => filtering(false)}>!=DONE</button>
            </div>
        );
    }
}
