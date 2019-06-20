import $ from 'jquery';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import Modal from './modules/Modal.js';

var moblieMenu = new MobileMenu();

var revealFeaturesOnScroll = new RevealOnScroll($('.feature-item'), '85%');
var revealTestimonialsOnScroll = new RevealOnScroll($('.testimonial'), '60%');

var stickyHeader = new StickyHeader();

var modal = new Modal();