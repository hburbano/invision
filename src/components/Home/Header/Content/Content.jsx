import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/Shared'

const Content = props => {
  return (
    <div className={props.className}>
      <div className="left">
        <h1>Become a host location</h1>
        <span>Recive a comition</span>
        <div>
          <Button inverse>Read More</Button>
          <a href="example@example.com">or contact sales</a>
        </div>
      </div>
      <div className="right" />
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string
}

export default Content
