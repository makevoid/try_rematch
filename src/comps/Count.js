import React from 'react';
import { connect } from 'react-redux'

const Count = props => (
  <div class="Count">
    <p>
      The count is {props.count}
    </p>
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
)

const mapState = state => ({
  count: state.count
})

const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1)
})

export default connect(mapState, mapDispatch)(Count)
