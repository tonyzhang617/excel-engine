import '../assets/css/App.css';
import React, { Component } from 'react';
import Files from 'react-files';

class App extends React.Component {
  onFilesChange(files) {
    const { path } = files[0];
    console.log(path);
  }

  render() {
    return (
      <div>
        <Files
          onChange={this.onFilesChange}
          accepts={['image/png', 'text/plain', 'audio/*']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable>
          Drop files here or click to upload
        </Files>
      </div>
    );
  }
}

export default App;
