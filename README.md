# Scopibox video jukebox
![Scopibox Logo](/frontend/public/img/icons/android-chrome-192x192.png ) 

Scopibox is a video jukebox application, where you can log in, and see an excercise video. Video will be eventually change daily, but for demoing purposes this version of the application has a debug button that can be used to fetch a new video.

It is also possible to go through a history of viewed videos, see them again or clear the list.

## Application demo
The frontend is live here:[Scopibox at Metropolia Jelastic server](http://env-9844456.jelastic.metropolia.fi/#/)

A GraphQL playground is also available:[GraphQL playground](http://env-9844456.jelastic.metropolia.fi/graphql )


## Mutations

Here are the mutations for the application:

### Sign up
```
mutation {
  signup(user: {name: "Test User", username: "test", password: "pw"}) {
  	username
    name
  }
}
```

### Log in

```
mutation {
  login(username: "heikki", password:"pw"){
    user {
      username
      name
    }
    token
  }
}
```

### Add video

```
mutation {
addVideo(title:"Test video 5", url: "https://www.youtube.com/embed/t-RWTKMc9uU") {
title
url
}
  
}
```

### Query random video

```
query {
  randomVideo {
    title
    url
  }
}
```

### Query video history

```
query {
  videoHistory {
    title
    url
  }
}
```
