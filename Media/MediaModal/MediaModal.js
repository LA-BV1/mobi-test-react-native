import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import React, { PropTypes } from 'react'

const MediaModal = props => {
  return (
    <TouchableHighlight style={styles.modal} onPress={props.handleGallery}>
      <Image style={styles.image} source={{uri: props.img.image_url}} />
    </TouchableHighlight>
  )
}
MediaModal.propTypes = {
  handleGallery: PropTypes.func,
  img: PropTypes.object
}
const styles = StyleSheet.create({
  modal: {
    'flex': 1
  },
  image: {
    'width': '100%',
    'height': '100%'
  }
})
export default MediaModal
