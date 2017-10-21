import React, { Component } from 'react';
import Files from 'react-files';
import * as XLSX from 'xlsx';
import fs, { readFile } from 'fs';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onFilesChange = this.onFilesChange.bind(this);
  }

  onFilesChange(files) {
    const { path } = files[0];
    console.log(path);

    const wb = XLSX.readFile(path);
    var data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header:1});
	  console.log(data);
  }

  render() {
    return (
      <div>
        <Files
          onChange={this.onFilesChange}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable>
          Drop files here or click to upload
        </Files>
        <ReactDataSheet
          data={[
            [{value:  1}, {value:  3}],
            [{value:  2}, {value:  4}]
          ]}
          valueRenderer={(cell) => cell.value}
        />
      </div>
    );
  }
}

export default App;
