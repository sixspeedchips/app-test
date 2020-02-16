import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
      <ul key={r.codeId}>
        Code: {r.codeId}<br/>    {r.diagnosis}
      </ul>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
