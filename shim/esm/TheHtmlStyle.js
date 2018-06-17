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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWxTdHlsZS5qc3giXSwibmFtZXMiOlsiY2xhc3NuYW1lcyIsIlByb3BUeXBlcyIsIlJlYWN0IiwiVGhlU3R5bGUiLCJUaGVIdG1sU3R5bGUiLCJjbGFzc05hbWUiLCJpZCIsIm9wdGlvbnMiLCJkYXRhIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJUaGVtZVZhbHVlcyIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImhlaWdodCIsInRleHRDb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBLE9BQU9BLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsV0FBekI7QUFFQTs7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFFQyxTQUFGLFFBQUVBLFNBQUY7QUFBQSxNQUFhQyxFQUFiLFFBQWFBLEVBQWI7QUFBQSxNQUFpQkMsT0FBakIsUUFBaUJBLE9BQWpCO0FBQUEsU0FDbkIsb0JBQUMsUUFBRCxXQUFjO0FBQUNEO0FBQUQsR0FBZDtBQUNVLGVBQVdOLFdBQVcsZ0JBQVgsRUFBNkJLLFNBQTdCLENBRHJCO0FBRVUsWUFBUUQsYUFBYUksSUFBYixDQUFrQkQsT0FBbEI7QUFGbEIsS0FEbUI7QUFBQSxDQUFyQjs7QUFPQUgsYUFBYUssV0FBYixHQUEyQixjQUEzQjtBQUNBTCxhQUFhTSxTQUFiLEdBQXlCO0FBQ3ZCO0FBQ0FILFdBQVNOLFVBQVVVO0FBRkksQ0FBekI7QUFLQVAsYUFBYVEsWUFBYixHQUE0QjtBQUMxQkwsV0FBUztBQURpQixDQUE1Qjs7QUFJQUgsYUFBYUksSUFBYixHQUFvQixVQUFDRCxPQUFELEVBQWE7QUFBQSxNQUN4Qk0sV0FEd0IsR0FDVFYsUUFEUyxDQUN4QlUsV0FEd0I7QUFBQSw4QkFRM0JOLE9BUjJCLENBRzdCTyxlQUg2QjtBQUFBLE1BRzdCQSxlQUg2QixzQ0FHWEQsWUFBWUMsZUFIRDtBQUFBLDRCQVEzQlAsT0FSMkIsQ0FJN0JRLFVBSjZCO0FBQUEsTUFJN0JBLFVBSjZCLG9DQUloQkYsWUFBWUUsVUFKSTtBQUFBLDBCQVEzQlIsT0FSMkIsQ0FLN0JTLFFBTDZCO0FBQUEsTUFLN0JBLFFBTDZCLGtDQUtsQkgsWUFBWUcsUUFMTTtBQUFBLHdCQVEzQlQsT0FSMkIsQ0FNN0JVLE1BTjZCO0FBQUEsTUFNN0JBLE1BTjZCLGdDQU1wQixNQU5vQjtBQUFBLDJCQVEzQlYsT0FSMkIsQ0FPN0JXLFNBUDZCO0FBQUEsTUFPN0JBLFNBUDZCLG1DQU9qQkwsWUFBWUssU0FQSztBQVMvQixTQUFPO0FBQ0wsaUJBQWE7QUFDWEQ7QUFEVztBQURSLEdBQVA7QUFLRCxDQWREOztBQWdCQSxlQUFlYixZQUFmIiwic291cmNlUm9vdCI6Ii4uLy4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlU3R5bGUgfSBmcm9tICd0aGUtc3R5bGUnXG5cbi8qKiBTdHlsZSBmb3IgVGhlSHRtbCAqL1xuY29uc3QgVGhlSHRtbFN0eWxlID0gKHtjbGFzc05hbWUsIGlkLCBvcHRpb25zfSkgPT4gKFxuICA8VGhlU3R5bGUgey4uLntpZH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3RoZS1odG1sLXN0eWxlJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlcz17VGhlSHRtbFN0eWxlLmRhdGEob3B0aW9ucyl9XG4gIC8+XG4pXG5cblRoZUh0bWxTdHlsZS5kaXNwbGF5TmFtZSA9ICdUaGVIdG1sU3R5bGUnXG5UaGVIdG1sU3R5bGUucHJvcFR5cGVzID0ge1xuICAvKiogU3R5bGUgb3B0aW9ucyAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5UaGVIdG1sU3R5bGUuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiB7fSxcbn1cblxuVGhlSHRtbFN0eWxlLmRhdGEgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7VGhlbWVWYWx1ZXN9ID0gVGhlU3R5bGVcbiAgY29uc3Qge1xuICAgIGJhY2tncm91bmRDb2xvciA9IFRoZW1lVmFsdWVzLmJhY2tncm91bmRDb2xvcixcbiAgICBmb250RmFtaWx5ID0gVGhlbWVWYWx1ZXMuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZSA9IFRoZW1lVmFsdWVzLmZvbnRTaXplLFxuICAgIGhlaWdodCA9ICcxMDAlJyxcbiAgICB0ZXh0Q29sb3IgPSBUaGVtZVZhbHVlcy50ZXh0Q29sb3IsXG4gIH0gPSBvcHRpb25zXG4gIHJldHVybiB7XG4gICAgJy50aGUtaHRtbCc6IHtcbiAgICAgIGhlaWdodCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZUh0bWxTdHlsZVxuIl19