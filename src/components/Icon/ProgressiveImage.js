// ProgressiveImage.js

import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import style_vars from '../../screens/_styles/vars';

// ...
class ProgressiveImage extends React.Component {
    thumbnailAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);
    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
        toValue: 1,
        }).start();
    }
    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
        toValue: 1,
        }).start();
    }

    render() {
      const {
        thumbnailSource,
        source,
        style,
        containerStyle,
        altText,
        ...props
      } = this.props;
      return (
        <View style={[styles.container, containerStyle]}>
          <Text style={styles.altText}>{this.props.altText}</Text>
          <Animated.Image
            {...props}
            source={thumbnailSource}
            style={[style, { opacity: this.thumbnailAnimated }]}
            onLoad={this.handleThumbnailLoad}
            blurRadius={1}
          />
          <Animated.Image
            {...props}
            source={source}
            style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
            onLoad={this.onImageLoad}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    altText: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
      backgroundColor: style_vars.lightgrey,
    },
  });
  export default ProgressiveImage;