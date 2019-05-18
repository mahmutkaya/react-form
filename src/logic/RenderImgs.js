import React from 'react'
import { Card, CardImg } from 'reactstrap';

const renderCountedImages = (imgs, imgCount) => {
  let arr = []

  for (let i = 0; i < imgCount; i++) {
    arr.push(imgs[i])
  }
  return (
    arr.map((img, index) => (
      <Card key={index} >
        <CardImg top src={img} alt={index} />
      </Card>
    ))
  )
}

const renderAllImages = (imgs) => {
  return (
    imgs.map((img, index) => (
      <Card key={index}>
        <CardImg top src={img} alt={index} />
      </Card>
    ))
  )
}

export { renderCountedImages, renderAllImages }