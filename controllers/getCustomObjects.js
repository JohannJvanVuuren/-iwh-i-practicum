import axios from "axios";

export const getCustomObjects = async (req, res) => {
  const objectTypeId = '2-132551664';
  const properties = 'pet_name,pet_breed,pet_species';
  const getCustomObjectEndpoint = `https://api.hubapi.com/crm/v3/objects/${objectTypeId}?properties=${properties}`;

  const axiosConfig = {
    method: 'get',
    url: getCustomObjectEndpoint,
    headers: {
      Authorization: `Bearer ${process.env.PRIVATE_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    }
  }

  try {
    const response = await axios(axiosConfig);
    const data = response.data.results;
    // res.json(data)
    res.render('customObjects', { title: 'Custom Object | Pets', data });
  } catch (error) {
    console.error(error);
  }

}