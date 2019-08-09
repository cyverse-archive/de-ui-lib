/**
 *
 * @author sriram
 *
 */
import React from "react";
import PropTypes from "prop-types";
import LoadingOverlay from "react-loading-overlay";
import palette from "../../util/CyVersePalette";
import { CircularProgress, withStyles } from "@material-ui/core";

const style1 = (theme) => ({
    loading: {
        position: "absolute",
        top: "50%",
        left: "50%",
        color: palette.orange,
    },
});

function LoadingMask(props) {
    const { loading, children, classes } = props;
    return (
        <LoadingOverlay
            active={loading}
            spinner={
                <CircularProgress
                    id="loading-mask"
                    size={30}
                    className={classes.loading}
                    thickness={7}
                />
            }
        >
            {children}
        </LoadingOverlay>
    );
}

export default withStyles(style1)(LoadingMask);

LoadingMask.propTypes = {
    loading: PropTypes.bool.isRequired,
};
