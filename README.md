# CBC-Scraper.js
A JavaScript library for scraping free live IPTV stream URLs from CBC.ca


A pure JavaScript library for easily fetching live stream urls (m3u format) for TV channels from [CBC.ca](https://cbc.ca)

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

