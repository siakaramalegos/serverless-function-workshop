// Every serverless function gets passed an event, and we can get query params from them.
// AWS and Netlify use it in this way.

exports.handler = async (event) => {
  console.log(event.queryStringParameters);
  const {text} = event.queryStringParameters

  return {
    statusCode: 200,
    body: `You said ${text}`,
  }
}
