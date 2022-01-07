---
createdAt: '2020-01-16'
excerpt: '__Disclaimer: This guide requires you to have another server in which you
  can ''port forward'' or at least access services on the internet. If you don''t...'
title: How to Host a Server On Your Own Hardware Without Port Forwarding (at your
  house) or Hamachi
updatedAt: '2020-01-16'
---

__Disclaimer: This guide requires you to have another server in which you can 'port forward' or at least access services on the internet. If you don't have one, get a cheap Linux server like one on DigitalOcean or Vultr.__

I've been playing a lot of *Space Engineers* with my friends lately, and it's a fun game. For a while, I had a friend host the server just by launching his game, and we all joined over what I imagine is a peer-to-peer system. We ran into some annoyances (mainly like him having to be online when we wanted to play the game), and this led to everyone wanting a dedicated server to be set up.

There were a couple annoying requirements:

1. The developers of the game REQUIRE you to host a server on Windows. Basically everything I have is a Linux server, and everything publicly accessible is on my DigitalOcean droplet. I have a server at home which I use for Plex and other random Linux stuff I don't care about, but it's not ideal to have to use it, as it's the only server I have that is affordable to use that can run a Windows Server VM. I tried to do nested KVM on my DigitalOcean droplet...and that didn't go well at all.
2. My apartment internet is extremely annoying in that I can only have services accessible from my apartment over IPv6. So SSH, websites, whatever, all has to travel over IPv6. It is impossible, therefore, for me to port forward anything to all my friends who have IPv4 with no IPv6 support. To make matters worse, Space Engineers requires IPv4, and doesn't even have DNS resolving built into the game! I can't have my friends use `paulgellai.dev` as a server IP address, they have to actually use my full IP. Amazing.

Anyway, here's the general outline:

1. Obtain a publicly available Linux server. What? Yeah. I know you might already have your server at your house and stuff, whatever. But you need something that people can connect to...if they can't connect to your network, they'll have to connect to another one. So if you don't already have one, get some cloud hosted Linux server that's cheap to do the job, or if you have one in some other building across the country...or world.
2. Install a VPN Server on your public Linux server. I personally recommend Pritunl, I didn't know it existed until [Linus Tech Tips covered it](https://www.youtube.com/watch?v=KcxKWudhkpc){style="text-decoration: underline";}. This is necessary so your server at home will connect to the VPN hosted on your Linux server.
3. At this point, your home server is able to access everything that's on the public server's network, and the public server can access the home server. Great! You'll have to do some iptables (the horror). The following should work:
```bash
# The general syntactical structure of the command to use
sudo iptables -t nat -A PREROUTING -p <protocol> 127.0.0.1 --dport <port to access service> 
 \ -j DNAT --to-destination <VPN IP of your home server>:<port of service to forward>
# An actual example
sudo iptables -t nat -A PREROUTING -p udp -d 127.0.0.1 --dport 27016 -j DNAT --to-destination 192.168.222.2:27016
# Depending on your setup (I don't need this), you might need to add a rule with MASQUERADE
```
A few things to note:

1. If you disconnect your home server from the VPN, it might get a new IP address upon reconnecting, meaning you'll have to change the iptables rules.
2. What we are effectively doing is routing all packets from the public server (the gateway) to a client on the network. A VPN is necessary to get this client on the server's network. So basically 'port forwarding' but we're making the public server the gateway, circumventing the restrictions of your home's router/ISP.
3. iptables does not save upon server reboot. You should use `iptables-persistent` which saves rules to `/etc/iptables/rules.v4` and `/etc/iptables/rules.v6`. Install this package after you set the rules and it will save them. You can always run `iptables-save > /etc/iptables/rules.v4` or something similar to save new rules that you make. 

---
__I will edit this post in the future and add more technical details, and provide a tutorial and more in depth guide of how to do all  this, like how to set up the VPN server, settings for the VM being forwarded, and iptables rules.__