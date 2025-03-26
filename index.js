import express from 'express';

const app = express();
const port = 3002;

app.get('/hello', async (req, res) => {
  console.log('Code updated 13')
  try {
    return res.status(200).json('Hey there! code updated 13')
  } catch (error) {
    console.log('Request failed with error');
    console.error(error);

    res.status(500).json({ error: 'Error fetching data', message: error?.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port new ${port}`);
});
