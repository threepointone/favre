import React from 'react'
import base64 from 'base64-js'

export default class Favicon extends React.Component {
  componentDidMount(){
    let markup = this.el.innerHTML
    let encoded = 'data:image/svg+xml;base64,' + base64.fromByteArray(new TextEncoder().encode(markup))
    const img = document.createElement('img')
    img.src = encoded
    img.onload = () => {
      this.canvas.getContext('2d').drawImage(img, 0, 0)

      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = this.canvas.toDataURL();
      document.getElementsByTagName('head')[0].appendChild(link);
    }    
  }
  render(){
    return [
      <noscript style={{ display: 'none' }} ref={x => this.el = x || this.el} key='svg'>
        <svg xmlns="http://www.w3.org/2000/svg" {...this.props}/>
      </noscript>, 
      <canvas ref={x => this.canvas = x || this.canvas } key='canvas' width={this.props.width} height={this.props.height} style={{display: 'none'}}/>
    ]
  }
}