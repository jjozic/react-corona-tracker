import axios from 'axios'

const url = 'https://covid.mathdro.id/api'

export const fetchData = async () => {
    try {
        //we filter the data from the response
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)

        //returns only the JSON content which we  and need
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {

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

    }
}