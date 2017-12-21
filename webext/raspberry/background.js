'use strict';
browser.commands.onCommand.addListener(
  () => browser.tabs.query(
    {}, tb => tb.forEach(x => browser.tabs.sendMessage(x.id, 1))
  )
);
