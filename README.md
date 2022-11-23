# CBC-Scraper.js

<div align="center">
<a href="https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js"> 
<img height=350 alt="Repo Banner for TheMovieDB-API-Wrapper.js" src="https://capsule-render.vercel.app/api?type=waving&color=539bf5&height=300&section=header&text=CBC-Scraper.js&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Fetch%20live%20stream%20urls%20from%20CBC.ca%20&descAlignY=60&descAlign=50"></img></a>

</div>  
    
<p align="center">
  <b>A JavaScript library for fetching free live IPTV stream URLs from CBC News</b>

  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/TheMovieDB-API-Wrapper.js.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/TheMovieDB-API-Wrapper.js.svg?style=social&label=Fork">
  </a>
   </p>  

A pure JavaScript library for easily fetching free live stream urls (m3u format) for live TV channels from [CBC.ca](https://cbc.ca)

> <b>Note</b>: CBC content is geo-restricted to Canada :canada:


## Example and usage


<details>

<summary> How to fetch <b>all</b> channels</summary>

<br>


```js
// CBC Scraper Example - get all channels. 
import {CBC_News_Scraper} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/src/themoviedb-api-wrapper.js' 

let CBC_News = new CBC_News_Scraper();


CBC_News.getChannel("Toronto").then(function(search_results) {
  console.log(search_results)
 });  //////////////////
```

This will return an array of all channel details & stream URLs. 

<br><br><br><br>
</details>


<br>

<details>

<summary> How to fetch <b>single</b> channel</summary>

<br>

```js
/// CBC Scraper Example - get single channel example.

let CBC_News = new CBC_News_Scraper();

CBC_News.CBC_getChannel("Toronto").then(function(search_results) {
  console.log(search_results)
 });  //////////////////
 

```


This will return a single JSON object with channel details + the stream URL. 

</details>


<br> 

## CDN

### URL

    <script type="module" src="https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/dist/themoviedb-api-wrapper.min.js" defer></script> 

### Import 

    import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/dist/themoviedb-api-wrapper.min.js'
    







## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/TheMovieDB-API-Wrapper.js)

Want to improve this project? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!

See also the list of
[contributors](https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/TheMovieDB-API-Wrapper.js)

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/MarketingPipeline/TheMovieDB-API-Wrapper.js/blob/main/LICENSE) file for
details.


