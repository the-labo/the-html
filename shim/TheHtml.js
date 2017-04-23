'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Html of the-components
 */
var TheHtml = function (_React$PureComponent) {
  (0, _inherits3.default)(TheHtml, _React$PureComponent);

  function TheHtml() {
    (0, _classCallCheck3.default)(this, TheHtml);
    return (0, _possibleConstructorReturn3.default)(this, (TheHtml.__proto__ || (0, _getPrototypeOf2.default)(TheHtml)).apply(this, arguments));
  }

  (0, _createClass3.default)(TheHtml, [{
    key: 'render',
    value: function render() {
      var s = this;
      var props = s.props;
      var id = props.id,
          lang = props.lang,
          className = props.className,
          styles = props.styles,
          children = props.children;

      return _react2.default.createElement(
        'html',
        (0, _extends3.default)({ className: (0, _classnames2.default)('the-html', className),
          style: styles.root
        }, { id: id, lang: lang }),
        children
      );
    }

    /**
     * Define style
     * @param [options={}] options - Optional settings
     * @returns {Object} Style object
     */

  }], [{
    key: 'styles',
    value: function styles() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return {
        root: {}
      };
    }
  }]);
  return TheHtml;
}(_react2.default.PureComponent);

TheHtml.propTypes = {
  /** CSS class name */
  className: _propTypes2.default.string,
  /** Style objects */
  styles: _propTypes2.default.object,
  /** DOM Id */
  id: _propTypes2.default.string,
  /** Lang */
  lang: _propTypes2.default.string
};

TheHtml.defaultProps = {
  className: null,
  styles: TheHtml.styles({}),
  id: 'the',
  lang: null
};

TheHtml.displayName = 'TheHtml';

exports.default = TheHtml;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWwuanN4Il0sIm5hbWVzIjpbIlRoZUh0bWwiLCJzIiwicHJvcHMiLCJpZCIsImxhbmciLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjaGlsZHJlbiIsInJvb3QiLCJvcHRpb25zIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7O0lBR01BLE87Ozs7Ozs7Ozs7NkJBQ007QUFDUixVQUFNQyxJQUFJLElBQVY7QUFEUSxVQUVBQyxLQUZBLEdBRVVELENBRlYsQ0FFQUMsS0FGQTtBQUFBLFVBSU5DLEVBSk0sR0FTSkQsS0FUSSxDQUlOQyxFQUpNO0FBQUEsVUFLTkMsSUFMTSxHQVNKRixLQVRJLENBS05FLElBTE07QUFBQSxVQU1OQyxTQU5NLEdBU0pILEtBVEksQ0FNTkcsU0FOTTtBQUFBLFVBT05DLE1BUE0sR0FTSkosS0FUSSxDQU9OSSxNQVBNO0FBQUEsVUFRTkMsUUFSTSxHQVNKTCxLQVRJLENBUU5LLFFBUk07O0FBVVIsYUFDRTtBQUFBO0FBQUEsaUNBQU0sV0FBWSwwQkFBVyxVQUFYLEVBQXVCRixTQUF2QixDQUFsQjtBQUNNLGlCQUFRQyxPQUFPRTtBQURyQixXQUVXLEVBQUVMLE1BQUYsRUFBTUMsVUFBTixFQUZYO0FBSUVHO0FBSkYsT0FERjtBQVFEOztBQUVEOzs7Ozs7Ozs2QkFLNkI7QUFBQSxVQUFkRSxPQUFjLHVFQUFKLEVBQUk7O0FBQzNCLGFBQU87QUFDTEQsY0FBTTtBQURELE9BQVA7QUFHRDs7O0VBOUJtQixnQkFBTUUsYTs7QUFpQzVCVixRQUFRVyxTQUFSLEdBQW9CO0FBQ2xCO0FBQ0FOLGFBQVcsb0JBQVVPLE1BRkg7QUFHbEI7QUFDQU4sVUFBUSxvQkFBVU8sTUFKQTtBQUtsQjtBQUNBVixNQUFJLG9CQUFVUyxNQU5JO0FBT2xCO0FBQ0FSLFFBQU0sb0JBQVVRO0FBUkUsQ0FBcEI7O0FBV0FaLFFBQVFjLFlBQVIsR0FBdUI7QUFDckJULGFBQVcsSUFEVTtBQUVyQkMsVUFBUU4sUUFBUU0sTUFBUixDQUFlLEVBQWYsQ0FGYTtBQUdyQkgsTUFBSSxLQUhpQjtBQUlyQkMsUUFBTTtBQUplLENBQXZCOztBQU9BSixRQUFRZSxXQUFSLEdBQXNCLFNBQXRCOztrQkFFZWYsTyIsImZpbGUiOiJUaGVIdG1sLmpzeCIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcblxuLyoqXG4gKiBIdG1sIG9mIHRoZS1jb21wb25lbnRzXG4gKi9cbmNsYXNzIFRoZUh0bWwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHNcbiAgICBsZXQge1xuICAgICAgaWQsXG4gICAgICBsYW5nLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGVzLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygndGhlLWh0bWwnLCBjbGFzc05hbWUpIH1cbiAgICAgICAgICAgIHN0eWxlPXsgc3R5bGVzLnJvb3QgfVxuICAgICAgICAgICAgeyAuLi57IGlkLCBsYW5nIH19XG4gICAgICA+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvaHRtbD5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIHN0eWxlXG4gICAqIEBwYXJhbSBbb3B0aW9ucz17fV0gb3B0aW9ucyAtIE9wdGlvbmFsIHNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFN0eWxlIG9iamVjdFxuICAgKi9cbiAgc3RhdGljIHN0eWxlcyAob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3Q6IHt9XG4gICAgfVxuICB9XG59XG5cblRoZUh0bWwucHJvcFR5cGVzID0ge1xuICAvKiogQ1NTIGNsYXNzIG5hbWUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogU3R5bGUgb2JqZWN0cyAqL1xuICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKiBET00gSWQgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBMYW5nICovXG4gIGxhbmc6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuVGhlSHRtbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgc3R5bGVzOiBUaGVIdG1sLnN0eWxlcyh7fSksXG4gIGlkOiAndGhlJyxcbiAgbGFuZzogbnVsbFxufVxuXG5UaGVIdG1sLmRpc3BsYXlOYW1lID0gJ1RoZUh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IFRoZUh0bWxcbiJdfQ==