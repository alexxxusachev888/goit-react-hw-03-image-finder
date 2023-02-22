import PropTypes from 'prop-types';
import { Overlay, ModalFrame } from './Modal.styled';

export function Modal({imgUrl, tags, backDropClick}) {
    return (
            <Overlay onClick={(evt) => backDropClick(evt)}>
                <ModalFrame>
                    <img src={imgUrl} alt={tags} />
                </ModalFrame>
            </Overlay>
    )
}

Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired, 
    tags: PropTypes.string.isRequired, 
    backDropclick: PropTypes.func.isRequired,
}