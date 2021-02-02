import SearchResults from './SearchResults';
import {React, useState, useRef} from 'react';
import { ConnectedSearchBar } from './SearchBar/SearchBar';
import youtube from '../../apis/youtube';
import { connect } from 'react-redux';


const Layout = () => {

    let [searchQuery, setSearchQuery] = useState("");
    let [items, setItems] = useState([]);

    async function fetchResult(e) {
        e.preventDefault();
        if (searchQuery !== "") {
            let response = await youtube.get('/search', {
                params: {
                    q: searchQuery
                }
            });
            console.log(searchQuery);
            setItems(response.data.items);
        }
    }

    return (
        <div className="">
            {/* <ConnectedSearchBar setSearchQuery={setSearchQuery} fetchResult={fetchResult}/> */}
            <ConnectedSearchBar />
            <div>
                {items.length === 0 ? null :
                <SearchResults items={items}/>
                }
            </div>
            
        </div>
    );
}
export const ConnectedLayout =  connect()(Layout);
