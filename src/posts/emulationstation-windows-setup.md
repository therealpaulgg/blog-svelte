---
createdAt: '2021-08-06'
excerpt: A guide to set up a nice fully-featured Emulation box on Windows
title: EmulationStation Windows Setup Guide
updatedAt: '2022-01-07'
---

## Introduction

Why would you want to use EmulationStation on windows? RetroPie is so nice...

If you have a beefy PC to emulate games with you basically have two options:

1. Install some linux distro (ubuntu probably easiest) and run the RetroPie installer, which automatically sets up the latest version of EmulationStation with retroarch and other sane defaults
2. Struggle with trying to do it on Windows....until now.

Why would you do it on windows? Let's face it, gaming on Linux still kind of sucks and can often take a long time to set up. I love Linux as much as the next guy (I use it at work daily and *prefer* it over windows for many, many things) but for gaming Windows is still far ahead and easier to deal with. Drivers, support, etc, just works better on Windows at this time. I use all three main OS's (windows, mac, linux) frequently so I think I have a closer to 'objective' view of this. Sorry fanboys.

So if you have all your PC games on Windows but you also want a great emulation setup like RetroPie offers, how do you get this without dual booting and using Linux? You can get a very similar setup working on Windows (some things work better, some things work worse).

## EmulationStation Setup

EmulationStation's official release is ancient and has a ton of bugs. For instance, scraping is broken, and moving between consoles feels laggy. Gross and unnecessary. Get EmulationStation decent release from:

https://github.com/jrassa/EmulationStation/releases/tag/continuous-master

P.S you'll need the 32 bit dependencies (Microsoft Visual C++ 2010 Service Pack 1 Redistributable Package MFC Security Update                        ) https://www.microsoft.com/en-us/download/details.aspx?id=26999

Install manually into C:\Program Files\EmulationStation\\...

Create shortcut and put into the start menu (`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\EmulationStation`)

The shortcut should have target (with resolution specified):

`"C:\Program Files\EmulationStation\emulationstation.exe" --resolution 3840 2160`

If your system has scaling (like on a 4k screen) be sure to turn it off by going into 'compatibility',  'change high DPI settings', 'high DPI scaling override', check that box, and the dropdown should say 'application'

Now your shortcut should work flawlessly

## Retroarch

Install retroarch: https://www.retroarch.com/?page=platforms

'Download (64bit)' so you get the zip file

in your `%HOMEPATH%` or user directory you should have a `.emulationstation` folder

create a folder called `systems` if it doesnt exist

add `retroarch`

copy the contents of retroarch zip release into this folder

## Configuring Systems

Put this as your es_systems.cfg (may have some bugs):

```xml
<!-- This is the EmulationStation Systems configuration file.
All systems must be contained within the <systemList> tag.-->

<systemList>
~\.emulationstation\roms
<system>
    <name>3do</name>
    <fullname>3do</fullname>
    <path>~\roms\3do</path>
    <extension>.iso .ISO</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\4do_libretro.dll "%ROM_RAW%"</command>
    <platform>3do</platform>
    <theme>3do</theme>
</system>

<system>
<fullname>Nintendo 3DS</fullname>
    <name>n3ds</name>
    <path>~\roms\3ds</path>
    <extension>.3ds .3DS .3dsx .3DSX</extension>
    <command>%HOMEPATH%\.emulationstation\systems\citra\citra-qt.exe "%ROM_RAW%"</command>
    <platform>n3ds</platform>
    <theme>3ds</theme>
</system>
  
<system>
    <name>amiga</name>
    <fullname>Amiga</fullname>
    <path>~\roms\amiga</path>
    <extension>.adf .ADF</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\puae_libretro.dll "%ROM_RAW%"</command>
    <platform>amiga</platform>
    <theme>amiga</theme>
</system>
  
<system>
    <name>atari2600</name>
    <fullname>Atari 2600</fullname>
    <path>~\roms\atari2600</path>
    <extension>.a26 .bin .rom .A26 .BIN .ROM</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\stella_libretro.dll "%ROM_RAW%"</command>
    <platform>atari2600</platform>
    <theme>atari2600</theme>
</system>
  
<system>
    <name>atarist</name>
    <fullname>Atari ST, STE, Falcon</fullname>
    <path>~\roms\atarist</path>
    <extension>.st, .stx, .img, .rom</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\hatari_libretro.dll "%ROM_RAW%"</command>
    <platform>atarist</platform> 
    <theme>atarist</theme>
</system>
  
<system>
    <name>atari7800</name>
    <fullname>Atari 7800 ProSystem</fullname>
    <path>~\roms\atari7800</path>
    <extension>.a78 .bin .A78 .BIN</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\prosystem_libretro.dll "%ROM_RAW%"</command>
    <platform>atari7800</platform>
    <theme>atari7800</theme>
</system>
  
<system>
    <name>atarijaguar</name>
    <fullname>Atari Jaguar</fullname>
    <path>~\roms\atarijaguar</path>
    <extension>.j64 .J64 .jag .JAG</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\virtualjaguar_libretro.dll "%ROM_RAW%"</command>
    <platform>atarijaguar</platform>
    <theme>atarijaguar</theme>
</system>
  
<system>
    <name>atarilynx</name>
    <fullname>Atari Lynx</fullname>
    <path>~\roms\atarilynx</path>
    <extension>.lnx .LNX</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\handy_libretro.dll "%ROM_RAW%"</command>
    <platform>atarilynx</platform>
    <theme>atarilynx</theme>
</system>
  
<system>
    <name>Dreamcast</name>
    <fullname>Sega Dreamcast</fullname>
    <path>~\roms\dreamcast</path>
    <extension> .mds, .MDS, .mdf, .MDF, .bin, .BIN, .cue, .CUE, .cdi, .CDI .gdi .GDI</extension>
    <command>%HOMEPATH%\.emulationstation\systems\dreamcast\nullDC.exe -config nullDC_GUI:Fullscreen=0 -config nullDC:Emulator.Autostart=1 -config ImageReader:LoadDefaultImage=1 -config ImageReader:DefaultImage="%ROM_RAW%"</command>
    <platform>dreamcast</platform>
    <theme>dreamcast</theme>
</system>
  
<system>
    <name>fba</name>
    <fullname>Final Burn Alpha</fullname>
    <path>~\roms\fba</path>
    <extension>.fba .zip .FBA .ZIP</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\fb_alpha_libretro.dll "%ROM_RAW%"</command>
    <platform>arcade</platform>
    <theme>fba</theme>
</system>
  
<system>
    <name>gamegear</name>
    <fullname>Sega Gamegear</fullname>
    <path>~\roms\gamegear</path>
    <extension>.gg .bin .GG .BIN</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\genesis_plus_gx_libretro.dll "%ROM_RAW%"</command>
    <platform>gamegear</platform>
    <theme>gamegear</theme>
</system>
  
<system>
    <name>gb</name>
    <fullname>Game Boy</fullname>
    <path>~\roms\gb</path>
    <extension>.gb .GB</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\gambatte_libretro.dll "%ROM_RAW%"</command>
    <platform>gb</platform>
    <theme>gb</theme>
</system>
  
<system>
    <name>gbc</name>
    <fullname>Game Boy Color</fullname>
    <path>~\roms\gbc</path>
    <extension>.gbc .GBC</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\gambatte_libretro.dll "%ROM_RAW%"</command>
    <platform>gbc</platform>
    <theme>gbc</theme>
</system>

<system>
    <name>gba</name>
    <fullname>Game Boy Advance</fullname>
    <path>~\roms\gba</path>
    <extension>.gba .GBA</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\vba_next_libretro.dll "%ROM_RAW%"</command>
    <platform>gba</platform>
    <theme>gba</theme>
</system>
  
<system>
    <name>gc</name>
    <fullname>Nintendo GameCube</fullname>
    <path>~\roms\gc</path>
    <extension>.iso .ISO .gcm .GCM</extension>
    <command>%HOMEPATH%\.emulationstation\systems\dolphin\Dolphin.exe -e "%ROM_RAW%"</command>
    <platform>gc</platform>
    <theme>gc</theme>
</system>
  
<system>
    <name>genesis</name>
    <fullname>Sega Genesis</fullname>
    <path>~\roms\genesis</path>
    <extension>.smd .bin .gen .md .sg .SMD .BIN .GEN .MD .SG</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\genesis_plus_gx_libretro.dll "%ROM_RAW%"</command>
    <platform>genesis</platform>
    <theme>genesis</theme>
</system>
  
<system>
    <name>mame</name>
    <fullname>MAME</fullname>
    <path>~\roms\mame</path>
    <extension>.zip .ZIP</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mame_libretro.dll "%ROM_RAW%"</command>
    <platform>arcade</platform>
    <theme>mame</theme>	
</system>
  
<system>
    <name>mastersystem</name>
    <fullname>Sega Master System</fullname>
    <path>~\roms\mastersystem</path>
    <extension>.sms .bin .SMS .BIN</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\genesis_plus_gx_libretro.dll "%ROM_RAW%"</command>
    <platform>mastersystem</platform>
    <theme>mastersystem</theme>
</system>
  
<system>
    <name>megadrive</name>
    <fullname>Sega Mega Drive / Genesis</fullname>
    <path>~\roms\megadrive</path>
    <extension>.smd .bin .gen .md .sg .SMD .BIN .GEN .MD .SG</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\genesis_plus_gx_libretro.dll "%ROM_RAW%"</command>
    <platform>megadrive</platform>
    <theme>megadrive</theme>
</system>
  
<system>
    <name>msx</name>
    <fullname>MSX</fullname>
    <path>~\roms\msx</path>
    <extension>.rom .mx1 .mx2 .col .dsk .ROM .MX1 .MX2 .COL .DSK</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\fmsx_libretro.dll "%ROM_RAW%"</command>
    <platform>msx</platform>
    <theme>msx</theme>
</system>
  
<system>
    <name>n64</name>
    <fullname>Nintendo 64</fullname>
    <path>~\roms\n64</path>
    <extension>.v64 .z64 .n64 .V64 .Z64 .N64</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mupen64plus_next_libretro.dll "%ROM_RAW%"</command>
    <platform>n64</platform>
    <theme>n64</theme>
</system>
  
<system>
    <name>nes</name>
    <fullname>Nintendo Entertainment System</fullname>
    <path>~\roms\nes</path>
    <extension>.nes .NES</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\fceumm_libretro.dll "%ROM_RAW%"</command>
    <platform>nes</platform>
    <theme>nes</theme>
</system>
  
<system>
    <name>nds</name>
    <fullname>Nintendo DS</fullname>
    <path>~\roms\nds</path>
    <extension>.nds .NDS</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\desmume_libretro.dll "%ROM_RAW%"</command>
    <platform>nds</platform>
    <theme>nds</theme>
</system>
  
<system>
    <name>ngp</name>
    <fullname>Neo Geo Pocket</fullname>
    <path>~\roms\ngp</path>
    <extension>.ngp .ngc</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mednafen_ngp_libretro.dll "%ROM_RAW%"</command>
    <platform>ngp</platform>
    <theme>ngp</theme>  
</system>

<system>
    <name>pc</name>
    <fullname>PC (x86)</fullname>
    <path>~\roms\pc</path>
    <extension>.sh .bat .com .exe .SH .BAT .COM .EXE</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\dosbox_libretro.dll "%ROM_RAW%"</command>
    <platform>pc</platform>
    <theme>pc</theme>
</system>
  
<system>
    <name>pcfx</name>
    <fullname>PC-FX</fullname>
    <path>~\roms\pcfx</path>
    <extension>.cue .CUE</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mednafen_pcfx_libretro.dll "%ROM_RAW%"</command>
    <platform>pcfx</platform>
    <theme>pcfx</theme>
</system>

<system>
    <name>psp</name>
    <fullname>Playstation Portable</fullname>
    <path>~\roms\psp</path>
    <extension>.iso .ISO .cso .CSO</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\ppsspp_libretro.dll "%ROM_RAW%"</command>
    <platform>psp</platform>
    <theme>psp</theme>
</system>
  
<system>
    <name>psx</name>
    <fullname>Playstation</fullname>
    <path>~\roms\psx</path>
    <extension>.cue .CUE</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mednafen_psx_libretro.dll "%ROM_RAW%"</command>
    <platform>psx</platform>
    <theme>psx</theme>
</system>
  
<system>
    <name>ps2</name>
    <fullname>Playstation 2</fullname>
    <path>~\roms\ps2</path>
    <extension>.iso .ISO .cue .CUE .BIN .bin .mds .MDS</extension>
    <command>%HOMEPATH%\.emulationstation\systems\pcsx2\pcsx2.exe "%ROM_RAW%"</command>
    <platform>ps2</platform>
    <theme>ps2</theme>
</system>

<system>
    <name>ps3</name>
    <fullname>Playstation 3</fullname>
    <path>~\roms\ps3</path>
    <extension>.PS3</extension>
    <command>%HOMEPATH%\.emulationstation\systems\rpcs3\rpcs3.exe --no-gui "%ROM_RAW%"</command>
    <platform>ps3</platform>
    <theme>ps3</theme>
</system>
  
<system>
    <name>pcengine</name>
    <fullname>TurboGrafx 16 (PC Engine)</fullname>
    <path>~\roms\pcengine</path>
    <extension>.pce .zip .cue .PCE .ZIP .CUE</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mednafen_pce_fast_libretro.dll "%ROM_RAW%"</command>
    <platform>pcengine</platform>
    <theme>pcengine</theme>
</system>
  
<system>
    <name>scummvm</name>
    <fullname>ScummVM</fullname>
    <path>~\roms\scummvm</path>
    <extension>.bat .BAT</extension>
    <command>"%ROM_RAW%"</command>
    <platform>pc</platform>
    <theme>scummvm</theme>
</system>

<system>
    <name>sega32x</name>
    <fullname>Sega 32x</fullname>
    <path>~\roms\sega32x</path>
    <extension>.32x .smd .bin .md .32X .SMD .BIN .MD</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\picodrive_libretro.dll "%ROM_RAW%"</command>
    <platform>sega32x</platform>
    <theme>sega32x</theme>
</system>
  
<system>
    <name>segacd</name>
    <fullname>Sega Mega Drive / Genesis</fullname>
    <path>~\roms\segacd</path>
    <extension>.smd .bin .md .zip .iso .SMD .BIN .MD .ZIP .ISO</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\picodrive_libretro.dll "%ROM_RAW%"</command>
    <platform>segacd</platform>
    <theme>segacd</theme>
</system>
  
<system>
    <name>saturn</name>
    <fullname>Sega Saturn</fullname>
    <path>~\roms\saturn</path>
    <extension>.iso .ISO</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\yabause_libretro.dll "%ROM_RAW%"</command>
    <platform>saturn</platform>
    <theme>saturn</theme>
</system>
  
<system>
    <name>sg-1000</name>
    <fullname>Sega SG-1000</fullname>
    <path>~\roms\sg-1000</path>
    <extension>.sg .zip .bin .SG .ZIP .BIN</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\genesis_plus_gx_libretro.dll "%ROM_RAW%"</command>
    <platform>sg-1000</platform>
    <theme>sg-1000</theme>
</system>
  
<system>
    <name>snes</name>
    <fullname>Super Nintendo Entertainment System</fullname>
    <path>~\roms\snes</path>
    <extension>.smc .sfc .SMC .SFC</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\snes9x_libretro.dll "%ROM_RAW%"</command>
    <platform>snes</platform>
    <theme>snes</theme>
</system>
  
<system>
    <name>vectrex</name>
    <fullname>Vectrex</fullname>
    <path>~\roms\vectrex</path>
    <extension>.vec .gam .bin .VEC .GAM .BIN</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\vecx_libretro.dll "%ROM_RAW%"</command>
    <platform>vectrex</platform>
    <theme>vectrex</theme>
</system>
  
 <system>
    <name>videopac</name>
    <fullname>Odyssey 2 / Videopac</fullname>
    <path>~\roms\videopac</path>
    <extension>.bin .BIN</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\o2em_libretro.dll "%ROM_RAW%"</command>
    <platform>videopac</platform>
    <theme>videopac</theme>
</system>
  
<system>
    <name>virtualboy</name>
    <fullname>Virtual Boy</fullname>
    <path>~\roms\virtualboy</path>
    <extension>.vb .VB</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mednafen_vb_libretro.dll "%ROM_RAW%"</command>
    <platform>virtualboy</platform>
    <theme>virtualboy</theme>
</system>
  
<system>
    <name>wii</name>
    <fullname>Nintendo Wii</fullname>
    <path>~\roms\wii</path>
    <extension>.iso .ISO</extension>
    <command>%HOMEPATH%\.emulationstation\systems\dolphin\Dolphin.exe -e "%ROM_RAW%"</command>
    <platform>wii</platform>
    <theme>wii</theme>
</system>

<system>
    <name>wiiu</name>
    <fullname>Nintendo Wii U</fullname>
    <path>~\roms\wiiu\DATA\EMULATORS\Cemu\GAMES</path>
    <extension>.rpx</extension>
    <command>cd %HOMEPATH%\.emulationstation\systems\cemu\ && Cemu.exe -f -g "%ROM_RAW%"</command>
    <platform>wiiu</platform>
    <theme>wiiu</theme>
</system>

<system>
<fullname>Nintendo Switch</fullname>
    <name>switch</name>
    <path>~\roms\switch</path>
    <extension>.iso .ISO .switch .SWITCH</extension>
    <command>%HOMEPATH%\.emulationstation\systems\yuzu\yuzu.exe "%ROM_RAW%"</command>
    <platform>switch</platform>
    <theme>switch</theme>
</system>
  
<system>
    <name>wonderswan</name>
    <fullname>Wonderswan</fullname>
    <path>~\roms\wonderswan</path>
    <extension>.ws .wsc</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\mednafen_wswan_libretro.dll "%ROM_RAW%"</command>
    <platform>wonderswan</platform>
    <theme>wonderswan</theme>
</system>
  
<system>
    <name>zxspectrum</name>
    <fullname>ZX Spectrum</fullname>
    <path>~\roms\zxspectrum</path>
    <extension>sna .szx .z80 .tap .tzx .gz .udi .mgt .img .trd .scl .dsk SNA .SZX .Z80 .TAP .TZX .GZ .UDI .MGT .IMG .TRD .SCL .DSK</extension>
    <command>%HOMEPATH%\.emulationstation\systems\retroarch\retroarch.exe -L %HOMEPATH%\.emulationstation\systems\retroarch\cores\fuse_libretro.dll "%ROM_RAW%"</command>
    <platform>zxspectrum</platform>
    <theme>zxspectrum</theme>
</system>

</systemList>
```

To get **most** of the emulators go through RetroArch and install the 'cores' (gba, snes, etc). Some of the cores are confusing but if you just install all the ones with the systems like Nintendo DS you should get on the right track. You could also download the cores manually and put them in the cores folder.

The emulators you'll have to manually put into `systems` are:

- dreamcast (nullDC)
  - `systems\dc`
- playstation 2 (pcsx2)
  - `systems\pcsx2`
- gamecube & wii (dolphin)
  - `systems\dolphin`
- wii U
  - `systems\cemu`
- switch (yuzu)
  - `systems\yuzu` (or ryujinx)
- ps3
  - `systems\rpcs3`
- 3ds
  - `systems\citra`

You can install them by getting their zip releases and putting them into their corresponding directories

Put some roms in your roms folder, I made mine `%HOMEPATH%\roms`. Run emulationstation at this point and things should start working quit nicely. 

On initial launch of RetroPie and other emulators you'll have to do some manual configuration to get things to run perfectly like forcing things to launch in fullscreen mode, maybe configuring the controller bindings for certain emulators, etc. After you do these things the experience should become much more smooth.

## Directx 9.0C for older games

You may want to install this here:

https://www.microsoft.com/en-us/download/details.aspx?id=8109

Extract to some folder in downloads and then run the DXSETUP.exe.

## Why isnt an emulator launching?!

Sorry, I dont play literally every emulator in the config I provide, I stole it from some dude who stole it from some other dude who stole it from Retropie, or something. **If your game isnt launching, it is probably because the command is invalid.** Make sure the path to your core is valid and make sure every other thing in the path is valid. You can try running the command in a command prompt (NOT powershell) to see if it works.

## Wii U Emulator

Yet another reason to use Windows for emulation - Cemu.

Wii U emulator stuff:

[Cemu Emulator - https://cemu.info/#download](https://cemu.info/#download)

The configuration for wii u is in the XML config in this markdown file

Use ds4 for windows if you are using ps4/ps5 controller with bluetooth. I would recommend just using an xbox one/series X controller if you want true XInput support. DirectInput sucks. XInput for ps4 requires xbox controller emulation, meaning your games will think you're using an xbox controller.

[DS4Windows by Ryochan7 (no longer maintained, its a long story, but its the newest version https://ryochan7.github.io/ds4windows-site/)](https://ryochan7.github.io/ds4windows-site/)

## Switch

use the Yuzu emulator (download as zip and put it in the location where it is specified in the config under 'switch')

## PS3

Use the RPCS3 emulator. You'll launch games as folders.


## 3DS

use retroarch Citra core and make sure that the vulkan graphics engine is being used (Settings > Drivers > Video > Vulkan)

## Acquiring Games

You can rip games from your own devices to do it legally. Google is your friend otherwise.

install games by trying to 'play' them, it may make you install a local copy of CEMU just do it

Sometimes instead of selecting a specific file to play a game, you might have to play a game as a folder. The PS3 games are a good example. You can trick emulationstation into using a folder by giving a folder a .PS3 extension (i.e "God of War 3.PS3")