const appid = "f99bbd9e4959b513e9bd0d7f7356b38d"
const getUrls = (api, city, countryCode) => (
    `https://api.openweathermap.org/data/2.5/${api}?q=${city},${countryCode}&appid=${appid}`
);
export default getUrls