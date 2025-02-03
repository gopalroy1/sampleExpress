import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/hello', async (req, res) => {
  const cookieString = '_gcl_au=1.1.1180074930.1737009054; _ga=GA1.1.1131721988.1737009054; _fbp=fb.2.1737009054100.695378751499932203; _clck=12zj9xa%7C2%7Cft1%7C0%7C1842; _ga_LS5RTT216C=GS1.1.1738328128.6.0.1738328128.60.0.0; _uetvid=6fec0550d3d311ef9dca9903244fd62e|1ofwbec|1738328129835|1|1|bat.bing.com/p/insights/c/z; AppNameRSZ=c9OTdmEPlacj6DPok9h1BQ%3d%3d; UserRSZ=55NU7MAmCUqiZZf%2fkUWoN%2bVbjtuvlwW9fpDCSM6TYkdU3V9AryOLDrfPJm0vIXZD; ASP.NET_SessionId=snj0iks0svybjh5zkyxxlse0; cookiesession1=678A3E4AD65D94BF62D909FF0BBD1BD0; AuthTokenRSZ=fb2aeb3e-5996-4d99-b05f-dddd24f6faba; __RequestVerificationToken=p-kZ4iNnKUYyQh4Cq0RSKgVjFRb-pRPrlg6S6ElwqQo6Xh0nB9XzMZHmuwFSIdbeKf9FP1UIeWTgrOFDm_DY_GcOBKE1; SmartZoneRSZ=FD46D574F84C23D563F56FA34B1F7FC1A3E5E15C8501E8216A1CDA262DB3310D0D46088AA456FBCA3B02CBAAD397C47BC8BE51B13B93367CD61B407FDFCBBA45A81523D7F578A5891193AE78F8727A7791B1E0EC; SmartZone=rs2|Z6Bzu';

  try {
    console.log('Request received');

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Cookie: cookieString
    };

    // Await the axios request
    const response = await axios.get(
      'https://smartzone.reliancegeneral.co.in:8443/Master/GetExShowRoomPrice?Rto_State_City=DELHI%20|%20DELHI%20NORTH%20MALL%20ROAD%20|%20DL-01&MakeName_ModelName_Variance=HERO%20HONDA%20%7C%20ACHIEVER%20%7C%20150%20KS%20%7C%20CC%2FWatt%20150&VehicleTypeId=&ProductCode=2375&VehicleSubTypeId=&bodychasis=undefined&_=1738569980122',
      { headers }
    );

    console.log('Request completed successfully',);

    // Send the response back
    return res.json(response.data);
  } catch (error) {
    console.log('Request failed with error');
    console.error(error);

    res.status(500).json({ error: 'Error fetching data', message: error?.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
