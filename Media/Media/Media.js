// import MediaModal from './media-modal/media-modal.jsx'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { getDataService } from '../services/data.service.js'
import React from 'react'

class Media extends  React.Component {
  constructor () {
    super()
    this.state = {
      isOpened: false,
      photos: [],
      img: {}
    }
  }
  componentDidMount () {
    getDataService().then(data => {
      this.setState({photos: data.photos})
    })
  }
  render() {
    // <img src={i.image_url} onClick={() => { this.handleGallery(i) }} />
    return (
      <View>
        <ScrollView>
          {this.state.photos.map(i => (
            <View key={i.id} style={styles.container}>
              <Image style={styles.image} source={{uri: i.image_url}} />
              <Text>{i.name + ' ' + i.user.username}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    'display': 'flex',
    'flexDirection': 'row'
  },
  image: {
    width: 66,
    height: 58
  }
})
export default Media
