import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const BlogItem = (props) => {
    const {title, author, subject, article, objectId} = props.blog
    return (
        <div
            className='ui card'
            style={{width: '75%', padding: '20px'}}
        >
            <div className='content'>
                <div className='header'>{title}</div>
                <br/>
                <div className='meta'>{author}</div>
                <br/>
                <div className='meta'>{subject}</div>
                <hr/>
                <div className='description'>{article}</div>                
            </div>
            <div>
                <Button 
                    className='ui primary button'
                    onClick={() => {
                        props.onDelete(objectId)
                    }}
                >
                    Delete
                </Button>
                <Button 
                    className='ui primary button'
                    onClick={() => {
                        props.onUpdate(objectId)
                    }}
                >
                    Update
                </Button>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    blog: PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        article: PropTypes.string.isRequired,
        objectId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        subject: PropTypes.string.isRequired
    })
}

export default BlogItem