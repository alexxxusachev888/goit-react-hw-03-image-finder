import PropTypes from 'prop-types';
import React, { Component } from "react";
import {ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component{
    state = {
        isOpen: false,
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyEsc)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyEsc)
    }

    handleImageZoom = () => {
        this.setState({isOpen: true})
    }

    handleKeyEsc = evt => {
        if(evt.code === 'Escape') {
            this.setState({isOpen: false})}
    }
    
    handleBackdrop = evt => {
        if(evt.currentTarget === evt.target) {
            this.setState({isOpen: false})}
    }

    render() {
        const {id, tags, webformatURL, largeImageURL} = this.props;

        return (
            <ImageGalleryItemLi key={id}>
                <ImageGalleryItemImage src={webformatURL} alt={tags} onClick={this.handleImageZoom}/>
                {this.state.isOpen && <Modal tags={tags} imgUrl={largeImageURL} backDropClick={this.handleBackdrop}/>}
            </ImageGalleryItemLi>
        )
    }
}

ImageGalleryItem.propTypes = {
    id:PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired,
    webformatURL:PropTypes.string.isRequired,
    largeImageURL:PropTypes.string.isRequired
}
