import axios from 'axios';

export default axios.create({
  baseURI: 'https://0a4bab96e4ee44dfac8aa896fa62b423.vfs.cloud9.us-east-2.amazonaws.com:8081',
});


//export default axios.defaults.baseURL = 'https://0a4bab96e4ee44dfac8aa896fa62b423.vfs.cloud9.us-east-2.amazonaws.com:8081';
