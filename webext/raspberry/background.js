'use strict';
browser.commands.onCommand.addListener(
  () => browser.tabs.query(
    {url: 'https://www.youtube.com/*'},
    tb => browser.tabs.sendMessage(tb[0].id, 1)
  )
);
