import './App.css';

import News from './сomponents/header/News/News.jsx';
import newsCategories from './data/newsСategories.jsx';
import newsNames from './data/newsNames';
import Rates from './сomponents/header/Rates/Rates.jsx';
import currencyRates from './data/currencyRates';
import Ad from './сomponents/header/Ad/Ad.jsx';
import Search from './сomponents/body/Search.jsx';
import searchCategories from './data/searchCategories';
import Image from './сomponents/header/Image/Image.jsx';

import Widgets from './сomponents/footer/Widgets/Widgets.jsx';

import WeatherWidget from './сomponents/footer/Widgets/WeatherWidget.jsx';
import FavoritesWidget from './сomponents/footer/Widgets/FavoritesWidget.jsx';
import favoritePages from './data/favoritePages';
import GermanMapWidget from './сomponents/footer/Widgets/GermanMapWidget.jsx';
import germanMapItems from './data/germanMapItems';
import TVProgramWidget from './сomponents/footer/Widgets/TVProgramWidget.jsx';
import TVPrograms from './data/TVPrograms';
import EtherWidget from './сomponents/footer/Widgets/EtherWidget.jsx';
import ether from './data/ether';

function App() {
    return (
        <>
            <header className="App-header">
                <div className="App-wrapper">
                    <div className="App-header__main">
                        <News newsCategories={newsCategories} newsNames={newsNames} />

                        <Rates currencyRates={currencyRates} />
                    </div>

                    <Ad
                        title="Работа над ошибками"
                        description="Смотрите на Яндексе и запоминайте"
                    >
                        <Image
                            containerClass="Ads__image-container"
                            imgClass="Ads-image"
                            src="https://loremflickr.com/320/240?rand=1"
                            alt="Plug"
                        />
                    </Ad>
                </div>
            </header>

            <div className="App-body">
                <div className="App-wrapper">

                    <Search
                        searchCategories={searchCategories}
                        searchBarLabel="Яндекс"
                        searchBtnName="Найти"
                        searchAdvice="Найдётся всё. Например,"
                        searchExample="фаза луны сегодня"
                    />

                    <Image
                        containerClass="Banner"
                        imgClass="Banner-image"
                        src="https://loremflickr.com/320/240?rand=2"
                        alt="Plug"
                    />

                </div>
            </div>

            <footer className="App-footer">
                <div className="App-wrapper">

                    <Widgets>
                        <WeatherWidget
                            title="Погода"
                            averageTemperature="+17"
                            morningTemperature="+17"
                            daytimeTemperature="+20"
                        />
                        <GermanMapWidget
                            title="Карта Германии"
                            items={germanMapItems}
                        />
                        <EtherWidget
                            title="Эфир"
                            items={ether}
                        />
                        <FavoritesWidget
                            title="Посещаемое"
                            items={favoritePages}
                        />
                        <TVProgramWidget
                            title="Телепрограмма"
                            items={TVPrograms}
                        />
                    </Widgets>

                </div>
            </footer>
        </>
    );
}

export default App;