import { Square_btn } from './button.styles';

const Button = ({ children, ...btnProps }) => {
    return (
        <Square_btn {...btnProps}> {children} </Square_btn>
    )
}

export default Button;