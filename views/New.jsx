
const React = require('react');

function New (props) {

  return (
    <div>
      <h1>New Log</h1>

      <form action='/logs' method='POST'>
        Title: 
        <input type='text' name='title' required />
        <br />

        Entry: 
        <br />
        <textarea name='entry' required></textarea>
        <br />

        <input type='checkbox' name='shipIsBroken' required /> Ship is broken
        <br />

        <input type='submit' value='Submit' />
      </form>
      <br />
      <a href='./../logs'>Back to all logs</a>

    </div>
  )
}

module.exports = New;