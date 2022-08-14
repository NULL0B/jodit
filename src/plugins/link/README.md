# Link plugin

Adds a link editor to the toolbar. Также может обрабатывать разные типы ссылок: видео, файлы.

```js
Jodit.make('#editor', {
	link: {
    /**
     * Template for the link dialog form
     */
    formTemplate: (editor: IJodit) => `<form><input ref="url_input"><button>Apply</button></form>`,
    formClassName: 'some-class',

    /**
     * Follow link address after dblclick
     */
    followOnDblClick: true,

    /**
     * Replace inserted youtube/vimeo link to `iframe`
     */
    processVideoLink: true,

    /**
     * Wrap inserted link
     */
    processPastedLink: true,

    /**
     * Show `no follow` checkbox in link dialog.
     */
    noFollowCheckbox: true,

    /**
     * Show `Open in new tab` checkbox in link dialog.
     */
    openInNewTabCheckbox: true,

    /**
     * Use an input text to ask the classname or a select or not ask
     */
    modeClassName: 'input', // 'select'

    /**
     * Allow multiple choises (to use with modeClassName="select")
     */
    selectMultipleClassName: true,

    /**
     * The size of the select (to use with modeClassName="select")
     */
    selectSizeClassName: 10

    /**
     * The list of the option for the select (to use with modeClassName="select")
     */
    selectOptionsClassName: [
      {value: 'https://xdsoft.net', text: 'xdsoft'}
    ],
  }
});
```

