import axios from "axios";

export const getFormData = async (req, res) => {
  res.render('updates', {title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'});
}