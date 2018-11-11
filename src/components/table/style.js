import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "project-table divcell": {
        "display": "table-cell",
        "paddingTop": 25,
        "paddingRight": 10,
        "paddingBottom": 25,
        "paddingLeft": 10,
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "maxWidth": 0,
        "borderBottom": "1px solid rgba(252, 229, 237, 1)",
        "backgroundColor": "rgba(255,253,255,0.9)"
    },
    "project-table divheader-cell": {
        "backgroundColor": "rgba(98,179,220,0.9)",
        "color": "white",
        "fontSize": 1.1,
        "fontStyle": "bold"
    },
    "project-table no-projects": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "display": "block",
        "boxSizing": "border-box"
    }
});