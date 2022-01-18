---
createdAt: '2020-06-23'
excerpt: I was really bored so I made a file sharing service which uses AES GCM. It
  was actually very challenging to get working as this was the first project ...
title: Dump Me (the app)
updatedAt: '2020-12-26'
tags: [crypto, web, dev, security]
---

I was really bored so I made a file sharing service which uses AES GCM. It was actually very challenging to get working as this was the first project I have personally worked on where being careful with memory usage was extremely important (Go's AES GCM implementation requires a buffer to be in memory to encrypt/decrypt).

(link is dead and no longer being hosted :()

Files get deleted after one hour by a cron job, if you want to play with it. Currently I've implemented the local file system as the only mechanism of storage, but I plan to add Amazon S3 support soon (I will be making use of DigitalOcean spaces).

I plan to turn Dump Me into a larger project but I ended up just making this basic demo because why not. I learned from it that this isn't end to end encryption, and if I want that I'll have to encrypt on the client. Encrypting/decrypting on the server has several obvious attack vectors (RAM leaking, stealing temporary files), but it's better than always having all unencrypted data.

Server: [https://github.com/therealpaulgg/dumpme-server](https://github.com/therealpaulgg/dumpme-server)

Web UI (I don't know why you would care): [https://github.com/therealpaulgg/dumpme-ui](https://github.com/therealpaulgg/dumpme-ui)