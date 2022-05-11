import ImageElements from "../elements/ImageElements/ImageElements";

export const renderImages = (data) => {
    return (
        <div className="flex items-center justify-center text-center mt-1">
      { data.map((el) => (
      <div key={el.id} className="w-24">
        <ImageElements
          src={el.src}
          className="mr-6 cursor-pointer"
        />
      </div>
      ))};
         </div>
    )
  
};
  
export default renderImages