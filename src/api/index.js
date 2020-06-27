import axios from 'axios'

const url = 'https://covid.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = url

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        //we filter the data from the response
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)

        //returns only the JSON content which we  and need
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        //we filter the data from the response
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        //returns only the JSON content which we  and need
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        //we filter the data from the response
        const { data: { countries }} = await axios.get(`${url}/countries`)

        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}