'use strict'

import React from 'react'
import TheHtml from 'the-html'

class ExampleHtml extends React.PureComponent {
  render () {
    let styles = TheHtml.styles({})
    return (
      <TheHtml style={styles}/>
    )
  }
}

export default ExampleHtml
