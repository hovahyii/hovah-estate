import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '9d5a91577dmsh772a3980d5ec702p1ab494jsn843102b29abc'
//   }

export const fetchAPI = async (url) => {
	const {data} = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key": process.env.RAPID_API_KEY,
		},
	})

	return data
}