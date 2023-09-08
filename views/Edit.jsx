
const React = require('react');

function Edit ({log}) {
  return (
    <div>
      <h2>Edit Log</h2>

      <form action={`/logs/${log._id}?_method=PUT`} method='POST'>

        Title: 
        <input type='text' name='title' defaultValue={log.title} required />

        Entry: 
        <textarea name='entry' defaultValue={log.entry} required></textarea>

        <input type='checkbox' name='shipIsBroken' defaultChecked={log.shipIsBroken}/> Ship is broken
        <br />

        <input type='submit' value='Update' />

      </form>

    </div>
  )
}

module.exports = Edit;