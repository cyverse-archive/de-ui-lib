/**
 *  @author sriram
 *
 **/

import React, { Component } from "react";

import { injectIntl } from "react-intl";
import intlData from "./messages";
import withI18N from "../../util/I18NWrapper";
import build from "../../util/DebugIDUtil";
import exStyles from "./style";
import ids from "./ids";

import PropTypes from "prop-types";

import CloseIcon from "@material-ui/icons/Close";
import {
    DialogTitle,
    Typography,
    withStyles,
    IconButton,
} from "@material-ui/core";

class DEDialogHeader extends Component {
    render() {
        const { classes, heading, onClose, intl, id } = this.props;
        return (
            <DialogTitle
                id={id && build(id, ids.HEADER)}
                className={classes.header}
            >
                <Typography className={classes.title}>{heading}</Typography>
                <IconButton
                    aria-label={intl.formatMessage({ id: "more" })}
                    aria-haspopup="true"
                    onClick={onClose}
                    id={id && build(id, ids.HEADER, ids.CLOSE_BTN)}
                    className={classes.dialogCloseButton}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        );
    }
}

DEDialogHeader.propTypes = {
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
    onClose: PropTypes.func.isRequired,
};

export default withStyles(exStyles)(
    withI18N(injectIntl(DEDialogHeader), intlData)
);
