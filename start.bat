:start
@echo off
title Starting bot...
goto started
cls

:started
title Started bot
goto done
cls

:done
node bot.js
echo Bot failled to start. retrying
pause
goto start
cls
