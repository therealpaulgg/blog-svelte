---
createdAt: '2019-09-12'
excerpt: "Hi everyone! I've been developing this blog for a long time, and I think\
  \ it's finally time to actually begin posting on it. \n\nWhen I first started to\
  \ ..."
title: A Simple Introduction to Web Development
updatedAt: '2021-06-12'
tags: [web, dev, outline]
---

Hi everyone! I've been developing this blog for a long time, and I think it's finally time to actually begin posting on it. 

When I first started to learn web development, I really had no idea where to start. I'll outline some areas of web development and explain them in the simplest way possible.

__Please note that this article is NOT a tutorial. It is designed to teach the concepts used in web development all the time, so that it can be easier for you to do your own learning/research!__

## Frontend Development

Frontend development, simply put, is the application itself that the client uses and interacts with. This can include mobile apps, websites, and desktop applications. Often times these get broken up into 'dumb' clients and 'smart' clients, or 'thin' and 'thick' clients. A lot of logic can be done on the client vs. on the server. 

For frontend development, you'll need to know HTML:

```html
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>My Website</h1>
    <p>Hello World!</p>
  </body>
</html>
```

CSS:
```css
h1 {
	color: gray;
}

body {
	background-color: red;
}
```

and JavaScript depending on your requirements:

```js
document.getElementById("mybutton")
	.addEventListener(
    	"click", 
        () => console.log("i've been clicked!")
    )
```

HTML is used to create the layout of the websites and to create the elements on the screen. It is known as a __markup__ language. 

CSS is used to style HTML elements. You can add different colors, padding (space around an element), margins (space between one element and another element), transitions, and many other things to make websites look good.

JavaScript is used to make an application respond to user actions. Some basic things like clicking links and buttons are baked into HTML, but if you want to do something even slightly more advanced, like a timer, or updating text of an element on a button click, you have to use JavaScript. __It's the language of the web and runs on all browsers.__

Most people, including myself, do not enjoy coding vanilla JS/HTML/CSS for larger projects. We use frameworks such as __[Angular](https://angular.io/)__, __[Vue.JS](https://vuejs.org/)__ (what this blog is built in), and __[React](https://reactjs.org/)__ to help us with frontend development. While advanced and far harder to learn than standard web dev, it is rewarding and far more scalable and allows for reusability that normal web development does not necessarily do easily. 

### Hosting Frontends

You can host frontend sites on anything. The frameworks I listed above run on anything, whether they are GoDaddy, Amazon S3 buckets, or whatever. All a server needs to do is serve static files to a person. It's pretty easy.

If you don't use a framework, things are even easier. Just drag and drop. 

## Backend Development

Now this is where things start to get a little more tricky. What exactly is a backend? Simply put, it's a server. A server is a very broad term, but in the context of the web, if you go to a website, a server must send a response back. Servers can send generated HTML, static files, or even random file types that I'll talk about a bit later. 

There are many, MANY different reasons that backends exists. One of them is to send relevant application data to clients. Another one is to ensure the client cannot do certain things that they aren't supposed to do. For example, I should not be able to authenticate myself on a client only, as I could simply modify the client to say that I am who I say I am (impersonation). A server's job is to check that, provided a username and password, I am a real user. Other things such as form submissions, chat functionality, posting, etc are all done through a backend. 

Backends are especially crucial when developing a service that multiple people will use. If I made a front end forum for example, how would I share a post with people? My client, assuming it is authenticated, would craft a post and send it to the server, and the server would process it and put it in the database (more on that later), and then the server will send the client the data it requires. 

### Templated HTML Backends

Now I'll briefly dive into what a templated backend means. There are backends such as Flask (built with Python), Express (built ontop of the Node.JS JavaScript runtime), and ASP.NET which all take HTML 'templates' and return HTML pages to someone. Take the following Flask template for example:

`file named 'base.html'`

```django
<html>
	<body>
		<h1>My Header On Each Page</h1>
		{% block content %}
		{% endblock %} 
	</body>
</html>
```

`file named 'index.html'`

```django
{% extends "base.html" %}
{% block content %}
	<p>My Paragraph</p>
    <p>{{serverVariable}}</p>
{% endblock %} 
```

The file `index.html` will return the following code, assuming the server sends a variable `serverVariable` which is equal to `555`:

```html
<html>
	<body>
		<h1>My Header On Each Page</h1>
		<p>My Paragraph</p>
      	<p>555</p>
	</body>
</html>
```

There are two main parts to this:
1. The file `index.html` extends `base.html`, in that it 'inherits' its properties, and then in the block `content`, it writes its own content.
2. The `{{serverVariable}}` line basically takes a variable written in server side code and puts it into the HTML. I won't go into the details of the server code for now. 

Basically, at every endpoint that the user can travel to, it sends a request to a server, and the server returns a new generated HTML template.

P.S I don't know PHP (yet) but it does basically the same thing that all these other backend frameworks do with regard to generating HTML. It just runs on way more stuff, including shared hosting services.  

### The Newer Option: SPAs and JSON REST Backends

---

__Update as of 6/11/2021:__ I originally referred to this section as 'JAMStack'. I just wanted to point out a semantic difference here relating to JAMStack. I have edited this post to use different terminology, but technically JAMStack is different than what I describe as separate app/server architecture. JAMStack is about pre-rendering content (building at compile time) and serving the pages to the user, so their client doesn't have to do any computation. This differs from single page apps (SPAs) which will build the entire page on load using JavaScript on the client. Just a distinction I wanted to make after coming back and revisiting this post (I've learned a lot since I wrote this).

[https://jamstack.org/](https://jamstack.org/)

P.S this is the difference between something like Vue.JS and Gridsome, or React vs. Gatsby. If you don't know what those are, ignore me for now...learn the basics and then maybe come back and try to get a better grasp of Gridsome. Maybe I'll even write a new blog post about it.

---

This is what I've built this blog in. It was my first big SPA/REST project. It uses a Vue.JS frontend, and a Node.JS backend.

## Stop Right There...REST

I just want to get this out of the way before I continue any further into this architecture, because it's an incredibly confusing topic that a lot of beginners, including myself at one point, get stuck on.

If you're seriously getting into web development, or you're a student, you've probably heard (or read posts on) waaaayyyy too many people talking about their favorite frontend framework and backend framework. But one question that nobody seems to want to directly answer, is HOW do these completely different frameworks communicate with each other?! 

Developing a site with something like Flask, a HTML generating backend makes a lot of sense initially, cause it's just a server sending HTML. But if you bring a new framework into the equation, completely isolated from the backend, how does it communicate? How does the server even send data???

An example of what I'm talking about: say you want to use Flask and Angular. As two isolated projects, how do you get these to communicate to each other?

## JSON

JSON (JavaScript Object Notation) is a file format which lets us easily send data to/from clients and servers. You might have seen an example of JSON before:

```json
{
	"cars": [
    	{
        	"make": "Dodge",
        	"model": "Grand Caravan",
            "year": 2005,
            "miles_driven": 104243
        },
        {
        	"make": "Chevrolet",
            "model": "Cruze",
            "year": 2014,
            "miles_driven": 3,
            "elevation": -200
        }
    ]
}
```

JSON is basically a bunch of key-value pairs. The JSON object contains an array named "cars", and in this array are several car objects. There isn't any concrete structure to this, making it *unstructured data*. 

JSON lets us send lots of crucial information over to a client. A more notable example is this blog. How does my frontend, Vue.JS, know how to load all the blog posts on the front page?

The server sends some data like this to the client:

```json
{
    "posts": [
        {
            "postId": 1,
            "urlTitle": "hello-world-",
            "title": "Hello World!",
            "username": "therealpaulgg",
            "createdAt": "2019-08-13T02:48:15.558Z",
            "updatedAt": "2019-09-12T18:06:32.442Z",
            "content": "Hello World! :smiley:",
            "tags": [
                "first"
            ],
            "visibility": "public"
        }
    ],
    "pages": 1
}
```

In fact, if you go to [https://api.blog.paulgellai.dev/posts/1](https://api.blog.paulgellai.dev/posts/1), you can get a similar JSON result in your browser. Pretty interesting.

The backend code looks something like this (Node.JS Express, imports omitted):

```js
const app = express()
app.use(express.json())
app.get("/posts", (req, res) => {
	let posts = imaginaryDatabase.getPosts()
    /* 
        note that normally JS objects need a key AND value, but there is 
    	shorthand to abbreviate it if the key and value have the same name!
    */
    res.send({
    	posts
    })
})
```

The exact syntax/implementation depends on the backend, but there are a few highlights here:

1. The endpoint is a `GET` request
2. It is sending JSON data, not HTML or any other data.
3. 'Posts' is an array of posts.

OK, so now we know the basics of sending JSON to a server. But how does a client actually use this data?

This depends on what API you feel like using. There are a few options:
1. jQuery AJAX - as a new web developer, I never learned this option, and I don't even know jQuery. But it's one of the oldest options out there for AJAX.
2. JavaScript Fetch API - in new versions of JS, there is a function called `fetch()` which lets you make API requests natively pretty easily.
3. Axios - this is a popular third party library I generally use just because it has more features than Fetch. It remains easy to use and is extremely popular. 

Here is some sample syntax of a client receiving data from a server (I've included both async/await vs. callbacks syntax):

```js
import axios from "axios"

async function getApiDataAsync() {
	try {
    	let apiCall = await axios.get("https://mycoolapi.com")	
        let data = apiCall.data
        // the 'data' object now contains the JSON content from the server
        console.log(data)
    } catch (err) {
    	// there can be an error with axios itself, or the server can send an 'error' message,
        // being an HTTP code other than 200, something like 401 unauthorized, 404 not found, etc
    	if (err.response.data) {
        	console.log(err.response.data)
        } else {
        	console.log(err.response.status) // prints the HTTP code (401, 404)
            console.log("Something went wrong.")
        }
   	}
}

function getApiData() {
	let apiCall = axios.get("https://mycoolapi.com")
    	.then(res => {
        	let data = res.data
        	// the 'data' object now contains the JSON content from the server
        	console.log(data)
        }
        ).catch(err => {
          // there can be an error with axios itself, or the server can send an 'error' message,
          // being an HTTP code other than 200, something like 401 unauthorized, 404 not found, etc
          if (err.response.data) {
              console.log(err.response.data)
          } else {
              console.log(err.response.status) // prints the HTTP code (401, 404)
              console.log("Something went wrong.")
          }
        }
       	)    
}
```

...and that's pretty much all there is to it. 

## Client App/REST Server Project Structure

There's loads of ways to set up a web development project on the JAMStack, but I mainly want to highlight one thing: __the isolation of the front-end and the back-end in the codebase.__ In my project structures, I have a folder for frontend and backend, and although these can go into one GitHub repo for instance, they are both separate from each other. If I wanted to, I could have my backend server running in New Zealand, and host the production front-end framework files on my local machine. __These are separate frameworks and should remain so.__ 

By doing this, one can more easily focus on the server side code on its own, and the client side code on its own. The purpose of a client is to be an interface, and the data it gets from the server should just be another piece of JavaScript code to fetch data (like the axios code above).

## ..back to SPA and REST

So, when I say...I use a Vue.JS Frontend, and a Node.JS backend, what that means is I have a REST API which a Vue app interacts with. The true definition of a REST API is a stateless API, but often times it is synonymous with a server that simply sends JSON. Unlike the other options, the server doesn't render HTML/stylesheets to send to the client. That is a different server's job entirely (the static files server). It only sends JSON.

I recommend going and looking up examples of REST APIs to have a better understanding of it all. 

## Conclusion

Obviously there is a ton of information in this post, and most of it is conceptual. But that's what it should be. Applied concepts so that you can go learn web development yourself without being completely confused on what you should do. I recommend go learning the Node.JS Express framework and Vue.JS if you'd like to go down the JAMStack path, and the Flask/Django route if you'd like a full web  framework. Happy coding!