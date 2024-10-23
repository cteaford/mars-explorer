import ImageExplorer from "./components/ImageExplorer"
import { getImages, getWeatherInfo } from "./actions"
 
export default async function Home() {

  const { latestSol, season, temp } = await getWeatherInfo()

  return (
    <div className="container md">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white">Mars Sol {latestSol}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">weather info for mars on the given sol (day).</p>
      </div>
       <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-slate-400">Season</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{season}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-slate-400">Temperature (degrees celsius)</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{temp}</dd>
          </div>
        </dl>
      </div>

      <ImageExplorer ></ImageExplorer>
          
    </div>
  );
}
