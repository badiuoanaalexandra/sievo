import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "font-family": {
        "fontFamily": "'Open Sans', sans-serif"
    },
    "body": {
        "fontFamily": "Open Sans",
        "color": "#347CA4",
        "boxSizing": "border-box"
    },
    "h1": {
        "fontSize": 3,
        "fontWeight": "600",
        "color": "rgba(252, 229, 237, 0.9)",
        "textShadow": "0 2px 12px rgba(0,0,0,.21)",
        "marginBottom": 20
    },
    "button": {
        "backgroundColor": "#62B3DC",
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "border": "1px solid #62B3DC",
        "color": "white",
        "fontSize": 1,
        "fontWeight": "500",
        "boxShadow": "0px 15px 10px -10px rgba(0,0,0,0.2)",
        "boxSizing": "border-box",
        "textAlign": "center",
        "outline": "none",
        "cursor": "pointer"
    },
    "abutton": {
        "backgroundColor": "#62B3DC",
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "border": "1px solid #62B3DC",
        "color": "white",
        "fontSize": 1,
        "fontWeight": "500",
        "boxShadow": "0px 15px 10px -10px rgba(0,0,0,0.2)",
        "boxSizing": "border-box",
        "textAlign": "center",
        "outline": "none",
        "cursor": "pointer"
    },
    "button:hover": {
        "border": "1px solid #347CA4",
        "backgroundColor": "#347CA4"
    },
    "abutton:hover": {
        "border": "1px solid #347CA4",
        "backgroundColor": "#347CA4"
    },
    "input[type=text]": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontWeight": "500",
        "border": "1px solid #62B3DC",
        "fontSize": 1,
        "boxShadow": "inset 0 0 10px rgba(0,0,0,0.1)",
        "boxSizing": "border-box",
        "minWidth": 300
    },
    "input[type=text]:focus": {
        "border": "1px solid #347CA4",
        "outline": "none"
    }
});