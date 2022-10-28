"use strict";



// Functions to call the core functions below.. 

  
async function CBC_getAllChannels()
{
  try {
    let result = await fetchURL("url", "https://tpfeed.cbc.ca/f/ExhSPC/t_t3UKJR6MAT?pretty=true&sort=pubDate%7Cdesc");
return await fetchAllChannelURLs(result)
  } catch( err ) {
    console.error( err.message);
    return {cbc_error: err.message}
  }
}




async function CBC_getChannel(channel_title){
  try {
    let result = await fetchURL("url", "https://tpfeed.cbc.ca/f/ExhSPC/t_t3UKJR6MAT?pretty=true&sort=pubDate%7Cdesc");
    let channels = result.entries
    let foundResults = false
    for (const channel in channels){
      if (channel_title === channels[channel].title){
       
        foundResults = true
        let results = {channel_title: channels[channel].title,
                       description: channels[channel].description,
                         channel_image: channels[channel].cbc$staticImage,
                       stream_url: await  getStreamData(channels[channel].content[0].url) }
       // console.log(results)
       
      return results
      }
    }
    
    if (foundResults != true){
      console.log({cbc_error: "No results found for channel"})
    return {cbc_error: "No results found for channel"}
    }
  } catch( err ) {
    console.error( err.message);
    return {cbc_error: err.message}
  }
}


CBC_getChannel("Toronto").then(function(search_results) {
  console.log(search_results)
 });  //////////////////
 







/// CORE FUNCTIONS BELOW




// Core function to fetch URL from text (for XML) or JSON file
async function fetchURL(fetchType, url) {

        //console.log(url)
        if (fetchType === "text"){
            const rsp = await fetch(url),
           data = await rsp.text();
          return data;
        } else{
            const rsp = await fetch(url),
            data = await rsp.json();
          return data;
        }
       
  
}




// Core function to fetch all channels
async function fetchAllChannelURLs(json){
  let results = []
  for (const channel in json){
     for (const id in json[channel]){
        //if (json[channel][id].title ){
       // console.log(json[channel][id].title)
         // console.log(json[channel][id].description)
                //    }
        if (json[channel][id].id ){
       //console.log(json[channel][id].id)
          
          results.push({channel_title: json[channel][id].title,
                       description: json[channel][id].description,
                         channel_image: json[channel][id].cbc$staticImage,
                       stream_url: await  getStreamData(json[channel][id].content[0].url) })
          
          
        }
     }
  } return await results
}


async function getStreamData(url)
{
  try {
    let result = await fetchURL("text", url);
    return parseXML(result)
  } catch( err ) {
    console.error( err.message);
    return {cbc_error: err.message}
  }
}

// Core function to parse XML files from CBC
async function parseXML(file){
  
var xmlDoc;
var text = file

xmlDoc =  new DOMParser().parseFromString(text, 'text/xml');
let videoTag = xmlDoc.querySelector("video").outerHTML
  

const regex = /src="[^"]*"/gm;
const found = videoTag.match(regex);
// some hacky work to parse source
 let parsedResults = found[0].replace('src="', '');
   parsedResults = parsedResults.replace('"', '');
  
   // return the parsed stream SRC 
return await parsedResults
}//
