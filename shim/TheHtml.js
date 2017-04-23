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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TheHtml
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
  styles: {},
  id: 'the',
  lang: null
};

TheHtml.displayName = 'TheHtml';

exports.default = TheHtml;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWwuanN4Il0sIm5hbWVzIjpbIlRoZUh0bWwiLCJzIiwicHJvcHMiLCJpZCIsImxhbmciLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjaGlsZHJlbiIsInJvb3QiLCJvcHRpb25zIiwiUHVyZUNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7O0lBR01BLE87Ozs7Ozs7Ozs7NkJBQ007QUFDUixVQUFNQyxJQUFJLElBQVY7QUFEUSxVQUVBQyxLQUZBLEdBRVVELENBRlYsQ0FFQUMsS0FGQTtBQUFBLFVBSU5DLEVBSk0sR0FTSkQsS0FUSSxDQUlOQyxFQUpNO0FBQUEsVUFLTkMsSUFMTSxHQVNKRixLQVRJLENBS05FLElBTE07QUFBQSxVQU1OQyxTQU5NLEdBU0pILEtBVEksQ0FNTkcsU0FOTTtBQUFBLFVBT05DLE1BUE0sR0FTSkosS0FUSSxDQU9OSSxNQVBNO0FBQUEsVUFRTkMsUUFSTSxHQVNKTCxLQVRJLENBUU5LLFFBUk07O0FBVVIsYUFDRTtBQUFBO0FBQUEsaUNBQU0sV0FBWSwwQkFBVyxVQUFYLEVBQXVCRixTQUF2QixDQUFsQjtBQUNNLGlCQUFRQyxPQUFPRTtBQURyQixXQUVXLEVBQUVMLE1BQUYsRUFBTUMsVUFBTixFQUZYO0FBSUVHO0FBSkYsT0FERjtBQVFEOztBQUVEOzs7Ozs7Ozs2QkFLNkI7QUFBQSxVQUFkRSxPQUFjLHVFQUFKLEVBQUk7O0FBQzNCLGFBQU87QUFDTEQsY0FBTTtBQURELE9BQVA7QUFHRDs7O0VBOUJtQixnQkFBTUUsYTs7QUFpQzVCVixRQUFRVyxTQUFSLEdBQW9CO0FBQ2xCO0FBQ0FOLGFBQVcsb0JBQVVPLE1BRkg7QUFHbEI7QUFDQU4sVUFBUSxvQkFBVU8sTUFKQTtBQUtsQjtBQUNBVixNQUFJLG9CQUFVUyxNQU5JO0FBT2xCO0FBQ0FSLFFBQU0sb0JBQVVRO0FBUkUsQ0FBcEI7O0FBV0FaLFFBQVFjLFlBQVIsR0FBdUI7QUFDckJULGFBQVcsSUFEVTtBQUVyQkMsVUFBUSxFQUZhO0FBR3JCSCxNQUFJLEtBSGlCO0FBSXJCQyxRQUFNO0FBSmUsQ0FBdkI7O0FBT0FKLFFBQVFlLFdBQVIsR0FBc0IsU0FBdEI7O2tCQUVlZixPIiwiZmlsZSI6IlRoZUh0bWwuanN4Iiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG4vKipcbiAqIFRoZUh0bWxcbiAqL1xuY2xhc3MgVGhlSHRtbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gc1xuICAgIGxldCB7XG4gICAgICBpZCxcbiAgICAgIGxhbmcsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZXMsXG4gICAgICBjaGlsZHJlblxuICAgIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCd0aGUtaHRtbCcsIGNsYXNzTmFtZSkgfVxuICAgICAgICAgICAgc3R5bGU9eyBzdHlsZXMucm9vdCB9XG4gICAgICAgICAgICB7IC4uLnsgaWQsIGxhbmcgfX1cbiAgICAgID5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgc3R5bGVcbiAgICogQHBhcmFtIFtvcHRpb25zPXt9XSBvcHRpb25zIC0gT3B0aW9uYWwgc2V0dGluZ3NcbiAgICogQHJldHVybnMge09iamVjdH0gU3R5bGUgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgc3R5bGVzIChvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDoge31cbiAgICB9XG4gIH1cbn1cblxuVGhlSHRtbC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDU1MgY2xhc3MgbmFtZSAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBTdHlsZSBvYmplY3RzICovXG4gIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqIERPTSBJZCAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIExhbmcgKi9cbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5UaGVIdG1sLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBzdHlsZXM6IHt9LFxuICBpZDogJ3RoZScsXG4gIGxhbmc6IG51bGxcbn1cblxuVGhlSHRtbC5kaXNwbGF5TmFtZSA9ICdUaGVIdG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBUaGVIdG1sXG4iXX0=