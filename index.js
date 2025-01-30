  import express from 'express';
  import axios from 'axios';

  const app = express();
  const port = 3000;



  app.get('/hello', async (req, res) => {
    try {
      console.log('req came')
      const res1 = await axios.post('https://x3zupunkzxixtdf3rigvonm3jq0sinpv.lambda-url.ap-south-1.on.aws/');
      console.log('res1 complete',{res1});
      const response = await axios.get('https://smartzone.reliancegeneral.co.in/Login/IMDLogin?ReturnUrl=%2fMotor%2fPartialQuoteProducTypes%3fbaseProductCode%3dqNqXB5%25252bwj5cfBNx%25252fo5dSgA%25253d%25253d&baseProductCode=qNqXB5%252bwj5cfBNx%252fo5dSgA%253d%253d');
      console.log('sucess')
      res.send('sucess');
    } catch (error) {
      console.log('In error');
      console.error(error);
      res.status(500).send('Error fetching data',error?.message);
    }
  });

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
