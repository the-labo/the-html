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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWwuanMiXSwibmFtZXMiOlsiY2xhc3NuYW1lcyIsIlByb3BUeXBlcyIsIlJlYWN0IiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJUaGVIdG1sIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImlkIiwibGFuZyIsInN0eWxlcyIsInJvb3QiLCJvcHRpb25zIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxPQUFPQSxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxvQkFBVCxRQUFxQyxrQkFBckM7QUFFQTs7OztJQUdNQyxPOzs7Ozs7Ozs7Ozs7OzZCQVlNO0FBQUEsVUFDREMsS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQztBQUFBLFVBR05DLFFBSE0sR0FRSkQsS0FSSSxDQUdOQyxRQUhNO0FBQUEsVUFJTkMsU0FKTSxHQVFKRixLQVJJLENBSU5FLFNBSk07QUFBQSxVQUtOQyxFQUxNLEdBUUpILEtBUkksQ0FLTkcsRUFMTTtBQUFBLFVBTU5DLElBTk0sR0FRSkosS0FSSSxDQU1OSSxJQU5NO0FBQUEsVUFPTkMsTUFQTSxHQVFKTCxLQVJJLENBT05LLE1BUE07QUFTUixhQUNFO0FBQU0sbUJBQVdWLFdBQVcsVUFBWCxFQUF1Qk8sU0FBdkIsQ0FBakI7QUFDTSxlQUFPRyxPQUFPQztBQURwQixTQUVVO0FBQUNILGNBQUQ7QUFBS0M7QUFBTCxPQUZWLEdBSUNILFFBSkQsQ0FERjtBQVFEOzs7O0FBNUJEOzs7Ozs2QkFLNkI7QUFBQSxVQUFkTSxPQUFjLHVFQUFKLEVBQUk7QUFDM0IsYUFBTztBQUNMRCxjQUFNO0FBREQsT0FBUDtBQUdEOzs7O0VBVm1CVCxNQUFNVyxhOztBQWdDNUJULFFBQVFVLFNBQVIsR0FBb0I7QUFDbEI7QUFDQVAsYUFBV04sVUFBVWMsTUFGSDs7QUFHbEI7QUFDQVAsTUFBSVAsVUFBVWMsTUFKSTs7QUFLbEI7QUFDQU4sUUFBTVIsVUFBVWMsTUFORTs7QUFPbEI7QUFDQUwsVUFBUVQsVUFBVWU7QUFSQSxDQUFwQjtBQVdBWixRQUFRYSxZQUFSLEdBQXVCO0FBQ3JCVixhQUFXLElBRFU7QUFFckJDLE1BQUksVUFGaUI7QUFHckJDLFFBQU0sSUFIZTtBQUlyQkMsVUFBUU4sUUFBUU0sTUFBUixDQUFlLEVBQWY7QUFKYSxDQUF2QjtBQU9BTixRQUFRYyxXQUFSLEdBQXNCLFNBQXRCO0FBRUEsZUFBZWQsT0FBZiIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcblxuLyoqXG4gKiBIdG1sIG9mIHRoZS1jb21wb25lbnRzXG4gKi9cbmNsYXNzIFRoZUh0bWwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmluZSBzdHlsZVxuICAgKiBAcGFyYW0gW29wdGlvbnM9e31dIG9wdGlvbnMgLSBPcHRpb25hbCBzZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBTdHlsZSBvYmplY3RcbiAgICovXG4gIHN0YXRpYyBzdHlsZXMgKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICByb290OiB7fSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICAgIGxhbmcsXG4gICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndGhlLWh0bWwnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5yb290fVxuICAgICAgICAgICAgey4uLntpZCwgbGFuZ319XG4gICAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblRoZUh0bWwucHJvcFR5cGVzID0ge1xuICAvKiogQ1NTIGNsYXNzIG5hbWUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogRE9NIElkICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogTGFuZyAqL1xuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogU3R5bGUgb2JqZWN0cyAqL1xuICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblRoZUh0bWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG4gIGlkOiAndGhlLWh0bWwnLFxuICBsYW5nOiBudWxsLFxuICBzdHlsZXM6IFRoZUh0bWwuc3R5bGVzKHt9KSxcbn1cblxuVGhlSHRtbC5kaXNwbGF5TmFtZSA9ICdUaGVIdG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBUaGVIdG1sXG4iXX0=