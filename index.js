import express from 'express';
import axios from 'axios';

const app = express();
const port = 3002;

app.get('/hello', async (req, res) => {
// const cookieString = '_gcl_au=1.1.1180074930.1737009054; _ga=GA1.1.1131721988.1737009054; _fbp=fb.2.1737009054100.695378751499932203; _clck=12zj9xa%7C2%7Cft1%7C0%7C1842; _ga_LS5RTT216C=GS1.1.1738328128.6.0.1738328128.60.0.0; _uetvid=6fec0550d3d311ef9dca9903244fd62e|1ofwbec|1738328129835|1|1|bat.bing.com/p/insights/c/z; AppNameRSZ=c9OTdmEPlacj6DPok9h1BQ%3d%3d; UserRSZ=55NU7MAmCUqiZZf%2fkUWoN%2bVbjtuvlwW9fpDCSM6TYkdU3V9AryOLDrfPJm0vIXZD; ASP.NET_SessionId=snj0iks0svybjh5zkyxxlse0; cookiesession1=678A3E4AD65D94BF62D909FF0BBD1BD0; AppName=c9OTdmEPlacj6DPok9h1BQ%3d%3d; SmartZone=rs4|Z6CQS; AuthToken=b3a0727c-16f9-462c-bfec-2adbf229a838; AuthTokenRSZ=a66d4793-1d3c-4c07-86d2-c6556510a97c; __RequestVerificationToken=ibjEXvolusyFZi1NN86kV2-ps01eDqvh2SkOqRYMvxKCi_iGqZ7MExMzdkIsG7g5FhscUoYDVaTqX-IfyvJLKBMRURk1; SmartZoneRSZ=B157096DC20D4386B0C1764A7AB69CB92E2E9021480153236D7DBFF0BBC3829894CE6D32012DEE946E48829E5E54D31C22CC872018A8084BEA0F00F9F59D1439FF37E44BA99B8BB831F9E03FDB73FD595131EE4B'
  try {
    return res.status(200).json('Hey there!')
  } catch (error) {
    console.log('Request failed with error');
    console.error(error);

    res.status(500).json({ error: 'Error fetching data', message: error?.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
