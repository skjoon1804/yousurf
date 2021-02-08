import { React } from 'react';
import { connect } from 'react-redux';

const ResultFavoriteButton = ({}) => {

    return (
        <div className="m-4">
            <img src='heart-dark.png' />
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return;
}

export const ConnectedFavoriteButton = connect(mapStateToProps)(ResultFavoriteButton);