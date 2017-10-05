import { Text, StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native'
import { getDataService } from '../services/data.service.js'
import MediaModal from './MediaModal/MediaModal.js'
import React from 'react'

class Media extends React.Component {
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
  handleGallery = (isOpened, img) => {
    this.setState({isOpened, img})
  }
  render () {
    return (
      <View>
        {this.state.isOpened && <MediaModal handleGallery={() => this.handleGallery(false)} img={this.state.img} />}
        <ScrollView>
          {this.state.photos.map(i => (
            <TouchableHighlight key={i.id} onPress={() => { this.handleGallery(true, i) }}>
              <View style={styles.container}>
                <Image style={styles.image} source={{uri: i.image_url}} />
                <Text>{i.name + ' ' + i.user.username}</Text>
              </View>
            </TouchableHighlight>
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
