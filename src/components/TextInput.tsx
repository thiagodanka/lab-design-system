import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
export interface TextInputRoot {
    children: ReactNode;
}
function TextInputRoot(props: TextInputRoot) {
    return (
        <div className='flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface TexteInputIconProps {
    children: ReactNode;
}
function TextInputIcon(props: TexteInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400 " >
            {props.children}
        </Slot>
    )
}

function TextInputInput(props: TextInputInputProps) {

    return (
        <input className='bg-transparent  outline-none flex-1 text-gray-100 text-xs w-full placeholder:text-gray-400'

            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}