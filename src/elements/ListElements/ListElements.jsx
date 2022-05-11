const ListElements = ({ children, className, ...props }) => { 
    return(
        <li className={className} {...props}>
            {children}
        </li>
    )
}

export default ListElements