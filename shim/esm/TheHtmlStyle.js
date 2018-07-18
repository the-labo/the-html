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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qcyJdLCJuYW1lcyI6WyJjbGFzc25hbWVzIiwiUHJvcFR5cGVzIiwiUmVhY3QiLCJUaGVTdHlsZSIsIlRoZUh0bWxTdHlsZSIsImNsYXNzTmFtZSIsImlkIiwib3B0aW9ucyIsImRhdGEiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIlRoZW1lVmFsdWVzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaGVpZ2h0IiwidGV4dENvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUEsT0FBT0EsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixXQUF6QjtBQUVBOztBQUNBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLFNBQUYsUUFBRUEsU0FBRjtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCQyxPQUFqQixRQUFpQkEsT0FBakI7QUFBQSxTQUNuQixvQkFBQyxRQUFELFdBQWM7QUFBQ0Q7QUFBRCxHQUFkO0FBQ1UsZUFBV04sV0FBVyxnQkFBWCxFQUE2QkssU0FBN0IsQ0FEckI7QUFFVSxZQUFRRCxhQUFhSSxJQUFiLENBQWtCRCxPQUFsQjtBQUZsQixLQURtQjtBQUFBLENBQXJCOztBQU9BSCxhQUFhSyxXQUFiLEdBQTJCLGNBQTNCO0FBQ0FMLGFBQWFNLFNBQWIsR0FBeUI7QUFDdkI7QUFDQUgsV0FBU04sVUFBVVU7QUFGSSxDQUF6QjtBQUtBUCxhQUFhUSxZQUFiLEdBQTRCO0FBQzFCTCxXQUFTO0FBRGlCLENBQTVCOztBQUlBSCxhQUFhSSxJQUFiLEdBQW9CLFVBQUNELE9BQUQsRUFBYTtBQUFBLE1BQ3hCTSxXQUR3QixHQUNUVixRQURTLENBQ3hCVSxXQUR3QjtBQUFBLDhCQVEzQk4sT0FSMkIsQ0FHN0JPLGVBSDZCO0FBQUEsTUFHN0JBLGVBSDZCLHNDQUdYRCxZQUFZQyxlQUhEO0FBQUEsNEJBUTNCUCxPQVIyQixDQUk3QlEsVUFKNkI7QUFBQSxNQUk3QkEsVUFKNkIsb0NBSWhCRixZQUFZRSxVQUpJO0FBQUEsMEJBUTNCUixPQVIyQixDQUs3QlMsUUFMNkI7QUFBQSxNQUs3QkEsUUFMNkIsa0NBS2xCSCxZQUFZRyxRQUxNO0FBQUEsd0JBUTNCVCxPQVIyQixDQU03QlUsTUFONkI7QUFBQSxNQU03QkEsTUFONkIsZ0NBTXBCLE1BTm9CO0FBQUEsMkJBUTNCVixPQVIyQixDQU83QlcsU0FQNkI7QUFBQSxNQU83QkEsU0FQNkIsbUNBT2pCTCxZQUFZSyxTQVBLO0FBUy9CLFNBQU87QUFDTCxpQkFBYTtBQUNYRDtBQURXO0FBRFIsR0FBUDtBQUtELENBZEQ7O0FBZ0JBLGVBQWViLFlBQWYiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVTdHlsZSB9IGZyb20gJ3RoZS1zdHlsZSdcblxuLyoqIFN0eWxlIGZvciBUaGVIdG1sICovXG5jb25zdCBUaGVIdG1sU3R5bGUgPSAoe2NsYXNzTmFtZSwgaWQsIG9wdGlvbnN9KSA9PiAoXG4gIDxUaGVTdHlsZSB7Li4ue2lkfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndGhlLWh0bWwtc3R5bGUnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGVzPXtUaGVIdG1sU3R5bGUuZGF0YShvcHRpb25zKX1cbiAgLz5cbilcblxuVGhlSHRtbFN0eWxlLmRpc3BsYXlOYW1lID0gJ1RoZUh0bWxTdHlsZSdcblRoZUh0bWxTdHlsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBTdHlsZSBvcHRpb25zICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblRoZUh0bWxTdHlsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHt9LFxufVxuXG5UaGVIdG1sU3R5bGUuZGF0YSA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtUaGVtZVZhbHVlc30gPSBUaGVTdHlsZVxuICBjb25zdCB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gVGhlbWVWYWx1ZXMuYmFja2dyb3VuZENvbG9yLFxuICAgIGZvbnRGYW1pbHkgPSBUaGVtZVZhbHVlcy5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplID0gVGhlbWVWYWx1ZXMuZm9udFNpemUsXG4gICAgaGVpZ2h0ID0gJzEwMCUnLFxuICAgIHRleHRDb2xvciA9IFRoZW1lVmFsdWVzLnRleHRDb2xvcixcbiAgfSA9IG9wdGlvbnNcbiAgcmV0dXJuIHtcbiAgICAnLnRoZS1odG1sJzoge1xuICAgICAgaGVpZ2h0LFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlSHRtbFN0eWxlXG4iXX0=