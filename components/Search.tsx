import { useState, useMemo } from 'react';

const Search = () => {
    const [text, setText] = useState<string>("");
    const [list, setList] = useState<string[]>([])

    const getList = () =>{
        console.log('카운트..');
        return list
    }

    // useMemo(() => {실행할 함수}, 변화감지변수);
    const lists = useMemo(() => getList(), [list])

    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder="아무 내용이나 입력하세요."
                onChange={(e) => { setText(e.target.value) }}
            />
            {lists}
        </div>
        
    )
}

export default Search;