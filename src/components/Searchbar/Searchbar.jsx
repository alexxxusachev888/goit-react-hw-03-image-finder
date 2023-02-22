import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaSearch } from 'react-icons/fa';
import {SearchbarWrapper, SearchForm,SearchFormButton, SearchFormInput } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        query: '',
    }
    
    handleSearchInput = (evt) => {
        this.setState({query: evt.target.value})
    }

    onSubmitForm = (evt) => {
        evt.preventDefault();

        if(this.state.query.trim() === '') {
            return Notify.failure('Input shouldn`t be empty')
        }
        this.props.handleInputValue(this.state.query);
        this.setState({query: ''});
    }
    
    render() {
        const { query } = this.state;
        const { onSubmitForm, handleSearchInput} = this;

        return (
            <SearchbarWrapper>
            <SearchForm onSubmit={onSubmitForm}>
                <SearchFormButton>
                <FaSearch/>
                </SearchFormButton>
                <SearchFormInput value={query} onChange={handleSearchInput}/>
            </SearchForm>
            </SearchbarWrapper>
        )
    }
}