import axios from "axios";

/**
 * Controller function to render a custom form when a get call is made to route '/update-cobj'
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getFormData = async (req, res) => {
  res.render('updates', {title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'});
}

/**
 * Controller to make a post request to the HubSpot API to add new records to a custom object
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const updateCustomObject = async (req, res) => {

  // The submitted details from the custom form in the updates.pug file received via the req.body as a POST method form
  const {petName, petBreed, petSpecies} = req.body

  // Setup of the axios request
  const objectTypeId = 'p145259092_custom_pets'
  const updateCustomObjectsEndpoint = `https://api.hubapi.com/crm/v3/objects/${objectTypeId}`;
  const newData = {
    properties: {
      "pet_name": petName,
      "pet_breed": petBreed,
      "pet_species": petSpecies,
    }
  }
  const axiosConfig = {
    method: 'post',
    data: newData,
    url: updateCustomObjectsEndpoint,
    headers: {
      Authorization: `Bearer ${process.env.PRIVATE_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    }
  }

  // The try/catch block for the axios request in case it fails and a redirect back to the home page if successful
  try {

   await axios(axiosConfig);
   res.redirect('/');

  } catch (error) {

    console.error(error);

  }
}