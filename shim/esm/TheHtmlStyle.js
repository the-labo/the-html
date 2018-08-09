'use strict';

import _extends from "@babel/runtime/helpers/extends";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TheStyle } from 'the-style';
/** Style for TheHtml */

var TheHtmlStyle = function TheHtmlStyle(_ref) {
  var className = _ref.className,
      id = _ref.id,
      options = _ref.options;
  return React.createElement(TheStyle, _extends({
    id: id
  }, {
    className: classnames('the-html-style', className),
    styles: TheHtmlStyle.data(options)
  }));
};

TheHtmlStyle.displayName = 'TheHtmlStyle';
TheHtmlStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
};
TheHtmlStyle.defaultProps = {
  options: {}
};

TheHtmlStyle.data = function (options) {
  var ThemeValues = TheStyle.ThemeValues;
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

export default TheHtmlStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qcyJdLCJuYW1lcyI6WyJjbGFzc25hbWVzIiwiUHJvcFR5cGVzIiwiUmVhY3QiLCJUaGVTdHlsZSIsIlRoZUh0bWxTdHlsZSIsImNsYXNzTmFtZSIsImlkIiwib3B0aW9ucyIsImRhdGEiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIlRoZW1lVmFsdWVzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidGV4dENvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUEsT0FBT0EsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixXQUF6QjtBQUVBOztBQUNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBRUMsU0FBRixRQUFFQSxTQUFGO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJDLE9BQWpCLFFBQWlCQSxPQUFqQjtBQUFBLFNBQ25CLG9CQUFDLFFBQUQsV0FBYztBQUFDRCxJQUFBQSxFQUFFLEVBQUZBO0FBQUQsR0FBZDtBQUNVLElBQUEsU0FBUyxFQUFFTixVQUFVLENBQUMsZ0JBQUQsRUFBbUJLLFNBQW5CLENBRC9CO0FBRVUsSUFBQSxNQUFNLEVBQUVELFlBQVksQ0FBQ0ksSUFBYixDQUFrQkQsT0FBbEI7QUFGbEIsS0FEbUI7QUFBQSxDQUFyQjs7QUFPQUgsWUFBWSxDQUFDSyxXQUFiLEdBQTJCLGNBQTNCO0FBQ0FMLFlBQVksQ0FBQ00sU0FBYixHQUF5QjtBQUN2QjtBQUNBSCxFQUFBQSxPQUFPLEVBQUVOLFNBQVMsQ0FBQ1U7QUFGSSxDQUF6QjtBQUtBUCxZQUFZLENBQUNRLFlBQWIsR0FBNEI7QUFDMUJMLEVBQUFBLE9BQU8sRUFBRTtBQURpQixDQUE1Qjs7QUFJQUgsWUFBWSxDQUFDSSxJQUFiLEdBQW9CLFVBQUNELE9BQUQsRUFBYTtBQUFBLE1BQ3hCTSxXQUR3QixHQUNUVixRQURTLENBQ3hCVSxXQUR3QjtBQUFBLDhCQVEzQk4sT0FSMkIsQ0FHN0JPLGVBSDZCO0FBQUEsTUFHN0JBLGVBSDZCLHNDQUdYRCxXQUFXLENBQUNDLGVBSEQ7QUFBQSw0QkFRM0JQLE9BUjJCLENBSTdCUSxVQUo2QjtBQUFBLE1BSTdCQSxVQUo2QixvQ0FJaEJGLFdBQVcsQ0FBQ0UsVUFKSTtBQUFBLDBCQVEzQlIsT0FSMkIsQ0FLN0JTLFFBTDZCO0FBQUEsTUFLN0JBLFFBTDZCLGtDQUtsQkgsV0FBVyxDQUFDRyxRQUxNO0FBQUEsd0JBUTNCVCxPQVIyQixDQU03QlUsTUFONkI7QUFBQSxNQU03QkEsTUFONkIsZ0NBTXBCLE1BTm9CO0FBQUEsMkJBUTNCVixPQVIyQixDQU83QlcsU0FQNkI7QUFBQSxNQU83QkEsU0FQNkIsbUNBT2pCTCxXQUFXLENBQUNLLFNBUEs7QUFTL0IsU0FBTztBQUNMLGlCQUFhO0FBQ1hELE1BQUFBLE1BQU0sRUFBTkE7QUFEVztBQURSLEdBQVA7QUFLRCxDQWREOztBQWdCQSxlQUFlYixZQUFmIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlU3R5bGUgfSBmcm9tICd0aGUtc3R5bGUnXG5cbi8qKiBTdHlsZSBmb3IgVGhlSHRtbCAqL1xuY29uc3QgVGhlSHRtbFN0eWxlID0gKHtjbGFzc05hbWUsIGlkLCBvcHRpb25zfSkgPT4gKFxuICA8VGhlU3R5bGUgey4uLntpZH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3RoZS1odG1sLXN0eWxlJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlcz17VGhlSHRtbFN0eWxlLmRhdGEob3B0aW9ucyl9XG4gIC8+XG4pXG5cblRoZUh0bWxTdHlsZS5kaXNwbGF5TmFtZSA9ICdUaGVIdG1sU3R5bGUnXG5UaGVIdG1sU3R5bGUucHJvcFR5cGVzID0ge1xuICAvKiogU3R5bGUgb3B0aW9ucyAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5UaGVIdG1sU3R5bGUuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiB7fSxcbn1cblxuVGhlSHRtbFN0eWxlLmRhdGEgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7VGhlbWVWYWx1ZXN9ID0gVGhlU3R5bGVcbiAgY29uc3Qge1xuICAgIGJhY2tncm91bmRDb2xvciA9IFRoZW1lVmFsdWVzLmJhY2tncm91bmRDb2xvcixcbiAgICBmb250RmFtaWx5ID0gVGhlbWVWYWx1ZXMuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZSA9IFRoZW1lVmFsdWVzLmZvbnRTaXplLFxuICAgIGhlaWdodCA9ICcxMDAlJyxcbiAgICB0ZXh0Q29sb3IgPSBUaGVtZVZhbHVlcy50ZXh0Q29sb3IsXG4gIH0gPSBvcHRpb25zXG4gIHJldHVybiB7XG4gICAgJy50aGUtaHRtbCc6IHtcbiAgICAgIGhlaWdodCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZUh0bWxTdHlsZVxuIl19