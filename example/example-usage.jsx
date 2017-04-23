'use strict'

import React from 'react'
import TheHtml from 'the-html'

class ExampleComponent extends React.PureComponent {
  render () {
    let style = TheHtml.style({})
    return (
      <div>
        <TheHtml style={style} />
      </div>
    )
  }
}

export default ExampleComponent
