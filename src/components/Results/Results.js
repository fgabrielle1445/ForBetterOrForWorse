import React from 'react';
import './Results.css';

export default function Results() {
  return(
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Avenir&display=swap" rel="stylesheet" />
        <link href="./Results.css" rel="stylesheet" />
        <title>Document</title>
      </head>
      <body>
      <div class="v16_188">
                <div class="name"></div>
                <span class="v16_190"><a href='/dashboard'>My Dashboard</a></span>
                <div class="v16_191"></div>
                <div class="back_link"><a href='/'>home</a></div>
                <div class="v16_192"></div>
                <span class="v16_195">Results</span>
                <div class="v16_197"></div>
                <span class="v16_198">Your anxiety diagnostic test revealed that you
    are likely to have anxiety. This diagnosis is
    not meant to be an official medical diagnosis 
    but instead meant to provide you with more
    insight to your mental health. 
    
    For additional questons, please feel free to look
    at our FAQ section or contact the For Better
    staff. Click here to learn more about anxiety.</span>
            </div>
      </body>
      </html>
  );
}