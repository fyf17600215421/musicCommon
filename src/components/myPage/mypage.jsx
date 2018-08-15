import React, { Component } from 'react';
import {getMyPageList} from "../../api/mypagelist.js";
import {ERR_ok} from "../../api/config.js";
import Swiper from "../../base/swiper.jsx";
import {connect} from "react-redux";
const className = 'my-page';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            bannerList:[]
        }
        document.title="我的";
    }
    getMyPageList(){
        let  myPageList = this.props.myPageList
        if(myPageList){
           return this.setState({
            bannerList:myPageList
            })
        }
        getMyPageList().then(res=>{
            if(res.code===ERR_ok){
                this.setState({
                    bannerList:res.data
                },()=>{
                    this.props.addMypageList(this.state.bannerList)
                })
            }
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    componentDidMount(){
        this.getMyPageList();
    }
    render() {
        const bannerSlide = this.state.bannerList.slider || [],
        swiperPayload = {sliderList:bannerSlide.length,pagination:true,autoplay:true};
        const modTwocolList = this.state.bannerList.radioList || [];
        return (
            <div className={className}>
                <Swiper className='my-page-banner' {...swiperPayload}>
                        <div className='swiper-wrapper'>
                            {
                               bannerSlide.length ? this.state.bannerList.slider.map((item,index)=>{
                                    return <div className='swiper-slide' key={index}>
                                              <a href={item.linkUrl}>
                                                <img src={item.picUrl} alt="pictrue丢失" title='banner'/>
                                              </a>
                                    </div> 
                                })
                                : null
                            }
                        </div>    
                 </Swiper>  
                 <div className='mod-twocol-list'>
                       <h2>电台</h2>
                        <ul className='list-container' style={{height:'4rem'}}>
                          {
                              modTwocolList.map((element,index)=>{
                                  return <li key={index}>
                                            <div>
                                                <img src={element.picUrl} alt="图片丢失" title='最新热歌'/>
                                                <p>{element.Ftitle}</p>
                                            </div>
                                        </li>
                              })
                          }
                        </ul>       
                 </div>
                 <div className='user-message'>
                 <h2>热门歌单</h2>
                    <p className='user-status'>
                        <img src="http://thirdqq.qlogo.cn/g?b=sdk&k=8IBCBth8TvXKz1r6OhmeIg&s=140&t=1527688912" alt="" className='portrait' />
                        <span className='name'>立即登录</span>
                    </p>
                </div>
            </div>
        );
    }
}
const  mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addMypageList: (payload) => {
            dispatch({type:'ADD_MYPAGE_LIST',payload})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
