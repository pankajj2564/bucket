import {useFormStatus} from 'react-dom'
import {ButtonHTMLAttributes, FC} from "react";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const SubmitButton: FC<SubmitButtonProps> = (
    {
        children,
        ...rest
    }
) => {
    const {pending} = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending} {...rest}>
            {pending ? 'Processing...' : children}
        </button>
    )
}

export default SubmitButton