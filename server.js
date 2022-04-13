const express = require('express')
const app = express()
import React, { Component } from 'react'

class App extends Component {
    static propTypes = {
      children: PropTypes.node
    }
    
    render() {
      const { children } = this.props
      return (
        <div>
          {children}
        </div>
      )
    }
    }
    
    
app.get("*", (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/')) 
      url = url.substring(1);
    res.sendFile(url);
  });

  const port = process.env.PORT || 3000
  app.listen(port,()=>{
      console.log('server on port ' + port)
  })

  export default App