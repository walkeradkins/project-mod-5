module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  maps: {
    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  }
};