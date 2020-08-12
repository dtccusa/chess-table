import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChangeChessBoard = this.onChangeChessBoard.bind(this);
    this.createTable = this.onChangeChessBoard.bind(this);
    this.state= {
        entrycolrows: 8,
        table : []
    }
  }
  
  componentDidMount() { 
    this.createTable();
  }

  createTable () {
  
    var newtable = [];
    var vcolorindex=0;

    for (var i=0; i<this.state.entryrows; i++) {
      newtable.push(<tr></tr>);
        for (var k=0; i<this.state.entryrows; k++) { 
          if(i % 2 === 0) {
            vcolorindex = k+1;
          }
          else {
            vcolorindex= k;
          }
          var backgroundcolor = vcolorindex % 2 === 0 ? 'style="background-color:black"' : 'style="background-color:white"';
          newtable.push("<td"+ backgroundcolor +"></td>");
          vcolorindex++;
        }
    }

    this.setState({
        table: newtable
    });
  }

  onChangeChessBoard(e) {
    this.setState({
      entrycolrows:e.target.value
    });

    this.createTable();
  }

  render() {
    return (
      <div>
        <div>
          <div >
          <label>Description:</label>
          <input type="text"
                  value={this.state.entryrows}
                  onChange={this.onChangeChessBoard}
          />
        </div>
      </div>

        <table className="table">

        <tbody>
            {
                this.state.table.map(function(table) {
                  return {table}
                  }
              )
            }
        </tbody>
      </table>
      </div>
    )
  }
}

export default App;
