import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './SearchInput.scss'
import { Button } from '@mui/material';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';
const SearchInput = ({hideButtons=false}) => {
    const [input, setInput] = useState('');
    const [{},dispatch] = useStateValue();
    const navigate = useNavigate();

    const search = (e)=>{
        e.preventDefault();
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        });
        navigate('/search')
    }
    return (
        <form className='search'>
           <div className="search__input">
           <SearchIcon />
            <input type="text"  placeholder="Search..." value={input} onChange={e=>setInput(e.target.value)} />
            <MicIcon />
           </div>

          {!hideButtons ? ( <div className="search__buttons">
            <Button variant="outlined" disabled={!input} onClick={search} type="submit">Google Search</Button>
            <Button  variant="outlined"> I'm  Feeling Lucky</Button>
           </div>):( <div className="search__buttons">
            <Button className="search__buttonsHidden" variant="outlined" onClick={search} type="submit">Google Search</Button>
            <Button className="search__buttonsHidden" variant="outlined"> I'm hh Feeling Lucky</Button>
           </div>)}
        </form>
    )
}

export default SearchInput