/**
 *  @author sriram
 *
 **/

import React, { Component } from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";

import { Tooltip, withStyles, IconButton } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

const style1 = (theme) => ({
    ratingDelete: {
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
    },
    total: {
        paddingTop: 3,
    },
    rating: {
        float: "left",
    },
    delete: {
        position: "relative",
        top: -20,
        left: 30,
    },
});

class Rate extends Component {
    render() {
        const {
            value,
            readOnly,
            total,
            onChange,
            onDelete,
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <div className={classes.rating}>
                    <Rating
                        name="de-rating"
                        value={value}
                        readOnly={readOnly}
                        onChange={onChange}
                        precision={0.5}
                    />
                </div>
                <div className={classes.total}> ({total}) </div>
                <div className={classes.delete}>
                    {onDelete && (
                        <Tooltip title="Delete Rating">
                            <IconButton
                                onClick={onDelete}
                                size="small"
                                className={classes.ratingDelete}
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

Rate.defaultProps = {
    value: 0,
    readOnly: false,
    total: 0,
};

Rate.propTypes = {
    value: PropTypes.number,
    readOnly: PropTypes.bool,
    total: PropTypes.number,
    onChange: PropTypes.func,
};

export default withStyles(style1)(Rate);
