import React, { Component } from 'react';
import PropTypes from "prop-types";
import Bscroll from "better-scroll";

class Iscroll extends Component {
    constructor(props){
        super(props);
    }
    static defaultProps={
        scrollListLength:0,
        click:true,
        probeTypeNum:1,
        scrollY:true,
        scrollX:false,
        className:''
    }
    componentWillReceiveProps(nextProps){
      const nextDom = nextProps.nextDom;
       if(nextDom){
           this._scrollToElement(nextDom);
       }
    }
    componentDidMount(){
        this._initScroll();
    }
    _initScroll(){
        const props = this.props;
           if(!this.Scroll){
            this.Scroll=new Bscroll(this.refs.wrap,{
                    probeType:props.probeTypeNum,
                    click: props.click,
                    scrollY:props.scrollY,
                    scrollX:props.scrollX
                })
           }
           this._refresh();
    }
    _refresh() {
        this.Scroll && this.Scroll.refresh()
    }
    _scrollTo() {
        this.Scroll && this.Scroll.scrollTo.apply(this.Scroll, arguments)
    }
    _scrollToElement() {
       this.Scroll && this.Scroll.scrollToElement.apply(this.Scroll, arguments)
    }
    render() {
        const props = this.props,
        className = props.className;
        return (
                <div className={className} ref='wrap'>
                        {this.props.children}
                </div>
        );
    }
}
Iscroll.propTypes={
    click:PropTypes.bool,
    scrollListLength:PropTypes.number,
    probeTypeNum:PropTypes.number,
    className:PropTypes.string
}

export default Iscroll;
