import React, {Component} from 'react';
import {
  View,
  Animated,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

class Camera extends Component {
  state = {
    loading: false,
    uriPicture: null,
    showPicture: false,
    yFullImage: new Animated.Value(-700),
  };

  handlePicture = async () => {
    this.setState({loading: true});
    if (this.camera) {
      const options = {quality: 0.5, base64: true, fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({uriPicture: data.uri, loading: false});
    }
  };

  renderFullPicture = () => {
    Animated.timing(this.state.yFullImage, {
      toValue: 0,
      duration: 400,
    }).start();
    return (
      <Animated.View
        style={[styles.showFullImage, {bottom: this.state.yFullImage}]}>
        <TouchableOpacity onPress={() => this.closeFullPicture()}>
          <Icon name="close" color="#FFF" size={28} />
        </TouchableOpacity>
        <Image source={{uri: this.state.uriPicture}} style={styles.fullImage} />
      </Animated.View>
    );
  };

  closeFullPicture = () => {
    Animated.timing(this.state.yFullImage, {
      toValue: -700,
      duration: 400,
    }).start(() => this.setState({showPicture: false}));
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a camera',
            message: 'Precisamos da sua permissão para usar sua camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}>
          {this.state.showPicture && this.renderFullPicture()}

          <View style={styles.containerIconFrame}>
            <Icon name="frame" style={styles.iconFrame} />
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={this.handlePicture}
              style={styles.capture}>
              {this.state.loading ? (
                <ActivityIndicator />
              ) : (
                <Icon name="camera" style={styles.iconCamera} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerImage}
              onPress={() => this.setState({showPicture: true})}>
              {this.state.uriPicture && (
                <Image
                  source={{uri: this.state.uriPicture}}
                  style={styles.image}
                />
              )}
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default Camera;
