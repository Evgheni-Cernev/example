export const ImageElements = ({src, alt, className, Name, ...props }) => {
    return ( src ? (
    <img src={src} alt={alt} className={className} {...props} />
  ) : (
    <Name className={className} {...props} />
  ))
 }

export default ImageElements