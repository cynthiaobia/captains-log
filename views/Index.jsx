
const React = require('react');

function Index(props) {

  const {logs} = props;
  console.log('===================');
  console.log(logs);
  console.log('*******************');

  logs.map(log => console.log(log.title))

  return (
    <div>
      <h1>Captains Logs</h1>
      <a href='/logs/new'>create a new log</a>

      <ul>

        {
          logs.map(
            (log, i) => {
              return (
                <li><a href={`/logs/${log._id}`}>{log.title}</a></li>
              )
            })
        }
      </ul>

    </div>
  )
}

module.exports = Index;