'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

/**
 * Html of the-components
 */
var TheHtml =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TheHtml, _React$PureComponent);

  function TheHtml() {
    (0, _classCallCheck2.default)(this, TheHtml);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TheHtml).apply(this, arguments));
  }

  (0, _createClass2.default)(TheHtml, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var children = props.children,
          className = props.className,
          id = props.id,
          lang = props.lang,
          styles = props.styles;
      return _react.default.createElement("html", (0, _extends2.default)({
        className: (0, _classnames.default)('the-html', className),
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
}(_react.default.PureComponent);

TheHtml.propTypes = {
  /** CSS class name */
  className: _propTypes.default.string,

  /** DOM Id */
  id: _propTypes.default.string,

  /** Lang */
  lang: _propTypes.default.string,

  /** Style objects */
  styles: _propTypes.default.object
};
TheHtml.defaultProps = {
  className: null,
  id: 'the-html',
  lang: null,
  styles: TheHtml.styles({})
};
TheHtml.displayName = 'TheHtml';
var _default = TheHtml;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZUh0bWwuanN4Il0sIm5hbWVzIjpbIlRoZUh0bWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaWQiLCJsYW5nIiwic3R5bGVzIiwicm9vdCIsIm9wdGlvbnMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7SUFHTUEsTzs7Ozs7Ozs7Ozs7OzZCQVlNO0FBQUEsVUFDREMsS0FEQyxHQUNRLElBRFIsQ0FDREEsS0FEQztBQUFBLFVBR05DLFFBSE0sR0FRSkQsS0FSSSxDQUdOQyxRQUhNO0FBQUEsVUFJTkMsU0FKTSxHQVFKRixLQVJJLENBSU5FLFNBSk07QUFBQSxVQUtOQyxFQUxNLEdBUUpILEtBUkksQ0FLTkcsRUFMTTtBQUFBLFVBTU5DLElBTk0sR0FRSkosS0FSSSxDQU1OSSxJQU5NO0FBQUEsVUFPTkMsTUFQTSxHQVFKTCxLQVJJLENBT05LLE1BUE07QUFTUixhQUNFO0FBQU0sUUFBQSxTQUFTLEVBQUUseUJBQVcsVUFBWCxFQUF1QkgsU0FBdkIsQ0FBakI7QUFDTSxRQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDQztBQURwQixTQUVVO0FBQUNILFFBQUFBLEVBQUUsRUFBRkEsRUFBRDtBQUFLQyxRQUFBQSxJQUFJLEVBQUpBO0FBQUwsT0FGVixHQUlDSCxRQUpELENBREY7QUFRRDs7OztBQTVCRDs7Ozs7NkJBSzZCO0FBQUEsVUFBZE0sT0FBYyx1RUFBSixFQUFJO0FBQzNCLGFBQU87QUFDTEQsUUFBQUEsSUFBSSxFQUFFO0FBREQsT0FBUDtBQUdEOzs7RUFWbUJFLGVBQU1DLGE7O0FBZ0M1QlYsT0FBTyxDQUFDVyxTQUFSLEdBQW9CO0FBQ2xCO0FBQ0FSLEVBQUFBLFNBQVMsRUFBRVMsbUJBQVVDLE1BRkg7O0FBR2xCO0FBQ0FULEVBQUFBLEVBQUUsRUFBRVEsbUJBQVVDLE1BSkk7O0FBS2xCO0FBQ0FSLEVBQUFBLElBQUksRUFBRU8sbUJBQVVDLE1BTkU7O0FBT2xCO0FBQ0FQLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVFO0FBUkEsQ0FBcEI7QUFXQWQsT0FBTyxDQUFDZSxZQUFSLEdBQXVCO0FBQ3JCWixFQUFBQSxTQUFTLEVBQUUsSUFEVTtBQUVyQkMsRUFBQUEsRUFBRSxFQUFFLFVBRmlCO0FBR3JCQyxFQUFBQSxJQUFJLEVBQUUsSUFIZTtBQUlyQkMsRUFBQUEsTUFBTSxFQUFFTixPQUFPLENBQUNNLE1BQVIsQ0FBZSxFQUFmO0FBSmEsQ0FBdkI7QUFPQU4sT0FBTyxDQUFDZ0IsV0FBUixHQUFzQixTQUF0QjtlQUVlaEIsTyIsInNvdXJjZVJvb3QiOiIuLi9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcblxuLyoqXG4gKiBIdG1sIG9mIHRoZS1jb21wb25lbnRzXG4gKi9cbmNsYXNzIFRoZUh0bWwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmluZSBzdHlsZVxuICAgKiBAcGFyYW0gW29wdGlvbnM9e31dIG9wdGlvbnMgLSBPcHRpb25hbCBzZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBTdHlsZSBvYmplY3RcbiAgICovXG4gIHN0YXRpYyBzdHlsZXMgKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICByb290OiB7fSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICAgIGxhbmcsXG4gICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndGhlLWh0bWwnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5yb290fVxuICAgICAgICAgICAgey4uLntpZCwgbGFuZ319XG4gICAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblRoZUh0bWwucHJvcFR5cGVzID0ge1xuICAvKiogQ1NTIGNsYXNzIG5hbWUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogRE9NIElkICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogTGFuZyAqL1xuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogU3R5bGUgb2JqZWN0cyAqL1xuICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblRoZUh0bWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG4gIGlkOiAndGhlLWh0bWwnLFxuICBsYW5nOiBudWxsLFxuICBzdHlsZXM6IFRoZUh0bWwuc3R5bGVzKHt9KSxcbn1cblxuVGhlSHRtbC5kaXNwbGF5TmFtZSA9ICdUaGVIdG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBUaGVIdG1sXG4iXX0=