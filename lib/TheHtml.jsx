'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * Html of the-components
 */
class TheHtml extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      id,
      lang,
      className,
      styles,
      children
    } = props
    return (
      <html className={ classnames('the-html', className) }
            style={ styles.root }
            { ...{ id, lang }}
      >
      { children }
      </html>
    )
  }

  /**
   * Define style
   * @param [options={}] options - Optional settings
   * @returns {Object} Style object
   */
  static styles (options = {}) {
    return {
      root: {}
    }
  }
}

TheHtml.propTypes = {
  /** CSS class name */
  className: PropTypes.string,
  /** Style objects */
  styles: PropTypes.object,
  /** DOM Id */
  id: PropTypes.string,
  /** Lang */
  lang: PropTypes.string
}

TheHtml.defaultProps = {
  className: null,
  styles: TheHtml.styles({}),
  id: 'the',
  lang: null
}

TheHtml.displayName = 'TheHtml'

export default TheHtml
