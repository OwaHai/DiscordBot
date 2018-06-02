:setup
@echo off
title Installing...
goto installs
cls

:installs
echo Please wait while we're installing NPM packages...
npm install discord.js
pause
goto done
cls

:done
echo We have finished the installation. to quit
pause 
