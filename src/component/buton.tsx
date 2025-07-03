interface IButton{
    title: string;
}

function Button(props: IButton){
    return (
    <button id="btn" className="bg-blue-200 md:bg-amber-300 lg:bg-auto w-20 p-[10px] rounded-lg mx-20 shadow-2xl">
        {props.title}
    </button>
    )
}

export default Button;