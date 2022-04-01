LiveChat AutoTagger
-------------------

An example node.js application to automatically tag finished chats to mark review.

## Installing

Clone the repository locally and run `npm install` to install dependencies.

## Prerequisities

Before running the app, you will need to [create a private access token](https://developers.livechat.com/docs/authorization/authorizing-api-calls#step-1-generate-a-pat) for the following scopes.

- `chats--all:rw`
- `chats--all:ro`

Be sure to copy the token to a safe place as it won't be visible again!

Finally, please visit the [tags](https://my.livechatinc.com/settings/tags) page and make sure a tag named `needs_review`, exists already. For simplicity's sake we won't be creating that automatically.

## Running

The application ships with a `.env.sample` file that you will need to rename to `.env`. Fill it username and password found at [Skirthooks settings page](https://my.livechatinc.com/settings/applications/skirthooks) (click the advanced section) and with the private token details.

It should look _similar_ to this:
```
MQTT_USERNAME=1234567
MQTT_PASSWORD=aaaabbccdddeeffggghhhhiiillkk==
LC_CLIENTID=0a00a00-11b2-3354-abc8-123ab123a
LC_PAT=dal:ab--cdefghk1234567890
```

Run the application with `npm run dev`. If everything goes smoothly, you will notice `Listening for LiveChat events...` on your terminal.

Now, visit your chat page and try to initiate and close a few chats. Notice the console output `tagged thread: xxxx/yyyy`. This means your chats are being automatically tagged, you can confirm that to your chat archive.

## Questions

Have any questions? Need to run this or similar on production?

You can talk to us to our [discord server](https://discord.gg/RqkJBzgcjU), or email us directly at hello@chatengineers.com.

![Chat Engineers](./ce-inline-logo.png)