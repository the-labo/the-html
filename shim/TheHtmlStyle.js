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

var _theStyle = _interopRequireDefault(require("the-style"));

/** Style for TheHtml */
var TheHtmlStyle = function TheHtmlStyle(_ref) {
  var className = _ref.className,
      id = _ref.id,
      options = _ref.options;
  return _react.default.createElement(_theStyle.default, (0, _extends2.default)({
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
  var ThemeValues = _theStyle.default.ThemeValues;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qc3giXSwibmFtZXMiOlsiVGhlSHRtbFN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJvcHRpb25zIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiVGhlbWVWYWx1ZXMiLCJUaGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdodCIsInRleHRDb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFFQyxTQUFGLFFBQUVBLFNBQUY7QUFBQSxNQUFhQyxFQUFiLFFBQWFBLEVBQWI7QUFBQSxNQUFpQkMsT0FBakIsUUFBaUJBLE9BQWpCO0FBQUEsU0FDbkIsNkJBQUMsaUJBQUQseUJBQWM7QUFBQ0Q7QUFBRCxHQUFkO0FBQ1UsZUFBVyx5QkFBVyxnQkFBWCxFQUE2QkQsU0FBN0IsQ0FEckI7QUFFVSxZQUFRRCxhQUFhSSxJQUFiLENBQWtCRCxPQUFsQjtBQUZsQixLQURtQjtBQUFBLENBQXJCOztBQU9BSCxhQUFhSyxXQUFiLEdBQTJCLGNBQTNCO0FBQ0FMLGFBQWFNLFNBQWIsR0FBeUI7QUFDdkI7QUFDQUgsV0FBU0ksbUJBQVVDO0FBRkksQ0FBekI7QUFLQVIsYUFBYVMsWUFBYixHQUE0QjtBQUMxQk4sV0FBUztBQURpQixDQUE1Qjs7QUFJQUgsYUFBYUksSUFBYixHQUFvQixVQUFDRCxPQUFELEVBQWE7QUFBQSxNQUN4Qk8sV0FEd0IsR0FDVEMsaUJBRFMsQ0FDeEJELFdBRHdCO0FBQUEsOEJBUTNCUCxPQVIyQixDQUc3QlMsZUFINkI7QUFBQSxNQUc3QkEsZUFINkIsc0NBR1hGLFlBQVlFLGVBSEQ7QUFBQSw0QkFRM0JULE9BUjJCLENBSTdCVSxVQUo2QjtBQUFBLE1BSTdCQSxVQUo2QixvQ0FJaEJILFlBQVlHLFVBSkk7QUFBQSwwQkFRM0JWLE9BUjJCLENBSzdCVyxRQUw2QjtBQUFBLE1BSzdCQSxRQUw2QixrQ0FLbEJKLFlBQVlJLFFBTE07QUFBQSx3QkFRM0JYLE9BUjJCLENBTTdCWSxNQU42QjtBQUFBLE1BTTdCQSxNQU42QixnQ0FNcEIsTUFOb0I7QUFBQSwyQkFRM0JaLE9BUjJCLENBTzdCYSxTQVA2QjtBQUFBLE1BTzdCQSxTQVA2QixtQ0FPakJOLFlBQVlNLFNBUEs7QUFTL0IsU0FBTztBQUNMLGlCQUFhO0FBQ1hEO0FBRFc7QUFEUixHQUFQO0FBS0QsQ0FkRDs7ZUFnQmVmLFkiLCJzb3VyY2VSb290IjoiLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGhlU3R5bGUgZnJvbSAndGhlLXN0eWxlJ1xuXG4vKiogU3R5bGUgZm9yIFRoZUh0bWwgKi9cbmNvbnN0IFRoZUh0bWxTdHlsZSA9ICh7Y2xhc3NOYW1lLCBpZCwgb3B0aW9uc30pID0+IChcbiAgPFRoZVN0eWxlIHsuLi57aWR9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCd0aGUtaHRtbC1zdHlsZScsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZXM9e1RoZUh0bWxTdHlsZS5kYXRhKG9wdGlvbnMpfVxuICAvPlxuKVxuXG5UaGVIdG1sU3R5bGUuZGlzcGxheU5hbWUgPSAnVGhlSHRtbFN0eWxlJ1xuVGhlSHRtbFN0eWxlLnByb3BUeXBlcyA9IHtcbiAgLyoqIFN0eWxlIG9wdGlvbnMgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuVGhlSHRtbFN0eWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge30sXG59XG5cblRoZUh0bWxTdHlsZS5kYXRhID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1RoZW1lVmFsdWVzfSA9IFRoZVN0eWxlXG4gIGNvbnN0IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBUaGVtZVZhbHVlcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgZm9udEZhbWlseSA9IFRoZW1lVmFsdWVzLmZvbnRGYW1pbHksXG4gICAgZm9udFNpemUgPSBUaGVtZVZhbHVlcy5mb250U2l6ZSxcbiAgICBoZWlnaHQgPSAnMTAwJScsXG4gICAgdGV4dENvbG9yID0gVGhlbWVWYWx1ZXMudGV4dENvbG9yLFxuICB9ID0gb3B0aW9uc1xuICByZXR1cm4ge1xuICAgICcudGhlLWh0bWwnOiB7XG4gICAgICBoZWlnaHQsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVIdG1sU3R5bGVcbiJdfQ==