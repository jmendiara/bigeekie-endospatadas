const { RTMClient, WebClient } = require('@slack/client');

module.exports = async (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!');
  // An access token (from your Slack app or custom integration - usually xoxb)
  const token = process.env.SLACK_TOKEN;

  // The client is initialized and then started to get an active connection to the platform
  const rtm = new RTMClient(token);
  rtm.start();
  // Need a web client to find a channel where the app can post a message
  const web = new WebClient(token);

  const { channels } = await web.channels.list();
  const channel = channels.find(c => c.is_member);

  //rtm.sendMessage('Hello, world!', channel.id)

  robot.on


  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}

