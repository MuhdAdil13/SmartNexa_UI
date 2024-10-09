import React from 'react'

const Product = () => {
    const containerStyle={
        backgroundColor :'rgb(246,246,246)',
        width:'25rem',
        height:'30rem'
    };

    const shortDescription={
        color:'black',
        fontSize:'1.2rem'
    }

    const userRatings = {
        color:'black',
        fontSize:'1rem'
    }

    const price={
        color:'black',
        fontSize:'1rem'
    }

  return (
    <>
        <div style={containerStyle}>
            <img src="" alt="" />
            <div style={shortDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam saepe facere aliquam unde excepturi quasi! Repudiandae, molestias nulla, sapiente explicabo possimus nesciunt iusto consectetur dicta earum veritatis quibusdam odit voluptate!</div>
            <div style={userRatings}>4.5</div>
            <div style={price}>5678.99</div>
        </div>
    </>
  )
}

export default Product