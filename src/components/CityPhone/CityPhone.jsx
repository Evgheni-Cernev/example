import { useState } from "react"
import { FaArrowCircleDown } from "react-icons/fa"
import ImageElements from "../../elements/ImageElements/ImageElements"
import Dropdown from "../Dropdown/Dropdown"
import cityPhone from "../../mock/mockCityPhone"


export const CityPhone = () => {
  const initialValue = `${cityPhone[0].city} ${cityPhone[0].phone}`
  const [selectedValue, setSelectedValue] = useState(initialValue)

  return (
    <div className="phone relative text-gray flex items-center">
      <Dropdown options={cityPhone}
        selectedValue={selectedValue}
        classNameContainer='z-1000 bg-transparent absolute w-72 p-5'
        setSelectedValue={setSelectedValue}
        classNameli='mb-3 hover:text-yellow'
        classNameUl='bg-bgColor p-3 border-solid border-2 border-gray rounded-lg'
      />
      <ImageElements Name={FaArrowCircleDown} className='ml-3'/>
    </div>
  )
}

export default CityPhone
