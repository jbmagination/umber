'use strict';
browser.commands.onCommand.addListener
(
   () => browser.tabs.query
   (
      {}, tb => tb.forEach
      (
         z => browser.tabs.sendMessage(z.id, 1)
      )
   )
);
