import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "project-table": {
        "display": "table",
        "width": "100%",
        "textAlign": "center",
        "boxShadow": "0px 15px 10px -10px rgba(0,0,0,0.2)"
    },
    "project-table > div": {
        "display": "table-row",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "backgroundColor": "rgba(255,253,255,0.9)",
        "borderBottom": "1px solid #62B3DC"
    },
    "project-table > div > div": {
        "display": "table-cell",
        "paddingTop": 25,
        "paddingRight": 10,
        "paddingBottom": 25,
        "paddingLeft": 10,
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "maxWidth": 0,
        "borderBottom": "1px solid rgba(252, 229, 237, 1)"
    },
    "project-table > div > div:last-child": {
        "borderRight": "1px solid rgba(252, 229, 237, 1)"
    },
    "project-table > div > div:first-child": {
        "borderLeft": "1px solid rgba(252, 229, 237, 1)"
    },
    "project-table > div:first-child": {
        "backgroundColor": "rgba(98,179,220,0.9)",
        "color": "white",
        "fontSize": 1.1,
        "fontStyle": "bold"
    },
    "project-table > div:first-child > div": {
        "borderBottom": "1px solid #62B3DC"
    },
    "project-table > div:first-child > div:first-child": {
        "borderLeft": "1px solid #62B3DC"
    },
    "project-table > div:first-child > div:last-child": {
        "borderRight": "1px solid #62B3DC"
    },
    "project-table divsort > a": {
        "paddingRight": 20,
        "cursor": "pointer",
        "color": "#FCE5ED",
        "display": "block",
        "backgroundImage": "url(../../assets/not-sorted.svg)",
        "backgroundPosition": "right",
        "backgroundRepeat": "no-repeat"
    },
    "project-table divsort > aasc": {
        "backgroundImage": "url(../../assets/sorted-asc.svg)"
    },
    "project-table divsort > adesc": {
        "backgroundImage": "url(../../assets/sorted-desc.svg)"
    }
});