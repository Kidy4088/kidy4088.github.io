"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = applyMode;

var _modeOptions = _interopRequireDefault(require("./modeOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function render(mode) {
  var rootElement = document.querySelector(':root');
  var options = _modeOptions["default"][mode];
  var opposite = mode === 'dark' ? 'light' : 'dark';

  for (var k in options) {
    rootElement.style.setProperty(k, options[k]);
  }

  rootElement.classList.remove(opposite);
  rootElement.classList.add(mode);
}
/**
 * Sets a color scheme for the website.
 * If browser supports "prefers-color-scheme", 'auto' mode will respect the setting for light or dark mode
 * otherwise it will set a dark theme during night time
 */


function applyMode(mode) {
  if (mode !== 'auto') {
    render(mode);
    return;
  }

  var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (isDarkMode) render('dark');
  if (isLightMode) render('light');

  if (!isDarkMode && !isLightMode) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.');
    var hour = new Date().getHours();
    if (hour < 6 || hour >= 18) render('dark');else render('light');
  }
}