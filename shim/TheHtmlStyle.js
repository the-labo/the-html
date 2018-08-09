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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qc3giXSwibmFtZXMiOlsiVGhlSHRtbFN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJvcHRpb25zIiwiZGF0YSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiVGhlbWVWYWx1ZXMiLCJUaGVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdodCIsInRleHRDb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCQyxPQUFqQixRQUFpQkEsT0FBakI7QUFBQSxTQUNuQiw2QkFBQyxrQkFBRCx5QkFBYztBQUFDRCxJQUFBQSxFQUFFLEVBQUZBO0FBQUQsR0FBZDtBQUNVLElBQUEsU0FBUyxFQUFFLHlCQUFXLGdCQUFYLEVBQTZCRCxTQUE3QixDQURyQjtBQUVVLElBQUEsTUFBTSxFQUFFRCxZQUFZLENBQUNJLElBQWIsQ0FBa0JELE9BQWxCO0FBRmxCLEtBRG1CO0FBQUEsQ0FBckI7O0FBT0FILFlBQVksQ0FBQ0ssV0FBYixHQUEyQixjQUEzQjtBQUNBTCxZQUFZLENBQUNNLFNBQWIsR0FBeUI7QUFDdkI7QUFDQUgsRUFBQUEsT0FBTyxFQUFFSSxtQkFBVUM7QUFGSSxDQUF6QjtBQUtBUixZQUFZLENBQUNTLFlBQWIsR0FBNEI7QUFDMUJOLEVBQUFBLE9BQU8sRUFBRTtBQURpQixDQUE1Qjs7QUFJQUgsWUFBWSxDQUFDSSxJQUFiLEdBQW9CLFVBQUNELE9BQUQsRUFBYTtBQUFBLE1BQ3hCTyxXQUR3QixHQUNUQyxrQkFEUyxDQUN4QkQsV0FEd0I7QUFBQSw4QkFRM0JQLE9BUjJCLENBRzdCUyxlQUg2QjtBQUFBLE1BRzdCQSxlQUg2QixzQ0FHWEYsV0FBVyxDQUFDRSxlQUhEO0FBQUEsNEJBUTNCVCxPQVIyQixDQUk3QlUsVUFKNkI7QUFBQSxNQUk3QkEsVUFKNkIsb0NBSWhCSCxXQUFXLENBQUNHLFVBSkk7QUFBQSwwQkFRM0JWLE9BUjJCLENBSzdCVyxRQUw2QjtBQUFBLE1BSzdCQSxRQUw2QixrQ0FLbEJKLFdBQVcsQ0FBQ0ksUUFMTTtBQUFBLHdCQVEzQlgsT0FSMkIsQ0FNN0JZLE1BTjZCO0FBQUEsTUFNN0JBLE1BTjZCLGdDQU1wQixNQU5vQjtBQUFBLDJCQVEzQlosT0FSMkIsQ0FPN0JhLFNBUDZCO0FBQUEsTUFPN0JBLFNBUDZCLG1DQU9qQk4sV0FBVyxDQUFDTSxTQVBLO0FBUy9CLFNBQU87QUFDTCxpQkFBYTtBQUNYRCxNQUFBQSxNQUFNLEVBQU5BO0FBRFc7QUFEUixHQUFQO0FBS0QsQ0FkRDs7ZUFnQmVmLFkiLCJzb3VyY2VSb290IjoiLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVTdHlsZSB9IGZyb20gJ3RoZS1zdHlsZSdcblxuLyoqIFN0eWxlIGZvciBUaGVIdG1sICovXG5jb25zdCBUaGVIdG1sU3R5bGUgPSAoe2NsYXNzTmFtZSwgaWQsIG9wdGlvbnN9KSA9PiAoXG4gIDxUaGVTdHlsZSB7Li4ue2lkfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndGhlLWh0bWwtc3R5bGUnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGVzPXtUaGVIdG1sU3R5bGUuZGF0YShvcHRpb25zKX1cbiAgLz5cbilcblxuVGhlSHRtbFN0eWxlLmRpc3BsYXlOYW1lID0gJ1RoZUh0bWxTdHlsZSdcblRoZUh0bWxTdHlsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBTdHlsZSBvcHRpb25zICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblRoZUh0bWxTdHlsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHt9LFxufVxuXG5UaGVIdG1sU3R5bGUuZGF0YSA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtUaGVtZVZhbHVlc30gPSBUaGVTdHlsZVxuICBjb25zdCB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gVGhlbWVWYWx1ZXMuYmFja2dyb3VuZENvbG9yLFxuICAgIGZvbnRGYW1pbHkgPSBUaGVtZVZhbHVlcy5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplID0gVGhlbWVWYWx1ZXMuZm9udFNpemUsXG4gICAgaGVpZ2h0ID0gJzEwMCUnLFxuICAgIHRleHRDb2xvciA9IFRoZW1lVmFsdWVzLnRleHRDb2xvcixcbiAgfSA9IG9wdGlvbnNcbiAgcmV0dXJuIHtcbiAgICAnLnRoZS1odG1sJzoge1xuICAgICAgaGVpZ2h0LFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlSHRtbFN0eWxlXG4iXX0=