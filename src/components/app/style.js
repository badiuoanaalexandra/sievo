import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "app background-image-wrapper": {
        "width": "100%",
        "position": "fixed",
        "top": 0,
        "zIndex": 1,
        "overflow": "hidden"
    },
    "app background-image-wrapper img": {
        "width": "100%",
        "height": "auto"
    },
    "app background-image-content": {
        "maxWidth": 1300,
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "position": "relative",
        "zIndex": 99,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    }
});