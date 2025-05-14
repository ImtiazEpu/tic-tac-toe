import {useState} from 'react';

function Square() {

    const [value, setValue] = useState(null);
    function handleClick() {
       setValue('X')
    }

    return (
        <button className="bg-white border border-gray-400 rounded-xl h-12 w-12 m-1 leading-9 text-lg" onClick={handleClick}>{value}
        </button>
    );
}

export default function Board() {
    return (
        <>
            <div className="flex justify-center">
                <Square />
                <Square />
                <Square />
            </div>
            <div className={"flex justify-center"}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={"flex justify-center"}>
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}