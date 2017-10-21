import React, { Component } from 'react';
import Files from 'react-files';
import * as XLSX from 'xlsx';
import fs, { readFile } from 'fs';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFile: false,
      table: null
    };
    this.onFilesChange = this.onFilesChange.bind(this);
  }

  onFilesChange(files) {
    const { path } = files[0];
    console.log(path);

    const wb = XLSX.readFile(path, {
      cellStyles: true,
      sheetRows: 20
    });
    var data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1});
	  console.log(data);
    this.setState({
      hasFile: true,
      table: data
    });
  }

  render() {
    return (
      <div>
        {
          (!this.state.hasFile) ? (
            <Files
              onChange={this.onFilesChange}
              multiple
              maxFiles={3}
              maxFileSize={10000000}
              minFileSize={0}
              clickable>
              Drop files here or click to upload
            </Files>
          ) : (
            <ReactDataSheet
              data={
                this.state.table
              }
              valueRenderer={value => value}
            />
          )
        }
      </div>
    );
  }
}

export default App;
