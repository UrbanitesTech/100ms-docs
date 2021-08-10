## Creating Account in 100ms

If you're using 100ms for the 1st time and don't have an account here then follow this section otherwise [Skip to this Section](#token-generation).

You will have to create an account at [Dashboard of 100ms](https://dashboard.100ms.live/)

![Create Account](/guides/token/create-account.png)

After you have created your account you have to Confirm your Email , check the promotions tab in your Mail Box if you can't find it.

Then login again and you would see this Section. Fill it out

![Build App](/guides/token/build-app.png)

After that's done you would be asked to choose a template we will choose "Video Conferencing" for now then click on "Set up App"

![Tempalte](/guides/token/template.png)

After you're App is set click on "Go to Dashboard" or [Go Here](https://dashboard.100ms.live/dashboard)

![Dasboard](/guides/token/go-to-dashboard.png)

## Token Generation

Any service calling 100ms' REST APIs need to authenticate using a management token. You can generate Tokens via `Token Generation endpoint` that is provided by 100ms.

### Token Endpoint

After you're done with creating an account head over to the developer section of [100ms Dashboard](https://dashboard.100ms.live/developer). You will find all `Access Credentials` here including `Token Endpoint`.

![Credentials](/guides/token/credential.png)

### Creating Room

Now to get `room_id` get over to [Room in Dashboard](https://dashboard.100ms.live/rooms) and click on "Create Room" , While creating a room you can specify it's name, roles or enable recording.

![Create Room](/guides/token/create-room.png)

You will now see "Room Details" section and we have a `room_id` created.

![Room Id](/guides/token/room-id.png)

### Generating Token

Now that we have got our `Token Endpoint` and `room_id` we can now generate our own Token.

Replace `{Token Endpoint}` and `{room_id}` placeholders with your endpoint and roomId in the curl request below and then run the curl request in the terminal:

```bash
curl --request POST '{endpoint}/api/token' \
--header 'Content-Type: application/json' \
--data-raw '{"user_id": "JohnDoe1", "role": "host", "room_id":"{room_id}"}'

#Example

curl --request POST 'https://prod-in.100ms.live/hmsapi/johndoe.app.100ms.live/api/token' \
--header 'Content-Type: application/json' \
--data-raw '{"user_id": "JohnDoe1", "role": "host", "room_id":"60f534a3533226920b256128"}'
```