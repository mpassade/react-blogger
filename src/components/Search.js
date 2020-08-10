import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
    return (
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginBottom: '40px'
            }}
        >
            <h2>Search Blog by Subject:</h2>
            <form className='ui form'>
                <div className='field'>
                    <input type='text' placeholder='Search by subject...' onChange={props.handleChange} value={props.searchTerm}/>
                </div>
            </form>
        </div>
    )
}

Search.propTypes = {
    searchTerm: PropTypes.string,
    handleChange: PropTypes.func
}

export default Search


