// Code Keypad Component Here

function Keypad (){
    function keyPadOutput(){
        console.log ('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={keyPadOutput}/>
        </div>
    )
}

export default Keypad;