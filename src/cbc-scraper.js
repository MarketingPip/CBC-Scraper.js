"use strict";



// Functions to call the core functions below.. 
export class CBC_News_Scraper {
 

  
async getAllChannels()
{
  try {
    let result = await this.fetchURL("url", "https://tpfeed.cbc.ca/f/ExhSPC/t_t3UKJR6MAT?pretty=true&sort=pubDate%7Cdesc");
return await this.fetchAllChannelURLs(result)
  } catch( err ) {
    console.error( err.message);
    return {cbc_error: err.message}
  }
}




async getChannel(channel_title){
  try {
    let result = await this.fetchURL("url", "https://tpfeed.cbc.ca/f/ExhSPC/t_t3UKJR6MAT?pretty=true&sort=pubDate%7Cdesc");
    let channels = result.entries
    let foundResults = false
    for (const channel in channels){
      if (channel_title === channels[channel].title){
       
        foundResults = true
        let results = {channel_title: channels[channel].title,
                       description: channels[channel].description,
                         channel_image: channels[channel].cbc$staticImage,
                       stream_url: await  this.getStreamData(channels[channel].content[0].url) }
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










/// CORE FUNCTIONS BELOW




// Core function to fetch URL from text (for XML) or JSON file
async fetchURL(fetchType, url) {

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
async fetchAllChannelURLs(json){
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
                       stream_url: await  this.getStreamData(json[channel][id].content[0].url) })
          
          
        }
     }
  } return await results
}


async getStreamData(url)
{
  try {
    let result = await this.fetchURL("text", url);
    return this.parseXML(result)
  } catch( err ) {
    console.error( err.message);
    return {cbc_error: err.message}
  }
}

// Core function to parse XML files from CBC
async parseXML(file){
  
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
    
  }

var CBC_News = new CBC_News_Scraper();


CBC_News.getChannel("Toronto").then(function(search_results) {
  console.log(search_results)
 });  //////////////////
 
