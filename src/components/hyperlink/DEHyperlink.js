import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./style";
import { withStyles } from "@material-ui/core";
class DEHyperlink extends Component {
    render() {
        const { classes, text, onClick, ...custom } = this.props;
        return (
            <span onClick={onClick} {...custom} className={classes.normal}>
                {text}
            </span>
        );
    }
}

DEHyperlink.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
};

export default withStyles(styles)(DEHyperlink);
