import React, { Component } from 'react';
import {ERR_ok} from "../../api/config.js";
import {getMusicHallList} from "../../api/mypagelist.js";
import Scroll from "../../base/scroll.jsx";
const className = 'mod_topic'
class Main extends Component {
    constructor(props){
        super(props);
         this.state={
            myMusicList:[]
         }
         document.title="音乐馆";
}
getMusicHallList(){
    let  myMusicList = this.props.myMusicList
    if(myMusicList){
       return this.setState({
        myMusicList
        })
    }
    getMusicHallList().then(res=>{
        if(res.code===ERR_ok){
            this.setState({
                myMusicList:res.data.topList
            })
        }
    })
    .catch((e)=>{
        console.log(e);
    })
}
componentDidMount(){
    this.getMusicHallList();  
}
render() {  
        const state = this.state,
        myMusicList = state.myMusicList;
        const scrollPayload={className:'song_list_scoll',scrollListLength:myMusicList.length,scrollY:true,nextDom:state.nextDom};
        return <ul className={className}>
                  {
                      !myMusicList.length ? 
                      <div>loading .....</div> :
                        <Scroll {...scrollPayload} >
                           <div className='song_list' ref='song_list'> 
                              {
                                myMusicList.map(item=>{
                                    return <li key={item.id}>
                                               <div className="topic_main">
                                                    <a href="javascript:;" className="topic_media">
                                                        <img src={item.picUrl} alt=""/>
                                                        <span className="listen_count">{item.listenCount/10000}</span>
                                                    </a>
                                                    <div className="topic_info">
                                                       <div className="topic_cont">
                                                         <h3 className="topic_tit">{item.topTitle}</h3>
                                                          {
                                                             item.songList.map((element,index)=>{
                                                                return <p key={index}>{index+1}
                                                                            <span className="text_name">{element.songname}</span>
                                                                             -{element.singername}
                                                                        </p>
                                                              })
                                                          }
                                                      </div>
                                                   </div>
                                               </div>
                                           </li>
                                  })   
                               }    
                            </div>
                        </Scroll>
                  }
        </ul>
   }
}

export default Main;
