# CBC-Scraper.js
A JavaScript library for scraping free live IPTV stream URLs from CBC.ca


A pure JavaScript library for easily fetching live stream urls (m3u format) for TV channels from [CBC.ca](https://cbc.ca)

> <b>Note</b>: CBC content is geo-restricted to Canada, to use this in another country see [Geo-Restrictions](#geo-restrictions)


## Example and usage


<details>

<summary> How to fetch <b>all</b> channels</summary>

<br>

This will return an array of all channel details & stream URLs. 

### Usage

```js
// CBC Scraper Example - get all channels. 
CBC_getAllChannels()
```

<br><br><br><br>
</details>


<br>

<details>

<summary> How to fetch <b>single</b> channel</summary>

<br>

This will return a single JSON object with channel details + the stream URL. 



### Usage

> Paramaters (ChannelName [REQUIRED])

```js
/// CBC Scraper Example - get single channel example.
CBC_getChannel("Toronto")
```

</details>


--- 


#### Geo Restrictions

CBC.ca content <b>might</b> be limited in your area due to geo-restrictions. To bypass this you might be able to use a CORS proxy. 

<br>

<details>

<summary> How to set <b>CORS</b> proxy</summary>

<br>

This will send your requsts using your provided CORS proxy



### Usage

> Paramaters (Domain / IP / Proxy [REQUIRED])

```js
/// CBC Scraper Example - set CORS proxy example
CBC_setCORS_proxy("http://yourcorsproxyurl.com/")
```

</details>

