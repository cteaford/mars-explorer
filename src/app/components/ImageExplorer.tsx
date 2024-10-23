'use client'

import React, { useEffect, useState } from "react"
import { getImages } from "../actions"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

export default (): JSX.Element => {

    const [camera, setCamera] = useState<string>('fhaz')
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        const updateImages =async () => {
            const is = await getImages(camera)
            setImages(is)
        }

        updateImages()
    }, [camera])

    return (
        <div>
            <Select onValueChange={(v: string) => setCamera(v)}>
                <SelectTrigger className="w-[300px] mb-5">
                    <SelectValue placeholder="Select a Camera" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="fhaz">Front Hazard Avoidance Camera</SelectItem>
                    <SelectItem value="rhaz">Rear Hazard Avoidance Camera</SelectItem>
                    <SelectItem value="mast">Mast Camera</SelectItem>
                    <SelectItem value="chemcam">Chemistry and Camera Complex</SelectItem>
                    <SelectItem value="mahli">Mars Hand Lense Imager</SelectItem>
                    <SelectItem value="mardi">Mars Descent Imager</SelectItem>
                    <SelectItem value="navcam">Navigation Camera</SelectItem>
                    <SelectItem value="pancam">Panoramic Camera</SelectItem>
                    <SelectItem value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</SelectItem>
                </SelectContent>
            </Select>
            {images?.map((i, index) => {return <img key={index} src={i}/>})}
        </div>
    )
    
}