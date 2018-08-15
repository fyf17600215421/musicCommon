import React, { Component } from 'react';
import PropTypes from "prop-types";
import swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { Object } from 'core-js';

class Swiper extends Component {
    constructor(props){
        super(props);
    }
    static defaultProps={
            autoplay:false,
            loop:false
    }
    componentWillReceiveProps(nextProps){
      this._initSwiper(nextProps);
    }
    _initSwiper(nextProps){
        const props = this.props;
        const className ='.'+props.className;
        if(props.sliderList!=nextProps.sliderList){
            const swiperPayLoad= {
                    autoplay:props.autoplay,
                    loop:props.loop 
            }
            if(props.pagination){
                Object.assign(swiperPayLoad,{
                    pagination: {
                        el: '.pageination',
                        clickable :true
                      }
                })
            }
         setTimeout(()=>{
            new swiper(className,swiperPayLoad)
           },20)
        }
    }
    render() {
        const props = this.props;
        let name = props.className || '',
        pagination= props.pagination;
        return (
                <div className={"swiper-container "+name}>
                   {this.props.children}
                   {
                      pagination ?
                      <div className='pageination' ></div>
                      : null
                   }
                </div>
        );
    }
}
Swiper.propTypes={
    autoplay:PropTypes.bool,
    loop:PropTypes.bool,
    sliderList:PropTypes.number,
    pagination:PropTypes.bool
}

export default Swiper;
