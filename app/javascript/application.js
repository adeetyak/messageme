// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
import './src/jquery'
import '@doabit/semantic-ui-sass'
import "./controllers"

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    $('.ui.dropdown').dropdown();
});