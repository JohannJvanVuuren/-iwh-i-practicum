import axios from "axios";

export const getFormData = async (req, res) => {
  res.render('updates', {title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'});
}

export const updateCustomObject = async (req, res) => {
  const {petName, petBreed, petSpecies} = req.body
  const objectTypeId = 'p145259092_custom_pets'
  const objectId = '2-132551664'
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

  try {
   await axios(axiosConfig);
   res.redirect('/');
  } catch (error) {
    console.error(error);
  }
}