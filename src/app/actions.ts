'use server'

type WeatherInfo = {
    latestSol: number
    season: string
    temp: number
}

export const getWeatherInfo: () => Promise<WeatherInfo> = async () => {
    const apiKey = process.env.NASA_API_KEY
    const res = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`)
    const data = await res.json()

    const sols: number[] = data.sol_keys.map((s: string) => Number(s))
    const latestSol = Math.max(...sols)
    const currentSolData = data[`${latestSol}`]

    const season = currentSolData.Season
    const temp = currentSolData.AT.av

    return {
        season,
        temp,
        latestSol
    }
}

export const getImages: (camera: string) => Promise<string[]> = async (camera: string) => {
    const apiKey = process.env.NASA_API_KEY
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=${apiKey}`)
    const data = await res.json()

    const images = data?.photos?.map((p: { img_src: string })=> p.img_src)

    return images
}