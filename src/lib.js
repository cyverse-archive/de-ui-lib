import dateConstants from "./dateConstants";

import AppStatusIcon from "./components/appTile/AppStatusIcon";
import AppTile from "./components/appTile/AppTile";
import Autocomplete from "./components/autocomplete/Autocomplete";
import CyVerseAnnouncer, {
    announce,
} from "./components/announcer/CyVerseAnnouncer";
import CopyTextArea from "./components/copy/CopyTextArea";
import DEHyperlink from "./components/hyperlink/DEHyperlink";
import Highlighter from "./components/highlighter/Highlighter";
import LoadingMask from "./components/loading/LoadingMask";
import QuickLaunch from "./components/quickLaunch/QuickLaunch";
import Rate from "./components/rating/Rate";
import SearchField from "./components/searchField/SearchField";
import TriggerField from "./components/triggerField/TriggerField";

import build from "./util/DebugIDUtil";
import {
    formatDate,
    formatCurrentDate,
    formatDateObject,
} from "./util/DateFormatter";
import {
    FormCheckbox,
    FormCheckboxStringValue,
    FormCheckboxTableCell,
    FormIntegerField,
    FormMultilineTextField,
    FormNumberField,
    FormSearchField,
    FormSelectField,
    FormTextField,
    FormTimestampField,
    getFormError,
} from "./util/FormField";
import getRegExp from "./util/getRegExp";
import hasProps from "./util/hasProps";
import palette from "./util/CyVersePalette";
import {
    getMessage,
    formatMessage,
    formatHTMLMessage,
} from "./util/I18NWrapper";

import withI18N from "./util/I18NWrapper";

import DEAlertDialog from "./util/dialog/DEAlertDialog";
import DEConfirmationDialog from "./util/dialog/DEConfirmationDialog";
import DEDialogHeader from "./util/dialog/DEDialogHeader";
import DEPromptDialog from "./util/dialog/DEPromptDialog";

import ErrorExpansionPanel from "./util/ErrorExpansionPanel";
import ErrorHandler from "./util/ErrorHandler";
import EmptyTable from "./util/table/EmptyTable";
import EnhancedTableHead from "./util/table/EnhancedTableHead";

import TablePaginationActions from "./util/table/TablePaginationActions";
import { stableSort, getSorting } from "./util/table/TableSort";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { createMuiTheme } from "@material-ui/core";

const getMuiTheme = (theme) =>
    createMuiTheme({
        palette: {
            primary: {
                main: palette.blue,
            },
            secondary: {
                main: palette.lightBlue,
            },
        },
        typography: {
            button: {
                textTransform: "none",
            },
            useNextVariants: true,
        },
    });

export {
    announce,
    AppStatusIcon,
    AppTile,
    Autocomplete,
    build,
    CopyTextArea,
    dateConstants,
    CyVerseAnnouncer,
    DEAlertDialog,
    DEConfirmationDialog,
    DEDialogHeader,
    DEPromptDialog,
    DEHyperlink,
    EmptyTable,
    EnhancedTableHead,
    ErrorExpansionPanel,
    ErrorHandler,
    formatDate,
    FormCheckbox,
    FormCheckboxStringValue,
    FormCheckboxTableCell,
    FormIntegerField,
    FormMultilineTextField,
    FormNumberField,
    FormSearchField,
    FormSelectField,
    FormTextField,
    FormTimestampField,
    formatMessage,
    formatHTMLMessage,
    formatCurrentDate,
    formatDateObject,
    getFormError,
    getMessage,
    getMuiTheme,
    getRegExp,
    getSorting,
    hasProps,
    Highlighter,
    LoadingMask,
    MuiThemeProvider,
    palette,
    QuickLaunch,
    Rate,
    SearchField,
    stableSort,
    TablePaginationActions,
    TriggerField,
    withI18N,
};
