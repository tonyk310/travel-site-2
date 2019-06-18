import $ from 'jquery';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';

var moblieMenu = new MobileMenu();
var revealFeaturesOnScroll = new RevealOnScroll($('.feature-item'), '85%');
var revealTestimonialsOnScroll = new RevealOnScroll($('.testimonial'), '60%');