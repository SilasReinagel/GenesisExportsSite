const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});


const site = ({
  name: 'Genesis Product Exports',
  siteOwner: 'Genesis Product Exports',
  owner: 'Genesis Product Exports',
  slogan: 'Providing World-Class Toys and Games to Amazon Buyers',
  heroHeader: 'Get the perfect toy for you or your child!',
  heroSubheader: '',
  email: 'contact@exablast.com',
  logo: './images/logo-w-transparency.png',
  logoMobile: './images/logo-w-transparency.png',
  address: address("2030 W Plata Ave", "Mesa", "AZ", "85023", ""),
  contactPrompt: 'Got a question?<br>Need help with an order?<br>Send us a message',
  social: {
  },
  screenshots: [
  ]
});

export default site;
