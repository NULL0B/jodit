/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2024 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

describe('Delete plugin', () => {
	describe('Select all and exec delete command', () => {
		[
			['<p>test</p>', ''],
			[
				`<p>You must include the syntax highlighting library yourself, on your site:</p>
<pre class="language-html">...</pre>
</pre>
<p>After that, the library must be initialized</p>
<pre class="language-javascript">Prism.highlightAll()</pre>`,
				''
			]
		].forEach(([input, result]) => {
			describe('For input ' + input, () => {
				it('Should remove all content. Result: ' + result, () => {
					const editor = getJodit();

					editor.value = input;

					editor.execCommand('selectall');
					editor.execCommand('delete');

					expect(editor.value).equals(result);
				});
			});
		});
	});
});
