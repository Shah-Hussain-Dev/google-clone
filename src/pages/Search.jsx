import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../context/useGoogleSearch';
import Response from '../components/response'
import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput'
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from '@mui/icons-material/Description'
import ImageIcon from '@mui/icons-material/Image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import RoomIcon from '@mui/icons-material/Room'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
const Search = () => {
  const [{ term="tesla" }, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term);
  // Mock API data 
  // const data = Response;
  console.log(data)
  return (
    <div className="search__page">
      <div className="search__header">
        <div className="search__headerBody">
          <Link to='/'>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="header logo" className="searchpage__logo" />
          </Link>
          <div className="search__body">
            <SearchInput hideButtons /> 
            <div className="search__options">
              <div className="search__optionsleft">
                <div className="search__option">
                  <SearchIcon />
                  <Link to='/search'>All</Link>
                </div>
                <div className="search__option">
                  <DescriptionIcon />
                  <Link to='/search'>News</Link>
                </div>
                <div className="search__option">
                  <ImageIcon />
                  <Link to='/search'>Images</Link>
                </div>
                <div className="search__option">
                  <LocalOfferIcon />
                  <Link to='/search'>Shopping</Link>
                </div>
                <div className="search__option">
                  <RoomIcon />
                  <Link to='/search'>Map</Link>
                </div>
                <div className="search__option">
                  <MoreVertIcon />
                  <Link to='/search'>More</Link>
                </div>
              </div>
              <div className="search__optionsRight">
                
                <div className="search__option">
                <SettingsIcon/>
                  <Link to='/search'>Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {true && (
            <div className="search__results">
              <p className="search__resultCount">
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
             for {term}
              </p>
              {data?.items.map(item=>(
                <div className="search__result">
                  <a href={item.link} className="search__displaylink">
                    {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src &&(
                      <img className="search__resultImage" src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt="search image"/>
                        
                      
                    )} 
                    {item.displayLink}
                  </a>
                  <a className="search__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
                  </a>
                  <p className="search__resultSnippet">
                    {item.snippet}
                  </p>
                </div>
              ))}
            </div>
        )}
         
    </div>
  )
}

export default Search