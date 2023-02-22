import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery ({images}) {
    return (
        <ImageGalleryList>
            {images.map(({id, tags, webformatURL, largeImageURL}) => {
                return  <ImageGalleryItem id={id} tags={tags} webformatURL={webformatURL} largeImageURL={largeImageURL}/>
            })}
        </ImageGalleryList>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired
}