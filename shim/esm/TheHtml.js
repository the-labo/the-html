'use strict';

import _extends from "@babel/runtime/helpers/extends";
import _Object$getPrototypeOf from "@babel/runtime/core-js/object/get-prototype-of";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _inherits from "@babel/runtime/helpers/inherits";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
/**
 * Html of the-components
 */

var TheHtml =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TheHtml, _React$PureComponent);

  function TheHtml() {
    _classCallCheck(this, TheHtml);

    return _possibleConstructorReturn(this, (TheHtml.__proto__ || _Object$getPrototypeOf(TheHtml)).apply(this, arguments));
  }

  _createClass(TheHtml, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var children = props.children,
          className = props.className,
          id = props.id,
          lang = props.lang,
          styles = props.styles;
      return React.createElement("html", _extends({
        className: classnames('the-html', className),
        style: styles.root
      }, {
        id: id,
        lang: lang
      }), children);
    }
  }], [{
    key: "styles",

    /**
     * Define style
     * @param [options={}] options - Optional settings
     * @returns {Object} Style object
     */
    value: function styles() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        root: {}
      };
    }
  }]);

  return TheHtml;
}(React.PureComponent);

TheHtml.propTypes = {
  /** CSS class name */
  className: PropTypes.string,

  /** DOM Id */
  id: PropTypes.string,

  /** Lang */
  lang: PropTypes.string,

  /** Style objects */
  styles: PropTypes.object
};
TheHtml.defaultProps = {
  className: null,
  id: 'the-html',
  lang: null,
  styles: TheHtml.styles({})
};
TheHtml.displayName = 'TheHtml';
export default TheHtml;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWwuanN4Il0sIm5hbWVzIjpbImNsYXNzbmFtZXMiLCJQcm9wVHlwZXMiLCJSZWFjdCIsInJlbmRlclRvU3RhdGljTWFya3VwIiwiVGhlSHRtbCIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpZCIsImxhbmciLCJzdHlsZXMiLCJyb290Iiwib3B0aW9ucyIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsT0FBT0EsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0Msb0JBQVQsUUFBcUMsa0JBQXJDO0FBRUE7Ozs7SUFHTUMsTzs7Ozs7Ozs7Ozs7Ozs2QkFZTTtBQUFBLFVBQ0RDLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7QUFBQSxVQUdOQyxRQUhNLEdBUUpELEtBUkksQ0FHTkMsUUFITTtBQUFBLFVBSU5DLFNBSk0sR0FRSkYsS0FSSSxDQUlORSxTQUpNO0FBQUEsVUFLTkMsRUFMTSxHQVFKSCxLQVJJLENBS05HLEVBTE07QUFBQSxVQU1OQyxJQU5NLEdBUUpKLEtBUkksQ0FNTkksSUFOTTtBQUFBLFVBT05DLE1BUE0sR0FRSkwsS0FSSSxDQU9OSyxNQVBNO0FBU1IsYUFDRTtBQUFNLG1CQUFXVixXQUFXLFVBQVgsRUFBdUJPLFNBQXZCLENBQWpCO0FBQ00sZUFBT0csT0FBT0M7QUFEcEIsU0FFVTtBQUFDSCxjQUFEO0FBQUtDO0FBQUwsT0FGVixHQUlDSCxRQUpELENBREY7QUFRRDs7OztBQTVCRDs7Ozs7NkJBSzZCO0FBQUEsVUFBZE0sT0FBYyx1RUFBSixFQUFJO0FBQzNCLGFBQU87QUFDTEQsY0FBTTtBQURELE9BQVA7QUFHRDs7OztFQVZtQlQsTUFBTVcsYTs7QUFnQzVCVCxRQUFRVSxTQUFSLEdBQW9CO0FBQ2xCO0FBQ0FQLGFBQVdOLFVBQVVjLE1BRkg7O0FBR2xCO0FBQ0FQLE1BQUlQLFVBQVVjLE1BSkk7O0FBS2xCO0FBQ0FOLFFBQU1SLFVBQVVjLE1BTkU7O0FBT2xCO0FBQ0FMLFVBQVFULFVBQVVlO0FBUkEsQ0FBcEI7QUFXQVosUUFBUWEsWUFBUixHQUF1QjtBQUNyQlYsYUFBVyxJQURVO0FBRXJCQyxNQUFJLFVBRmlCO0FBR3JCQyxRQUFNLElBSGU7QUFJckJDLFVBQVFOLFFBQVFNLE1BQVIsQ0FBZSxFQUFmO0FBSmEsQ0FBdkI7QUFPQU4sUUFBUWMsV0FBUixHQUFzQixTQUF0QjtBQUVBLGVBQWVkLE9BQWYiLCJzb3VyY2VSb290IjoiLi4vLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5cbi8qKlxuICogSHRtbCBvZiB0aGUtY29tcG9uZW50c1xuICovXG5jbGFzcyBUaGVIdG1sIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZpbmUgc3R5bGVcbiAgICogQHBhcmFtIFtvcHRpb25zPXt9XSBvcHRpb25zIC0gT3B0aW9uYWwgc2V0dGluZ3NcbiAgICogQHJldHVybnMge09iamVjdH0gU3R5bGUgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgc3R5bGVzIChvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDoge30sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cHJvcHN9ID0gdGhpc1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBsYW5nLFxuICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3RoZS1odG1sJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMucm9vdH1cbiAgICAgICAgICAgIHsuLi57aWQsIGxhbmd9fVxuICAgICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5UaGVIdG1sLnByb3BUeXBlcyA9IHtcbiAgLyoqIENTUyBjbGFzcyBuYW1lICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIERPTSBJZCAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIExhbmcgKi9cbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFN0eWxlIG9iamVjdHMgKi9cbiAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5UaGVIdG1sLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBpZDogJ3RoZS1odG1sJyxcbiAgbGFuZzogbnVsbCxcbiAgc3R5bGVzOiBUaGVIdG1sLnN0eWxlcyh7fSksXG59XG5cblRoZUh0bWwuZGlzcGxheU5hbWUgPSAnVGhlSHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgVGhlSHRtbFxuIl19