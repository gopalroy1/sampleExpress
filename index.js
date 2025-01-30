  import express from 'express';
  import axios from 'axios';

  const app = express();
  const port = 3000;



  app.get('/hello', async (req, res) => {
    try {
      console.log('req came')
      const res1 = await axios.post('https://x3zupunkzxixtdf3rigvonm3jq0sinpv.lambda-url.ap-south-1.on.aws/');
      console.log('res1 complete',{res1});
      const response = await axios.get('https://smartzone.reliancegeneral.co.in/Login/', null, {
            headers: {
                // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
                // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                // 'Accept-Language': 'en-US,en;q=0.9',
                // 'Accept-Encoding': 'gzip, deflate, br',
                // 'Referer': 'https://target-website.com/',
                // 'DNT': '1', // Prevents tracking suspicion
                // 'Upgrade-Insecure-Requests': '1',
                // 'Connection': 'keep-alive',
                // 'Cache-Control': 'no-cache',
                // 'X-Requested-With': 'XMLHttpRequest',
                // 'X-Forwarded-For': '45.67.89.101', // Fake IP (optional)
                // 'Origin': 'https://target-website.com'
            }
        });
      console.log('all completed')
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
