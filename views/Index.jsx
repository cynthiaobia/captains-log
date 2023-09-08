
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
                <li key={i}>
                  <a href={`/logs/${log._id}`}>{log.title}</a>
                  <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                    <input type='submit' value='Delete'/>
                  </form>
                </li>
              )
            })
        }
      </ul>

    </div>
  )
}



module.exports = Index;