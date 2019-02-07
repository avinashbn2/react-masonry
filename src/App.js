import '../App.css';
import MasonryLayout from './MasonryLayout'
import React, { Component } from 'react';
import Tile from './Tile';
let colors = ['#814374','#51A39D','#8C489F','#B7695C','#C3C3E5','#CDBB79','#F2F2F2','#06425C']

export default class App extends React.Component{
  renderTiles = () => {
    {
      let tiles = []
      for(let i=0;i<30;i++) {
        let color = Math.floor(Math.random()*colors.length);
        let height = 100 + Math.ceil(Math.random()*2)*100
        tiles.push(<Tile color={colors[color]} height={height}/>)
      }
      return tiles
    } 
  }
  render(){
    return (
      <div className="container">
        <div className="masonry-container">
          <MasonryLayout breakPoints={this.props.breakPoints}>
            {
              this.renderTiles()
            }
          </MasonryLayout>
        </div>
      </div>
    )
  }
}

