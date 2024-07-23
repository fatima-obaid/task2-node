const request = require("request")

//  const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=libaya"
//   request ({url} , (error , response) => {
//       const data1 = JSON.parse(response.body)
//       console.log(data1.location.name)
//       console.log(data1.current.condition.text)
//   })

// weatherapi 

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=libaya"
// request ({url , json : true  } , (error , response) => {
//     console.log(response.body.location.name)
//     console.log(response.body.current.condition.text)

// })

 // weatherstack

//  const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"

// request ({url , json : true  } , (error , response) => {

//     // console.log(response.body.location.name)
//     // console.log(response.body.current.weather_descriptions[0])

//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name ,response.body.current.weather_descriptions[0] )
//     }

// })
// lat - lon 

// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=30.05,31.25"

// request ({url , json : true  } , (error , response) => {

//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name ,response.body.current.condition.text)
//     }
// })

 // mapbox 

  // const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/libaya.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

  // request ({url : geocodeUrl , json : true} , (error , response) => {
     
  //   if (error){
  //       console.log("unable to connect geocode service")
  //   }else if (response.body.message)  {
  //       console.log(response.body.message)
  //   }
  //   else if (response.body.features.length == 0) {
  //       console.log("Unable to find location")
  //   } else {
  //       const longtitude = response.body.features[0].center[0]
  //       const latitude = response.body.features[0].center[1]
  //       console.log(latitude , longtitude)
  //   }
      
  // })
