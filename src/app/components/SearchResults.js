import { React } from 'react';
import { connect } from 'react-redux';

const SearchResults = ({items}) => {

    console.log(items);

    return (
        <>
            {items.map((item, index) => 
                <div key={index}>
                    <p>{item.snippet.thumbnails.high.url}</p>
                    <img src={item.snippet.thumbnails.high.url} />
                </div>
            )}
        </>

    )
}

// const mapStateToProps = (state) => {

//     return {
//         state
//     };
// }
export default SearchResults;