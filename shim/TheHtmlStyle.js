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
      _options$heigh = options.heigh,
      heigh = _options$heigh === void 0 ? '100%' : _options$heigh,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qc3giXSwibmFtZXMiOlsiVGhlSHRtbFN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJvcHRpb25zIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiVGhlbWVWYWx1ZXMiLCJUaGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdoIiwidGV4dENvbG9yIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCQyxPQUFqQixRQUFpQkEsT0FBakI7QUFBQSxTQUNuQiw2QkFBQyxpQkFBRCx5QkFBYztBQUFDRDtBQUFELEdBQWQ7QUFDVSxlQUFXLHlCQUFXLGdCQUFYLEVBQTZCRCxTQUE3QixDQURyQjtBQUVVLFlBQVFELGFBQWFJLElBQWIsQ0FBa0JELE9BQWxCO0FBRmxCLEtBRG1CO0FBQUEsQ0FBckI7O0FBT0FILGFBQWFLLFdBQWIsR0FBMkIsY0FBM0I7QUFDQUwsYUFBYU0sU0FBYixHQUF5QjtBQUN2QjtBQUNBSCxXQUFTSSxtQkFBVUM7QUFGSSxDQUF6QjtBQUtBUixhQUFhUyxZQUFiLEdBQTRCO0FBQzFCTixXQUFTO0FBRGlCLENBQTVCOztBQUlBSCxhQUFhSSxJQUFiLEdBQW9CLFVBQUNELE9BQUQsRUFBYTtBQUFBLE1BQ3hCTyxXQUR3QixHQUNUQyxpQkFEUyxDQUN4QkQsV0FEd0I7QUFBQSw4QkFRM0JQLE9BUjJCLENBRzdCUyxlQUg2QjtBQUFBLE1BRzdCQSxlQUg2QixzQ0FHWEYsWUFBWUUsZUFIRDtBQUFBLDRCQVEzQlQsT0FSMkIsQ0FJN0JVLFVBSjZCO0FBQUEsTUFJN0JBLFVBSjZCLG9DQUloQkgsWUFBWUcsVUFKSTtBQUFBLDBCQVEzQlYsT0FSMkIsQ0FLN0JXLFFBTDZCO0FBQUEsTUFLN0JBLFFBTDZCLGtDQUtsQkosWUFBWUksUUFMTTtBQUFBLHVCQVEzQlgsT0FSMkIsQ0FNN0JZLEtBTjZCO0FBQUEsTUFNN0JBLEtBTjZCLCtCQU1yQixNQU5xQjtBQUFBLDJCQVEzQlosT0FSMkIsQ0FPN0JhLFNBUDZCO0FBQUEsTUFPN0JBLFNBUDZCLG1DQU9qQk4sWUFBWU0sU0FQSztBQVMvQixTQUFPO0FBQ0wsaUJBQWE7QUFDWEM7QUFEVztBQURSLEdBQVA7QUFLRCxDQWREOztlQWdCZWpCLFkiLCJzb3VyY2VSb290IjoiLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGhlU3R5bGUgZnJvbSAndGhlLXN0eWxlJ1xuXG4vKiogU3R5bGUgZm9yIFRoZUh0bWwgKi9cbmNvbnN0IFRoZUh0bWxTdHlsZSA9ICh7Y2xhc3NOYW1lLCBpZCwgb3B0aW9uc30pID0+IChcbiAgPFRoZVN0eWxlIHsuLi57aWR9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCd0aGUtaHRtbC1zdHlsZScsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZXM9e1RoZUh0bWxTdHlsZS5kYXRhKG9wdGlvbnMpfVxuICAvPlxuKVxuXG5UaGVIdG1sU3R5bGUuZGlzcGxheU5hbWUgPSAnVGhlSHRtbFN0eWxlJ1xuVGhlSHRtbFN0eWxlLnByb3BUeXBlcyA9IHtcbiAgLyoqIFN0eWxlIG9wdGlvbnMgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuVGhlSHRtbFN0eWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge30sXG59XG5cblRoZUh0bWxTdHlsZS5kYXRhID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1RoZW1lVmFsdWVzfSA9IFRoZVN0eWxlXG4gIGNvbnN0IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBUaGVtZVZhbHVlcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgZm9udEZhbWlseSA9IFRoZW1lVmFsdWVzLmZvbnRGYW1pbHksXG4gICAgZm9udFNpemUgPSBUaGVtZVZhbHVlcy5mb250U2l6ZSxcbiAgICBoZWlnaCA9ICcxMDAlJyxcbiAgICB0ZXh0Q29sb3IgPSBUaGVtZVZhbHVlcy50ZXh0Q29sb3IsXG4gIH0gPSBvcHRpb25zXG4gIHJldHVybiB7XG4gICAgJy50aGUtaHRtbCc6IHtcbiAgICAgIGhlaWdodCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZUh0bWxTdHlsZVxuIl19