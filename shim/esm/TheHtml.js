'use strict';

import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
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

    return _possibleConstructorReturn(this, _getPrototypeOf(TheHtml).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWwuanMiXSwibmFtZXMiOlsiY2xhc3NuYW1lcyIsIlByb3BUeXBlcyIsIlJlYWN0IiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJUaGVIdG1sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImlkIiwibGFuZyIsInN0eWxlcyIsInJvb3QiLCJvcHRpb25zIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxPQUFPQSxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxvQkFBVCxRQUFxQyxrQkFBckM7QUFFQTs7OztJQUdNQyxPOzs7Ozs7Ozs7Ozs7OzZCQVlNO0FBQUEsVUFDREMsS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQztBQUFBLFVBR05DLFFBSE0sR0FRSkQsS0FSSSxDQUdOQyxRQUhNO0FBQUEsVUFJTkMsU0FKTSxHQVFKRixLQVJJLENBSU5FLFNBSk07QUFBQSxVQUtOQyxFQUxNLEdBUUpILEtBUkksQ0FLTkcsRUFMTTtBQUFBLFVBTU5DLElBTk0sR0FRSkosS0FSSSxDQU1OSSxJQU5NO0FBQUEsVUFPTkMsTUFQTSxHQVFKTCxLQVJJLENBT05LLE1BUE07QUFTUixhQUNFO0FBQU0sUUFBQSxTQUFTLEVBQUVWLFVBQVUsQ0FBQyxVQUFELEVBQWFPLFNBQWIsQ0FBM0I7QUFDTSxRQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDQztBQURwQixTQUVVO0FBQUNILFFBQUFBLEVBQUUsRUFBRkEsRUFBRDtBQUFLQyxRQUFBQSxJQUFJLEVBQUpBO0FBQUwsT0FGVixHQUlDSCxRQUpELENBREY7QUFRRDs7OztBQTVCRDs7Ozs7NkJBSzZCO0FBQUEsVUFBZE0sT0FBYyx1RUFBSixFQUFJO0FBQzNCLGFBQU87QUFDTEQsUUFBQUEsSUFBSSxFQUFFO0FBREQsT0FBUDtBQUdEOzs7O0VBVm1CVCxLQUFLLENBQUNXLGE7O0FBZ0M1QlQsT0FBTyxDQUFDVSxTQUFSLEdBQW9CO0FBQ2xCO0FBQ0FQLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDYyxNQUZIOztBQUdsQjtBQUNBUCxFQUFBQSxFQUFFLEVBQUVQLFNBQVMsQ0FBQ2MsTUFKSTs7QUFLbEI7QUFDQU4sRUFBQUEsSUFBSSxFQUFFUixTQUFTLENBQUNjLE1BTkU7O0FBT2xCO0FBQ0FMLEVBQUFBLE1BQU0sRUFBRVQsU0FBUyxDQUFDZTtBQVJBLENBQXBCO0FBV0FaLE9BQU8sQ0FBQ2EsWUFBUixHQUF1QjtBQUNyQlYsRUFBQUEsU0FBUyxFQUFFLElBRFU7QUFFckJDLEVBQUFBLEVBQUUsRUFBRSxVQUZpQjtBQUdyQkMsRUFBQUEsSUFBSSxFQUFFLElBSGU7QUFJckJDLEVBQUFBLE1BQU0sRUFBRU4sT0FBTyxDQUFDTSxNQUFSLENBQWUsRUFBZjtBQUphLENBQXZCO0FBT0FOLE9BQU8sQ0FBQ2MsV0FBUixHQUFzQixTQUF0QjtBQUVBLGVBQWVkLE9BQWYiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5cbi8qKlxuICogSHRtbCBvZiB0aGUtY29tcG9uZW50c1xuICovXG5jbGFzcyBUaGVIdG1sIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZpbmUgc3R5bGVcbiAgICogQHBhcmFtIFtvcHRpb25zPXt9XSBvcHRpb25zIC0gT3B0aW9uYWwgc2V0dGluZ3NcbiAgICogQHJldHVybnMge09iamVjdH0gU3R5bGUgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgc3R5bGVzIChvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDoge30sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cHJvcHN9ID0gdGhpc1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBsYW5nLFxuICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3RoZS1odG1sJywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMucm9vdH1cbiAgICAgICAgICAgIHsuLi57aWQsIGxhbmd9fVxuICAgICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5UaGVIdG1sLnByb3BUeXBlcyA9IHtcbiAgLyoqIENTUyBjbGFzcyBuYW1lICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIERPTSBJZCAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIExhbmcgKi9cbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFN0eWxlIG9iamVjdHMgKi9cbiAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5UaGVIdG1sLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBpZDogJ3RoZS1odG1sJyxcbiAgbGFuZzogbnVsbCxcbiAgc3R5bGVzOiBUaGVIdG1sLnN0eWxlcyh7fSksXG59XG5cblRoZUh0bWwuZGlzcGxheU5hbWUgPSAnVGhlSHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgVGhlSHRtbFxuIl19