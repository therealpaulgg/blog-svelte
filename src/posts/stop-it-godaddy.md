---
createdAt: '2020-01-31'
excerpt: Before I start, I know a lot of college students (my peers) that interned/are
  going to intern at GoDaddy...and this isn't meant to offend these people...
title: Stop it, GoDaddy
updatedAt: '2020-01-31'
tags: [IT, rant, personal]
---

Before I start, I know a lot of college students (my peers) that interned/are going to intern at GoDaddy...and this isn't meant to offend these people. This post is about my experience with GoDaddy as a __customer of their services.__ I myself would never want to intern at GoDaddy after these experiences...but that's just me. I am a Computer Science major who just so happens to be really good with computers and not just coding (as in I can do what IT people do), so my perspective is probably very different.

## The Good

Why should you use GoDaddy? If you need a simple shared hosting provider that takes care of all of the technical stuff for you and has very little hassle.

Otherwise...

## The Bad

I used to use GoDaddy in the past, then realized that their prices were insane. For shared hosting, it costs an absurd amount of money ($6.00/mo base?!) and you can't even deploy a custom backend besides PHP on there, because we're still living in the stone age and Node.JS, C#, and other applications just don't exist. You can get literally the same thing with an Amazon S3 bucket and it's miles cheaper. Although I will say configuring that on your own if you don't know DNS is probably too difficult for most people.

Their domains...they charge a privacy fee. This is ridiculous and I despise domain providers who do this. Google does it for free. You should too.

But that's my experience, not others...well, I'll get to that.

It all started when I created a website for a client. They purchased GoDaddy shared hosting a while back, and it severely limited my development options. I don't do PHP, so I had to just make a bland front end. They later realized that they would want to do more with the site, and we switched over to a GoDaddy VPS (oof). 

For God's sake, WHY is the default (and apparently only officially supported method by GoDaddy) for logging on to a Linux server PASSWORD authentication?! SSH keys are a thing, you know. I had to do too much config editing to get the server more secured than should be necessary (compared to DigitalOcean, AWS, Google Cloud). Also, GoDaddy forced us to use Ubuntu 16.04 and upgrade manually...wtf. But despite all the pitfalls, I got my app built and everything was great.

Later the same client asked me to do some IT work, involving setting up a VPN server. Ok, simple enough, I've done this before, and Pritunl makes it even easier and includes user management, so a no-brainer (and free). We tried for a while to use their Windows machines but that was not easy as they were self-hosted and difficult to keep up all the time (there wasn't a proper Windows Server OS). We ended up attempting to install the VPN server on the same Linux VPS as the website was hosted on.

Mostly everything worked, but I noticed one problem: there was no internet access. Weird, I thought. None of my other setups had this issue. Maybe it'll just go away at some point. Firewall problem? Disable UFW? ....HA. I wish.

Tackling this issue today, I spent a significant part of my day trying to properly configure an OpenVPN server on GoDaddy. After checking `tcpdump` traffic, all packets from the client (the one connected to the server via VPN) were being successfully sent to their respective destinations. However, no traffic was getting back. Weird...I set up the exact same configuration on two different DigitalOcean VPS servers (and a third one just now), and no dice for GoDaddy. And no, I checked iptables, the rules were set properly.

I think, ok, the Pritunl troubleshooting site says something about AWS and Google Cloud blocking packets with different source IP's. Maybe GoDaddy has a similar thing. Let me check the server.

To GoDaddy's credit, they have a really nice feature called Delegate access where you can basically operate a customer's account and get access to their domains and servers, making it easy (and I don't need their password). But it didn't work, and I ran into this weird GoDaddy Pro thing and I had to call support to get it fixed and the support guy told me not to use GoDaddy Pro...nice. Then it worked nicely though.

![https://i.imgur.com/qMNoSaj.png](https://i.imgur.com/qMNoSaj.png)

These are the literal 3 options to do anything with the server.

![https://i.imgur.com/pXBtcGz.png](https://i.imgur.com/pXBtcGz.png)

These are the four things in the navigation menu that you can do. Self explanatory. Dashboard just has some CPU, RAM, and logs about when the server was created (so basically nothing).

In the settings menu, here is a list of all the options you get:

- Change Server Name (what it's called in GoDaddy's system, doesn't matter at all)
- Hostname (why do I edit this through the website again???)
- IP Address (to copy, not a SETTING)
- SMTP Relay Server (again, NOT A SETTING)
- And login credentials. You can change the username and password.
- A toggle called admin access??? Ok.

Very, VERY limiting options. There's no firewall anything here. So I'm going crazy at this point, and I resort to calling tech support...

I try to contact GoDaddy support and get answered by a person who doesn't understand any technical jargin even though they were assigned to the SERVER SUPPORT TEAM. They tell me that I am responsible for setting up the VPN client...of course I am. And that's basically all they said and were completely, 100%, USELESS. I feel like the support person tried to make me feel like an idiot, not knowing how to properly manage a server...they even suggested that the only solution would be to put out a paid ticket. Nice.

What was the solution? Switched to DigitalOcean, created the same server configuration in less than an hour, and everything worked flawlessly.

Don't use GoDaddy if you're an IT professional.