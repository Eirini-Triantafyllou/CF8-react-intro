type ButtonProps ={
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}

const CounterButton = ({onClick, disabled = false, label, addClasses = "bg-cf-dark-gray"}:ButtonProps) => {

    return (
        <>
            <button
                className={'text-white py-2 px-4 ' + addClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}
export default CounterButton;