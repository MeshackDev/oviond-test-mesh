import requestPromise from 'request-promise';

export const fetchData = async (URL) => {
  const options = {
    uri: URL,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };
  
  try {
    const data = await requestPromise(options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
