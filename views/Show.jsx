
const React = require('react');

function Show (props) {

  const { log } = props;
  console.log(log);

  return (
    <div>
      <h2>{log.title}</h2>
      <h3>{log.createdAt.toString()}</h3>
      <p>{log.entry}</p>
      {
        log.shipIsBroken ? 'This is the day the ship broke' : 'The ship is still in tact'
      }
      <br />
      <br />
      <a href='/logs'>Go back to all logs</a>
    </div>
  )
}

module.exports = Show;