"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ResponsiveVideoIframe = _ref => {
  let {
    url,
    allowfullscreen = true,
    width = "560",
    height = "315",
    title = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "embed-player"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    width: width,
    height: height,
    src: url,
    title: title,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: allowfullscreen
  }));
};

var _default = ResponsiveVideoIframe;
exports.default = _default;