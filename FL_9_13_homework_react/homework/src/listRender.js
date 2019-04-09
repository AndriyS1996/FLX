import React, { Component } from 'react';
import WidgetComponent from './widget';

export default class ListRanderComonent extends Component {
    constructor(props){
        super(props);
        this.state = { isPaused: false, previousTrack: null};
        this.setIsPaused = this.setIsPaused.bind(this);
        this.setPreTrack = this.setPreTrack.bind(this);
        this.getPreTrack = this.getPreTrack.bind(this);
        this.getIsPaused = this.getIsPaused.bind(this);
    }
    setIsPaused(bool) {
        this.setState(() => ({
          isPaused: bool,
        }));
        return this.state.isPaused
      }

      setPreTrack(track) {
        this.setState(() => ({
          previousTrack: track,
        }));
      }

      getPreTrack(){
          return this.state.previousTrack;
      }

      getIsPaused(){
        return this.state.isPaused;
    }

      pause(target){
        target.parentElement.parentElement.style.backgroundColor = 'rgba(233, 233, 233, 0.856)';
        target.innerHTML = '<i class="material-icons">play_arrow</i>';
        target.nextSibling.pause();
      }

      play(target){
        target.parentElement.parentElement.style.backgroundColor = 'rgba(114, 222, 226, 0.856)';
        target.innerHTML = '<i class="material-icons">pause</i>';
        target.nextSibling.play();
      }


      load(target){
        target.parentElement.parentElement.style.backgroundColor = 'rgba(233, 233, 233, 0.856)';
        target.innerHTML = '<i class="material-icons">play_arrow</i>';
        target.nextSibling.load();
      }
    playOrPause(e){
        let target = e.target.closest('.play_and_pause_btn');
        if (target !== this.getPreTrack()){
            if (this.getPreTrack() === null){
                this.play(target);
                this.setPreTrack(target);
            } else {
                this.play(target);
                this.load(this.getPreTrack());
                this.setPreTrack(target);
                this.setIsPaused(false);
            }
        } else if (!(this.getIsPaused())){
            this.pause(target);
            this.setIsPaused(true);
        } else {
            this.play(target);
            this.setIsPaused(false);
        }
    }
    render(){
        const tracksInfo = this.props.data;
        return (
            <div className='track_list'>
                <ul>
                    {tracksInfo.map( trackInfo => (
                        <li key={trackInfo.id}>
                            <div className='btn-wrapper'>
                                <button className='play_and_pause_btn' onClick={((e) => this.playOrPause(e))}><i className="material-icons">play_arrow</i></button>
                                <audio src='https://html5book.ru/examples/media/track.mp3'></audio>
                            </div>
                            <div className='description'>
                                <p><b>{trackInfo.title}</b></p> 
                                <span>{trackInfo.author}</span>
                            </div>
                            <div className='like'><i className="material-icons">favorite</i></div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
