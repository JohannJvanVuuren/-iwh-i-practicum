import axios from "axios";

/**
 * Controller function to get existing records of a custom object from the HubSpot API and render
 * to data via a Pug template to the user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getCustomObjects = async (req, res) => {

  // Setup of axios request
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

  // Axios get request to the specified API to get and render the information in a Pug template.
  // Use of a try/catch block in case the axios call fails
  try {

    const response = await axios(axiosConfig);
    const data = response.data.results;
    res.render('customObjects', { title: 'Custom Object | Pets', data });

  } catch (error) {

    console.error(error);

  }
}