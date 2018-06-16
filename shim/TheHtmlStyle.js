'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _theStyle = require("the-style");

/** Style for TheHtml */
var TheHtmlStyle = function TheHtmlStyle(_ref) {
  var className = _ref.className,
      id = _ref.id,
      options = _ref.options;
  return _react.default.createElement(_theStyle.TheStyle, (0, _extends2.default)({
    id: id
  }, {
    className: (0, _classnames.default)('the-html-style', className),
    styles: TheHtmlStyle.data(options)
  }));
};

TheHtmlStyle.displayName = 'TheHtmlStyle';
TheHtmlStyle.propTypes = {
  /** Style options */
  options: _propTypes.default.object
};
TheHtmlStyle.defaultProps = {
  options: {}
};

TheHtmlStyle.data = function (options) {
  var ThemeValues = _theStyle.TheStyle.ThemeValues;
  var _options$backgroundCo = options.backgroundColor,
      backgroundColor = _options$backgroundCo === void 0 ? ThemeValues.backgroundColor : _options$backgroundCo,
      _options$fontFamily = options.fontFamily,
      fontFamily = _options$fontFamily === void 0 ? ThemeValues.fontFamily : _options$fontFamily,
      _options$fontSize = options.fontSize,
      fontSize = _options$fontSize === void 0 ? ThemeValues.fontSize : _options$fontSize,
      _options$height = options.height,
      height = _options$height === void 0 ? '100%' : _options$height,
      _options$textColor = options.textColor,
      textColor = _options$textColor === void 0 ? ThemeValues.textColor : _options$textColor;
  return {
    '.the-html': {
      height: height
    }
  };
};

var _default = TheHtmlStyle;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qc3giXSwibmFtZXMiOlsiVGhlSHRtbFN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJvcHRpb25zIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiVGhlbWVWYWx1ZXMiLCJUaGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdodCIsInRleHRDb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFFQyxTQUFGLFFBQUVBLFNBQUY7QUFBQSxNQUFhQyxFQUFiLFFBQWFBLEVBQWI7QUFBQSxNQUFpQkMsT0FBakIsUUFBaUJBLE9BQWpCO0FBQUEsU0FDbkIsNkJBQUMsa0JBQUQseUJBQWM7QUFBQ0Q7QUFBRCxHQUFkO0FBQ1UsZUFBVyx5QkFBVyxnQkFBWCxFQUE2QkQsU0FBN0IsQ0FEckI7QUFFVSxZQUFRRCxhQUFhSSxJQUFiLENBQWtCRCxPQUFsQjtBQUZsQixLQURtQjtBQUFBLENBQXJCOztBQU9BSCxhQUFhSyxXQUFiLEdBQTJCLGNBQTNCO0FBQ0FMLGFBQWFNLFNBQWIsR0FBeUI7QUFDdkI7QUFDQUgsV0FBU0ksbUJBQVVDO0FBRkksQ0FBekI7QUFLQVIsYUFBYVMsWUFBYixHQUE0QjtBQUMxQk4sV0FBUztBQURpQixDQUE1Qjs7QUFJQUgsYUFBYUksSUFBYixHQUFvQixVQUFDRCxPQUFELEVBQWE7QUFBQSxNQUN4Qk8sV0FEd0IsR0FDVEMsa0JBRFMsQ0FDeEJELFdBRHdCO0FBQUEsOEJBUTNCUCxPQVIyQixDQUc3QlMsZUFINkI7QUFBQSxNQUc3QkEsZUFINkIsc0NBR1hGLFlBQVlFLGVBSEQ7QUFBQSw0QkFRM0JULE9BUjJCLENBSTdCVSxVQUo2QjtBQUFBLE1BSTdCQSxVQUo2QixvQ0FJaEJILFlBQVlHLFVBSkk7QUFBQSwwQkFRM0JWLE9BUjJCLENBSzdCVyxRQUw2QjtBQUFBLE1BSzdCQSxRQUw2QixrQ0FLbEJKLFlBQVlJLFFBTE07QUFBQSx3QkFRM0JYLE9BUjJCLENBTTdCWSxNQU42QjtBQUFBLE1BTTdCQSxNQU42QixnQ0FNcEIsTUFOb0I7QUFBQSwyQkFRM0JaLE9BUjJCLENBTzdCYSxTQVA2QjtBQUFBLE1BTzdCQSxTQVA2QixtQ0FPakJOLFlBQVlNLFNBUEs7QUFTL0IsU0FBTztBQUNMLGlCQUFhO0FBQ1hEO0FBRFc7QUFEUixHQUFQO0FBS0QsQ0FkRDs7ZUFnQmVmLFkiLCJzb3VyY2VSb290IjoiLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVTdHlsZSB9IGZyb20gJ3RoZS1zdHlsZSdcblxuLyoqIFN0eWxlIGZvciBUaGVIdG1sICovXG5jb25zdCBUaGVIdG1sU3R5bGUgPSAoe2NsYXNzTmFtZSwgaWQsIG9wdGlvbnN9KSA9PiAoXG4gIDxUaGVTdHlsZSB7Li4ue2lkfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndGhlLWh0bWwtc3R5bGUnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGVzPXtUaGVIdG1sU3R5bGUuZGF0YShvcHRpb25zKX1cbiAgLz5cbilcblxuVGhlSHRtbFN0eWxlLmRpc3BsYXlOYW1lID0gJ1RoZUh0bWxTdHlsZSdcblRoZUh0bWxTdHlsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBTdHlsZSBvcHRpb25zICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblRoZUh0bWxTdHlsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHt9LFxufVxuXG5UaGVIdG1sU3R5bGUuZGF0YSA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtUaGVtZVZhbHVlc30gPSBUaGVTdHlsZVxuICBjb25zdCB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gVGhlbWVWYWx1ZXMuYmFja2dyb3VuZENvbG9yLFxuICAgIGZvbnRGYW1pbHkgPSBUaGVtZVZhbHVlcy5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplID0gVGhlbWVWYWx1ZXMuZm9udFNpemUsXG4gICAgaGVpZ2h0ID0gJzEwMCUnLFxuICAgIHRleHRDb2xvciA9IFRoZW1lVmFsdWVzLnRleHRDb2xvcixcbiAgfSA9IG9wdGlvbnNcbiAgcmV0dXJuIHtcbiAgICAnLnRoZS1odG1sJzoge1xuICAgICAgaGVpZ2h0LFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlSHRtbFN0eWxlXG4iXX0=