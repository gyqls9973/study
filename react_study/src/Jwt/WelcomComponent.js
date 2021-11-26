import React, {Component} from 'react'
import BoardService from "../Service/BoardService";
import {withRouter} from "react-router-dom";

class WelcomeComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      boards: []
    }
    this.addBoard = this.addBoard.bind(this);
    this.editBoard = this.editBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  addBoard() {
    this.props.history.push("/create_boards");
  }

  editBoard(boardid) {
    this.props.history.push(`/update_boards/${boardid}`);
  }

  deleteBoard(boardid) {
    BoardService.deleteBoards(boardid).then((res) => {
      this.setState({boards: this.state.boards.filter(boards => boards.boardid !== boardid)});
    });
  }

  componentDidMount() {
    BoardService.getBoards().then((res) => {
      this.setState({boards: res.data})
    })
  }

  render() {
    return (
      <div>
        <h2 className="text-center">{this.props.match.params.name} Board List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
            <tr>
              <th>Board Num</th>
              <th>Board Title</th>
              <th>Board Content</th>
              <th>Update&Delete</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.boards.map(
                row =>
                  <tr key={row.title}>
                    <td>{row.boardid}</td>
                    <td>{row.title}</td>
                    <td>{row.content}</td>
                    <td>
                      <button className="btn btn-info" onClick={() => this.editBoard(row.boardid)}>
                        Update
                      </button>
                      <button className="btn btn-danger" onClick={() => this.deleteBoard(row.boardid)}>
                        Delete
                      </button>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-primary" onClick={this.addBoard}>Add Board</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(WelcomeComponent);