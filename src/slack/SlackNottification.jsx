import axios from 'axios'

const SlackButton = () => {
  const sendMessageToSlack = () => {
    const slackHookUrl =
      'https://hooks.slack.com/services/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'
    const message = {
      channel: '#dayoff',
      text: 'Hello, Slack!',
    }
    axios
      .post(slackHookUrl, message, {
        withCredentials: true,
        origin: 'http://localhost:5173',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return <button onClick={sendMessageToSlack}>Slack</button>
}

export default SlackButton
