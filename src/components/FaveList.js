import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

// Components
import PhotoCardMini from './PhotoCardMini';

const FaveList = ({ photos, addToFave }) => {
  if (photos)
    return (
      <section className="FaveList">
        <div className="container">
          <div className="columns is-multiline is-centered">
            {photos.map(photo => {
              return (
                <PhotoCardMini
                  title={photo.title}
                  link={photo.url_m}
                  key={`${v4()}${photo.id}`}
                  onClick={() => addToFave(photo)}
                />
              );
            })}
          </div>
        </div>
      </section>
    );

  return <p>No favourites here</p>;
};

FaveList.propTypes = {
  photos: PropTypes.array.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default FaveList;
