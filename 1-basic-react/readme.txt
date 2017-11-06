1. See package.json for babel
2. 

How babel works 
module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'], //['jsx', 'es6', 'newjsfeatures']
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'], //['react-html-attrs', 'class property es6 ', 'es6 decorators'],
        }
      }
    ]
  }

3. Run webpack or webpack --watch 
4. npm install -S webpack-dev-server  
In package.json
"scripts": {
    "dev": "./node_modules/.bin/webpack-dev-server --content-base src --inline --hot",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
webpack-dev-server --content-base src --inline -hot localhost:8080/webpack-dev-server/index.html 

5. Webpack a Module loader 
- browserify
- webpack for react 


var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"), 
  devtool: debug ? "inline-sourcemap" : false, //check if you are in production 
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"  //In your index.html make sure you point your script to this file 
  },
  plugins: debug ? [] : [ //Cleanup for production
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};


//Props and State 
import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    //setting initial state - manages virtual dom 
    this.state = {
      title: "Welcome",
    };
  }

  const propexample = "first prop";

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer propexample={propexample}/>
      </div>
    );
  }
}

---------------------------------------------------------------------------------------
