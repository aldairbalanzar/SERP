import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import animations from './data/animation.json';
import examples from './data/example.json';
import travels from './data/travel.json';
import Nav from './components/Nav'
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Filters from './components/Filters';

function App() {
  const history = useHistory();
  const [jsonData, setJsonData] = useState([...animations.data, ...examples.data, ...travels.data]);
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [sort, setSort] = useState(0)
  const [filteredData, setFilteredData] = useState([]);

  // hanldes how videos are sorted, defaults to alphabetical
  const handleSort = (data) => {
    if(sort === 1) {
      let sorted = [...data.sort((a, b) => {
        if(a.clip.stats.plays < b.clip.stats.plays) {
          return 1
        }
        else if(a.clip.stats.plays > b.clip.stats.plays) {
          return -1
        } else {
          return 0
        }
      })];
      return sorted;

    } else if(sort === 2) {
      let sorted = [...data.sort((a, b) => {
        return new Date(b.clip.created_time) - new Date(a.clip.created_time)
      })];
      return sorted;

    }else if(sort === 3) {
      let sorted = [...data.sort((a, b) => {
        return new Date(a.clip.created_time) - new Date(b.clip.created_time)
      })];
      return sorted;

    } else {
      let sorted = [...data.sort((a, b) => {
        if(a.clip.name < b.clip.name) {
          return -1
        }
        else if(a.clip.name > b.clip.name) {
          return 1
        } else {
          return 0
        }
      })];
      return sorted;

    }
  };

  // handles results of videos found according to search
  const handleSearchedData = (data, search) => {
    if(search.length < 1) {
      console.log('nothing to search')
      setFilteredData([]);
      return
    }
    // setFilteredData([...data.filter(video =>
    //   video.clip.name.toLowerCase().includes(search.toLowerCase())
    // )]);
    let found = [...data.filter(video => (
      video.clip.name.toLowerCase().includes(search.toLowerCase())
    ))];
    setFilteredData([...found]);
  };


  const handleFilteredData = () => {
    let filtered = handleSort(filteredData)
    setFilteredData([...filtered]);
  };
  
  useEffect(() => {
    if(currentSearch.length > 0) {
      console.log('searching...', currentSearch)
      console.log(jsonData)
      handleSearchedData(jsonData, currentSearch);
    } else {
      setJsonData(handleSort(jsonData));
    }
  }, [sort, setFilteredData]);

  useEffect(() => {
    handleFilteredData();
  }, [sort]);

  console.log('filtered: ', filteredData);
  
  return (
    <Router hisotry={history}>
      <div className="App">
        <Nav 
        handleSearchedData={handleSearchedData}
        jsonData={jsonData}
        />
        <SearchBar 
        jsonData={jsonData} 
        search={search}
        setSearch={setSearch}
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
        filteredData={filteredData}
        handleSearchedData={handleSearchedData}
        />

        <Filters
        sort={sort}
        setSort={setSort}
        />

        <CardList 
        jsonData={jsonData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        handleSearchedData={handleSearchedData}
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
        sort={sort}
        handleSort={handleSort}
        />
      </div>

      <Switch>
        <Route path='/:q' />
      </Switch>
    </Router>
  );
}

export default App;
