export const Button = ({ className, type, content, ...props }) => {
    return (
        <button type={type} className={className} {...props}>
            {content}
        </button>
    )
}

export default Button