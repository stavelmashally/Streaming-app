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
 run the client, api, rtmp using:
 ### `npm start`

### Start Streaming
Open the [OBS](https://obsproject.com/) Software, go to Settings > Stream.<br />
Choose Custom service and add the folowing:<br />
Server: rtmp://localhost/live<br />
Stream Key: your-stream-key<br />
