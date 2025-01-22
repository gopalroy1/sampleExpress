  import express from 'express';
  import axios from 'axios';

  const app = express();
  const port = 3000;



  app.get('/hello', async (req, res) => {
    try {
      const response = await axios.get('https://smartzone.reliancegeneral.co.in/Login/IMDLogin?ReturnUrl=%2fMotor%2fPartialQuoteProducTypes%3fbaseProductCode%3dqNqXB5%25252bwj5cfBNx%25252fo5dSgA%25253d%25253d&baseProductCode=qNqXB5%252bwj5cfBNx%252fo5dSgA%253d%253d');
      console.log('sucess')
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
    }
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });