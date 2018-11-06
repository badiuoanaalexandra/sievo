import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "project-table": {
        "display": "table",
        "width": "100%"
    },
    "project-table > div": {
        "display": "table-row",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "project-table > div > div": {
        "display": "table-cell",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "maxWidth": 0
    }
});