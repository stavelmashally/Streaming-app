React Application for streaming. <br />
Built with: 
React, Redux, react-router, redux-thunk<br />
Authentication using [Google OAuth](https://developers.google.com/identity/protocols/oauth2)<br/>
Api:
[json-server](https://github.com/typicode/json-server),
[Node-Media-Server](https://github.com/illuspas/Node-Media-Server)

## How to use

### Inside the client folder:<br/>
Set environment variables with your OAuth client id:
```
cp .env.development.local.example .env.development.local
```
 run the client app in the development mode:
 ### `npm start`
<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br/>
Run the API.<br />

Run the RTMP Server<br />

### Start Streaming
Open the [OBS](https://obsproject.com/) Software, go to Settings > Stream.<br />
Choose Custom service and add the folowing:<br />
Server: rtmp://localhost/live<br />
Stream Key: your-stream-key<br />