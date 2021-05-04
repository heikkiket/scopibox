# Scopibox video jukebox
![Scopibox Logo](/frontend/public/img/icons/android-chrome-192x192.png ) 

Scopibox is a video jukebox application, where you can log in, and see an excercise video. Video will be eventually change daily, but for demoing purposes this version of the application has a debug button that can be used to fetch a new video.

It is also possible to go through a history of viewed videos, see them again or clear the list.

## Application demo
The frontend is live here:[Scopibox at Metropolia Jelastic server](https://env-9844456.jelastic.metropolia.fi/#/)

A GraphQL playground is also available:[GraphQL playground](https://env-9844456.jelastic.metropolia.fi/graphql )

## User instructions

First, you have to create an user account. There's no registration form yet, so just do a sign up mutation in GraphQL playground. You can also use the demo user: demo/demo. But beware: someone else might use it also, at this very moment.

After that, you can log in to the application.

When logged in, application gives you a random video you can watch.

Under the video is *Next video* button. Pressing that simulates the next log in time. Also, you can log out and back in. It has the same effect.

If you run out of videos, the application shows (an ugly) notification about that.

If you please, you can see your viewing history by pressing "History" button at the top bar.

Every video in the history view is actually a button. Pressing the name you can see the video again.

You can reset your viewing history by pressing *Empty history* button. Resetting history also resets the jukebox, so next time you log in, the application will give you a new video.

There's a subtle bug I noticed after deploying this demo version: the last video is still present in the home screen even after emptying the history. Vice versa, the viewing history will stay empty altough there is a video in the home screen. The problem goes away by logging out and back in.

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

## Screenshots

![Sopibox login](/screenshots/scopibox-login.png ) 
![Sopibox home screen](/screenshots/scopibox-home.png )
![Sopibox history sreen](/screenshots/scopibox-history.png )
## Testing

I tried to write most of the backend by using test-driven development model. That made me go slower, because I had to study Mocha, Chai and friends. However, this also saved me from midnight debugging headache sessions.

I'm not so pleased about the state I got this application to, but I think I learned a lot about JavaScript infrastructure and language features.
