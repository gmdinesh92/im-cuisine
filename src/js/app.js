import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/navigationbar'
import HomeCarousel from './components/carousel'
import ItemCards from './components/itemcards'

import content from 'json-loader!../../content_en.json';

class HomePage extends React.Component {
    render() {
        return (
            <div>
              <NavigationBar/>
              <HomeCarousel content={content.carouselContent}/>
              <ItemCards card={content.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<HomePage/>, document.getElementById('app'));
