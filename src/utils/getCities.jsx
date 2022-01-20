const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: ' Barcelona', country: 'España', countryCode:"ES" },
    {city: 'Bogota', country: 'Colombia', countryCode: "CO"},
    {city: 'Ciudad de México', country: 'México', countryCode: "MX"}
]

export const getCities = () =>(cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.find(city => city.countryCode === countryCode)['country']
)