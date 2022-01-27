---
createdAt: '2022-01-26'
updatedAt: '2022-01-26'
excerpt: My thoughts on the current state of the Linux Desktop.
title: State of the Linux Desktop
tags: [linux, personal]
---

# My Experience with Desktop Linux

## Early Experiences

The Linux desktop has been pitched by enthusaists as a genuine, workable replacement for a Windows or Mac machine. In my personal experience, this holds true only for a certain audience.

My first OS that I ever used was Windows XP back when I was 5 years old. For many years after that I used differing variations of Windows as most people probably have. Windows Vista, 7, 8, 10, and now 11. Somewhere along the way, when I was a teenager, I decided to try out the Linux desktop. For what exact reason, I honestly don't remember, other than that 'it seemed cool'. 

I wasn't a developer and was 'tech savvy' but only to a point, and the Linux desktop of that age was something that was incredibly difficult to use. I remember trying to install programs and constantly having to Google how to do it. Gone were the downloadable GUI installers -- I had to apt-get everything, and didn't know where to find anything. It was quite the accomplishment when I figured out how to play Minecraft on my Ubuntu desktop back then, but I felt that the whole experience was just too off-putting and then abandoned the Linux desktop for a while after that. Having to run Minecraft through the command line because the launcher didn't work properly on Linux felt like a workaround and not realistic for everyday use.

## Modern Changes

Fast-forward to the second year into my computer science degree, and a lot of things changed. My technical abilities grew and the Linux desktop became more usable and friendly. I had learned programming, which while it doesn't directly translate to being better at Linux or computers, enhanced my technical abilities and gave me a new mindset for solving problems. On the side, I was learning how to use the Linux command line more efficiently and I even installed Ubuntu server on an old Thinkpad laptop, which I used as my server. As my abilities grew, so did my curiosity, and I tried several different desktop Linux distros, although none ever stuck. Ubuntu, Mint, Cinnamon, Manjaro, Elementary, and probably a few others, I all tried but never really got quite where I wanted. I cared (and still do) a LOT about the aesthetic of my desktop, and I couldn't help but feel that Linux was simply behind the times, still adhering to [skeuomorphism](https://whatis.techtarget.com/definition/skeuomorphism) (i.e iOS 6 or older) instead of adopting flatter, modern interfaces. I was simply never happy with the way anything looked. Combined with the lack of app support for Linux, no matter how hard I tried, I still never enjoyed Desktop Linux as my main OS. Updates would often break stuff, and I just didn't want to spend the time fixing something that broke.

![iOS 6 Home Screen](/img/IOS_6_Home_Screen.png)

![Ubuntu Gnome Desktop](/img/GtmXy.jpg)

### Arch, BTW

After I heard on one of my peers saying something along the lines of "you're really smart if you can install Arch. I use Arch, BTW.", I felt disappointed that I had always failed to properly install Arch (it's not particularly easy), and felt challenged to finally accomplish this goal. I originally installed Arch with a GNOME desktop environment, but in the summer when I had too much time on my hands, I set up Arch with i3wm and heavily customized it (that setup is documented [here](https://github.com/therealpaulgg/dotfiles/)). I eventually felt like the tiling workflow was not really practical for the way I like to use a computer and would take too long to get good at, so I ended up going back to Gnome. Then, one day I updated my computer (Arch has a lot of updates), my OS broke, and then I gave up and nuked Linux, yet again.

I would then proceed to install/remove Desktop Linux in a somewhat cyclic pattern throughout the rest of my undergrad degree.

## MacOS Fills the Void

The biggest shortcoming I experienced with Linux was the lack of third party software that was available. It would always have to be an __alternative__ version to some software that was available (i.e Microsoft Office Word to LibreOffice Writer). But Windows was such a frustrating OS to use for development, because WSL 1 wasn't really that great (networking tools didn't work properly, like nmap for instance) and I just wanted BASH. Was BASH too much to ask for? It felt like it at the time. Not to mention that web development tools worked way better on *nix systems.

I had seen people around me often using MacOS, and I had a bit of experience with MacOS as I had to buy a 8GB dual core i5 Macbook Pro for an iOS class (I was also interested in iOS development at the time on the side). MacOS, being Unix, felt close enough to Linux to where I felt like I could take advantage of a lot of things on the Mac that I would be missing on Windows, but also get great third party app support. Unfortunately my Macbook was too slow of a machine to do much of anything with, so I bought a faster one around the start of 2020. I used that as my primary laptop since it was faster than anything I had at the time. It seemed to be decently performant and was a lot faster than the old Macbook I had. It even had 16GB of RAM which was a huge upgrade.

But unfortunately...

### Limited Hardware & Apple Tax

Even that Intel Macbook pro was not fast enough. It felt sluggish especially after updating to MacOS Monterey, and I realized it was not as fast of a machine as I thought it was. And I had spent $2300 on this thing! INSANE. I eventually got fed up with the terrible battery life, horrible thermals, and bad performance, and went and gave it back to Apple, and bought an Asus Zephyrus G15. This thing is SO FAST compared to the Macbook, and I'm even able to play games on it since it has a mobile 3080. The high refresh rate also makes a huge difference. Apple would eventually release their M1 Pro Macbook Pros but those are way too expensive compared to this Asus laptop. I paid roughly $2000 for it and got 1TB of storage, a fast CPU, an RTX 3080, and 16GB of RAM, while paying $2000 for an equivalent M1 gets you a measly 512GB of storage, and there are other problems with the base model too.

This post isn't really designed to be a total dig against Apple; they have made great hardware recently. But the reality is that their hardware when I was using it was not sufficient enough for what I typically use a computer for, and that made the illusion of MacOS greatness eventually go away. I even found some things during my time with MacOS that I could do on Linux but I couldn't on MacOS (or things just worked better on Linux).


## Why I'm Writing This Post

Within the past year, I've started using Linux on the desktop quite a bit more. I was using Ubuntu earlier in the year when I was still dual booting with Windows 10, but like my Arch experience, something broke with the kernel and I was too impatient to fix it.

As a side note, every single Linux server I've run has had basically zero issues with updates or functionality, it's always been a desktop problem. 

Most recently I have tried (and am using) Fedora. It's incredibly stable while also having pretty new packages, which is something I can't say for the LTS edition of Ubuntu (they got pretty old packages all things considered). I understand why (LTS should be stable) but the stability-technology tradeoff seems out of balance for my desktop experience. That's not even getting into the non-LTS Ubuntu releases, which I've had ok experiences with, but that's the one that broke on me earlier this year. The LTS release wouldn't ever break, but having to add new PPAs for software that's too out of date in the base packages does get frustrating after a while (as a developer).

### Windows 11 Disaster

Recently I have had quite a few problems with Windows 11, in just basic usability changes as well as random bugs that have occurred. That was a part of my motivation for trying to move to a Linux desktop for productivity. 

For the rest of this post, I'll discuss those points.

# My 'Objectively Driven' Opinion (I'm not a fanboy)

People often love to talk about how much they love one OS they use over the other, and often times get into silly conflicts over these things. Android vs. iOS, Windows vs. Mac...it even goes further than that in the tech sphere, to things like the console wars of Xbox and PS5. My opinion is that every OS or device has its own strengths and weaknesses. __Technology is a tool, and different tools have things they're good and bad at. Unfortunately, no one thing does everything perfectly.__ For example, Windows is a great all-around operating system (king of gaming), but it's pretty bulky and sometimes has some bizzare behavior, and the UI doesn't always flow together. With MacOS, it's pretty intuitive to use, but sometimes it isn't, and often the OS feels incredibly locked down, not to mention too tightly integrated into Apple's services. One time using MacOS, because one of Apple's web services went down, my laptop got so slow it was unusable (could barely move the cursor), and the solution was turning off the laptop's internet until it resolved itself. Linux has the potential to be great but there are still many things holding it back from wide-scale adoption. I'm sure you get the point by now; this battle could be even fought over iOS and Android all day. Or cakes and pies. Our society is great! 🙃

# Technical Issues & Hurdles to Greatness

I'm currently using Fedora 35 Workstation on my desktop machine, and while I have it dual-booted on my laptop and my desktop, I'm not really using it on my laptop for the moment. Here are (some) personal struggles/issues I've had:

- Fractional scaling on Linux sucks. Xorg can technically do it with some X11 commands, but it's janky. Wayland is the only thing that supports it 'technically' and apparently its implementation has some [performance issues (the open source community hasn't fully figured it out yet)](https://gitlab.freedesktop.org/wayland/wayland-protocols/-/issues/47)
- Wayland support is just not there yet. Currently on my laptop, the apps I can use well with Wayland are Terminator, Firefox, and Thunderbird. Not much else works properly. A lot of electron apps which have the capability of being updated (Discord, Slack, Zoom) just haven't been updated yet mainly due to the developers of these applications. Regardless of the fact that this isn't Linux's fault, this is still a legitimate reason for people like me to not adopt using Wayland full time.
    - I even tried to game on Wayland, and that just straight up didn't work. Games crashed on Wayland and Steam freezes a lot, but I have no issues on Xorg.
- Refresh rate w/ Nvidia drivers has been troublesome forver on Xorg. Currently using Nvidia drivers 510.31 on Wayland has been the only way for my dual monitor setup to properly function with high refresh rate (I have a 165hz monitor and a 75hz monitor). If I use Xorg or an older driver version, my 165hz monitor gets locked to 75hz, I believe due to the compositor. This is mostly Nvidia's fault I believe. But even so, a legit reason to be frustrated.

# Great Strides

Things I have liked about Linux recently:

- TLP makes managing my laptop battery pretty nice, I can set the max charge level to 60% to help extend the life of my product since I leave it plugged in all the time
- Community-made drivers for laptops like my Zephyrus G15, letting me customize the keyboard (even a custom ROG kernel for it)
- Nvidia drivers are finally improving, this is a big deal for anyone who actually cares about performance. Sorry Nouveau.
- Gaming on Linux has improved thanks to Valve, but it still kind of sucks. I've had cases where Proton games work better than native-Linux games (I'm looking at you, Stellaris. Crashes literally every single time I try to play it on Linux).
- Being able to do basically anything I want with my computer is pretty awesome.

# Verdict

The reason I find myself using the Linux desktop today in a dual-boot setup with Windows, is that an organic Linux experience often times feels smoother than Windows. My OS now looks better than my Windows OS (in my opinion), due to the flat Gnome theme and nice icon packs. Any Linux terminal feels infinitely more powerful to me than a Windows terminal, particularly as a developer. SSH and Linux remote development just work better in general. It's more private and free. But there are tradeoffs to everything, and I still can't in good conscience recommend anyone between the level of 'grandma' and 'tech savvy' use Linux as a daily driver, unless you do everything in a web browser.