import '../css/button.css'

export default function Button({children}) {
    function handleClick() {
        console.log('button clicked')
    }

    return <button className='button' onClick={handleClick}>
        {children}  
    </button>
}