import { createGlobalStyle } from 'styled-components';
import next_arrow from '../assets/next_arrow.svg';
import prev_arrow from '../assets/prev_arrow.svg';

const GlobalStyle = createGlobalStyle`
.rc-pagination {
  margin: 0;
  padding: 0;
	display:flex;
	align-items:center;
  display:flex;
  color:  #4A545E;
  margin-top:10px;
  font-size: 14px;
  font-style: normal;
  justify-content:center;
  font-family: SF Pro Display;
}

.pagerList{
	display:flex;
	margin: 0px 20px;
}

 .rc-pagination ul, .rc-pagination ol {
	 margin: 0;
	 padding: 0;
	 list-style: none;
}
 .rc-pagination::after {
	 display: block;
	 clear: both;
	 height: 0;
	 overflow: hidden;
	 visibility: hidden;
	 content: ' ';
}
 .rc-pagination-total-text {
	 display: inline-block;
	 height: 28px;
	 margin-right: 8px;
	 line-height: 26px;
	 vertical-align: middle;
}
 .rc-pagination-item {
	 
	 width:40px;
	 height: 40px;
	 line-height: 26px;
	 text-align: center;
	 list-style: none;
	 background-color: #fff;
	 outline: 0;
	 cursor: pointer;
	 user-select: none;
	 display:flex;
	 gap:8px;
	 justify-content:center;
	 align-items:center;

}
 .rc-pagination-item a {
	 display: block;
	 transition: none;
}

 .rc-pagination-item:hover {
	 text-decoration: none;
	 justify-content: center;
	 border-radius:8px;
	 background: #DBEAFE;
}
 .rc-pagination-item:focus, .rc-pagination-item:hover {
	 border-color: #1890ff;
	 transition: all 0.3s;
}
 .rc-pagination-item:focus a, .rc-pagination-item:hover a {
  text-decoration: none;
}
 .rc-pagination-item-active {
  text-decoration: none;
}
 .rc-pagination-item-active {
   text-decoration:none;
   border-radius: 8px;
    background: #DBEAFE;
}
 .rc-pagination-item-active:focus, .rc-pagination-item-active:hover {
	 border-color: #40a9ff;
}
 .rc-pagination-item-active:focus a, .rc-pagination-item-active:hover a {
	//  color: #40a9ff;
}
 .rc-pagination-jump-prev, .rc-pagination-jump-next {
	 outline: 0;
}
//  .rc-pagination-jump-prev button, .rc-pagination-jump-next button {
// 	 background: transparent;
// 	 border: none;
// 	 cursor: pointer;
// 	 color: #666;
// }

 .rc-pagination-jump-prev div, .rc-pagination-jump-next div {
	 background: transparent;
	 border: none;
	 cursor: pointer;
	 color: #666;
	 width:40px;
	 height: 40px;
	 display:flex;
	 justify-content:center;
	 align-items:center;
}

 .rc-pagination-jump-prev div:after, .rc-pagination-jump-next div:after {
   display: block;
	 content: '•••';
   color: #ADADAD;
 }

 .rc-pagination-prev, .rc-pagination-jump-prev, .rc-pagination-jump-next {
	 margin-right: 25px;
}

 .rc-pagination-prev, .rc-pagination-next, .rc-pagination-jump-prev, .rc-pagination-jump-next {
	 color: rgba(0,0,0,0.85);
	 font-family: Arial;
	 line-height: 28px;
	 text-align: center;
	 vertical-align: middle;
	 list-style: none;
	 border-radius: 2px;
	 cursor: pointer;
	 transition: all 0.3s;
}
 .rc-pagination-prev, .rc-pagination-next {
	 outline: 0;
}
//  .rc-pagination-prev button, .rc-pagination-next button {
// 	 color: rgba(0,0,0,0.85);
// 	 cursor: pointer;
// 	 user-select: none;
// }

 .rc-pagination-prev div, .rc-pagination-next div {
	 color: rgba(0,0,0,0.85);
	 cursor: pointer;
	 user-select: none;
	 display:flex;
	 justify-content: center;
   align-items: center;
	 border-radius:8px;
	 box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}

//  .rc-pagination-prev:hover button, .rc-pagination-next:hover button {
// 	 border-color: #40a9ff;
// }

//  .rc-pagination-prev:hover div, .rc-pagination-next:hover div {
// 	 border-color: #40a9ff;
// }


 .rc-pagination-prev .rc-pagination-item-link, .rc-pagination-next .rc-pagination-item-link {
	 display: block;
	 width: 100%;
	 height: 100%;
	 font-size: 14px;
	 text-align: center;
	 background-color: #fff;
   margin-top:2px;
	 outline: none;
	 transition: all 0.3s;
}
//  .rc-pagination-prev:focus .rc-pagination-item-link, .rc-pagination-prev:hover .rc-pagination-item-link, .rc-pagination-next:focus .rc-pagination-item-link, .rc-pagination-next:hover .rc-pagination-item-link {
// 	 border-color: #1890ff;
// }

.rc-pagination-prev div, .rc-pagination-next div{
	position:relative;
	padding:5px 12px;
	height:40px;
}

.rc-pagination-prev div:before{
	position:absolute;
	content:url(${prev_arrow});
	left:20px;
	top:7.8px;
}

 .rc-pagination-prev div:after {
	content: 'Назад';
	margin-left:18px;
}

.rc-pagination-next div:before{
	position:absolute;
	content:url(${next_arrow});
	right:20px;
	top:7.8px;

}

 .rc-pagination-next div:after {
	 content: 'Вперед';
	 margin-right:14px;
}

.rc-pagination-disabled {
  opacity: 0.5;
	color:
}





 .rc-pagination-disabled, .rc-pagination-disabled:hover, .rc-pagination-disabled:focus {
	 cursor: not-allowed;
}
 .rc-pagination-disabled .rc-pagination-item-link, .rc-pagination-disabled:hover .rc-pagination-item-link, .rc-pagination-disabled:focus .rc-pagination-item-link {
	 color: rgba(0,0,0,0.25);
	 border-color: #d9d9d9;
	 cursor: not-allowed;
}
 .rc-pagination-slash {
	 margin: 0 10px 0 5px;
}
 .rc-pagination-options {
	 display: inline-block;
	 margin-left: 16px;
	 vertical-align: middle;
}
 @media all and (-ms-high-contrast: none) {
	 .rc-pagination-options *::-ms-backdrop, .rc-pagination-options {
		 vertical-align: top;
	}
}
 .rc-pagination-options-size-changer.rc-select {
	 display: inline-block;
	 width: auto;
	 margin-right: 8px;
}
 .rc-pagination-options-quick-jumper {
	 display: inline-block;
	 height: 28px;
	 line-height: 28px;
	 vertical-align: top;
}
 .rc-pagination-options-quick-jumper input {
	 width: 50px;
	 margin: 0 8px;
}
 .rc-pagination-simple .rc-pagination-prev, .rc-pagination-simple .rc-pagination-next {
	 height: 24px;
	 line-height: 24px;
	 vertical-align: top;
}
 .rc-pagination-simple .rc-pagination-prev .rc-pagination-item-link, .rc-pagination-simple .rc-pagination-next .rc-pagination-item-link {
	 height: 24px;
	 background-color: transparent;
	 border: 0;
}
 .rc-pagination-simple .rc-pagination-prev .rc-pagination-item-link::after, .rc-pagination-simple .rc-pagination-next .rc-pagination-item-link::after {
	 height: 24px;
	 line-height: 24px;
}
 .rc-pagination-simple .rc-pagination-simple-pager {
	 display: inline-block;
	 height: 24px;
	 margin-right: 8px;
}
 .rc-pagination-simple .rc-pagination-simple-pager input {
	 box-sizing: border-box;
	 height: 100%;
	 margin-right: 8px;
	 padding: 0 6px;
	 text-align: center;
	 background-color: #fff;
	 border: 1px solid #d9d9d9;
	 border-radius: 2px;
	 outline: none;
	 transition: border-color 0.3s;
}
 .rc-pagination-simple .rc-pagination-simple-pager input:hover {
	 border-color: #1890ff;
}
 .rc-pagination.rc-pagination-disabled {
	 cursor: not-allowed;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item {
	 background: hsv(0,0,96%);
	 border-color: #d9d9d9;
	 cursor: not-allowed;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item a {
	 color: rgba(0,0,0,0.25);
	 background: transparent;
	 border: none;
	 cursor: not-allowed;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item-active {
	 border-color: transparent;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item-active a {
	 color: #fff;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item-link {
	 color: rgba(0,0,0,0.25);
	 background: hsv(0,0,96%);
	 border-color: #d9d9d9;
	 cursor: not-allowed;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item-link-icon {
	 opacity: 0;
}
 .rc-pagination.rc-pagination-disabled .rc-pagination-item-ellipsis {
	 opacity: 1;
}
 @media only screen and (max-width: 992px) {
	 .rc-pagination-item-after-jump-prev, .rc-pagination-item-before-jump-next {
		 display: none;
	}
}
 @media only screen and (max-width: 576px) {
	 .rc-pagination-options {
		 display: none;
	}
}
 
`;

export default GlobalStyle;
