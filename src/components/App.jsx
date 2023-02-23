import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from "../components/Button/Button";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { getImagesFromPixabay } from './GetImagesApi';

export class App extends Component {
  state = {
    query: null,
    page: 1, 
    error: null,
    imgArr: [],
    totalHits: null,
    status: 'idle',
  }

  componentDidUpdate(prevProp, prevState) {
    const {query, page} = this.state;

    if(prevState.query !== query || prevState.page !== page) {
      this.setState({status: "pending"})

      getImagesFromPixabay(query, page)
      .then(images => this.setState(prevState => ({imgArr: [...prevState.imgArr, ...images.hits], totalHits: images.totalHits, status: "resolved"})))
      .catch(err => this.setState({error: err, status: "rejected"}))
    }
  }

  handleInputValue = (inputValue) => {
      this.setState({query: inputValue, page: 1, imgArr: []})
    }

  onloadMoreClick = () => {
      this.setState(prevState => this.setState({page: prevState.page + 1}) )
    }
  
  render() {
    const { state: {page, imgArr, status, error, totalHits}, handleInputValue, onloadMoreClick} = this;

    const isPending = status === "pending";
    const isResolved = status === "resolved";
    const isError = status === "rejected";
    const isBtnShown =  Boolean(imgArr.length) && !(totalHits <= page * 12);

      return (
        <Container>
          <Searchbar handleInputValue={handleInputValue}/>
          {isPending && <Loader/>}
          {isResolved && <ImageGallery images={imgArr}/>}        
          {isBtnShown && <Button loadMore={onloadMoreClick}/>}
          {isError && Notify.failure(error.message)}
        </Container>
      )
    }
};
