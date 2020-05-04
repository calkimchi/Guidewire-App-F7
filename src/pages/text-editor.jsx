import React from 'react';
import { Page, Navbar, BlockTitle, BlockHeader, Block, TextEditor, List, ListInput } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      customButtons: {
        hr: {
          content: '&lt;hr&gt;',
          onClick(editor, buttonEl) {
            document.execCommand('insertHorizontalRule', false);
          },
        },
      },
      customValue: `<p>On the 21st of May, I was rear-ended by a white honda civic in a residential area while driving to work.</p>`,
      listEditorValue: '',
    };
  }
  render() {
    return (
      <div>
        
        <BlockTitle>Claim Details</BlockTitle>
        <TextEditor
          placeholder="Enter text..."
          value={this.state.customValue}
          onTextEditorChange={(value) => this.setState({ customValue: value })}
        />

      </div>
    );
  }
}
