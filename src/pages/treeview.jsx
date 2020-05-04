import React from 'react';
import { Page, Navbar, BlockTitle, Block, Treeview, TreeviewItem, Checkbox } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      checkboxes: {
        images: {
          'accident001.png': false,
		  'accident002.png': false,
		  'accident003.png': false,
		  'accident004.png': false,
		  'accident005.png': false,
		  'accident006.png': false,
		  'accident007.png': false,
        },
        signeddocuments: {
          'police-report.docx': false,
		  'medical-records.docx': false,
        },
		unsigneddocuments: {
          'witness-statement.docx': false,
        },
      },
      selectedItem: null,
      loadedChildren: [],
    };
  }

  toggleSelectable(e, item) {
    var self = this;
    var $ = self.$$;
    if ($(e.target).is('.treeview-toggle')) return;
    self.setState({selectedItem: item});
  }

  loadChildren(done) {
    var self = this;
    setTimeout(function () {
      // call done() to hide preloader
      done();
      self.setState({
        loadedChildren: [
          {
            name: 'John Doe',
          },
          {
            name: 'Jane Doe',
          },
          {
            name: 'Calvin Johnson',
          },
        ],
      });
    }, 2000);
  }

  render() {
    return (
      <Page>
        <Navbar title="Car Accident Files" backLink="Back" />

        <BlockTitle>Case #000294 </BlockTitle>
        <Block strong className="no-padding-horizontal">
          <Treeview>
            <TreeviewItem label="images" iconF7="folder_fill">
              <Checkbox slot="content-start"
                checked={Object.values(this.state.checkboxes.images).indexOf(false) < 0}
                indeterminate={Object.values(this.state.checkboxes.images).indexOf(false) >= 0 && Object.values(this.state.checkboxes.images).indexOf(true) >= 0}
                onChange={(e) => {
                  Object.keys(this.state.checkboxes.images).forEach(k => this.state.checkboxes.images[k] = e.target.checked);
                  this.setState({...this.state});
                }}
              />
              
              <TreeviewItem label="accident001.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident001.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident001.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="accident002.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident002.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident002.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="accident003.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident003.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident003.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="accident004.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident004.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident004.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="accident005.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident005.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident005.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="accident006.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident006.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident006.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="accident007.jpg" iconF7="photo_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.images['accident007.jpg']}
                  onChange={(e) => {
                    this.state.checkboxes.images['accident007.jpg'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
            </TreeviewItem>
            <TreeviewItem label="signed documents" iconF7="folder_fill">
              <Checkbox slot="content-start"
                checked={Object.values(this.state.checkboxes.signeddocuments).indexOf(false) < 0}
                indeterminate={Object.values(this.state.checkboxes.signeddocuments).indexOf(false) >= 0 && Object.values(this.state.checkboxes.signeddocuments).indexOf(true) >= 0}
                onChange={(e) => {
                  Object.keys(this.state.checkboxes.signeddocuments).forEach(k => this.state.checkboxes.signeddocuments[k] = e.target.checked);
                  this.setState({...this.state});
                }}
              />
              
              <TreeviewItem label="police-report.docx" iconF7="doc_text_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.signeddocuments['police-report.docx']}
                  onChange={(e) => {
                    this.state.checkboxes.signeddocuments['police-report.docx'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
			  <TreeviewItem label="medical-records.docx" iconF7="doc_text_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.signeddocuments['medical-records.docx']}
                  onChange={(e) => {
                    this.state.checkboxes.signeddocuments['medical-records.docx'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
            </TreeviewItem>
			<TreeviewItem label="unsigned documents" iconF7="folder_fill">
              <Checkbox slot="content-start"
                checked={Object.values(this.state.checkboxes.unsigneddocuments).indexOf(false) < 0}
                indeterminate={Object.values(this.state.checkboxes.unsigneddocuments).indexOf(false) >= 0 && Object.values(this.state.checkboxes.signeddocuments).indexOf(true) >= 0}
                onChange={(e) => {
                  Object.keys(this.state.checkboxes.unsigneddocuments).forEach(k => this.state.checkboxes.unsigneddocuments[k] = e.target.checked);
                  this.setState({...this.state});
                }}
              />
              <TreeviewItem label="witness-statement.docx" iconF7="doc_text_fill">
                <Checkbox slot="content-start"
                  checked={this.state.checkboxes.unsigneddocuments['witness-statement.docx']}
                  onChange={(e) => {
                    this.state.checkboxes.unsigneddocuments['witness-statement.docx'] = e.target.checked;
                    this.setState({...this.state});
                  }}
                />
              </TreeviewItem>
            </TreeviewItem>
            
          </Treeview>
        </Block>

      </Page>
    );
  }

}