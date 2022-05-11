const LinkElements = ({ href, alt, className, children, ...props}) => { 
    return (
        href && (
            <a href={href} alt={alt} className={className} {...props}>
                {children}
            </a>
        ) 
    )
}

export default LinkElements