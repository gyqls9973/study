import React, {Component} from 'react';
import BoardService from "../Service/BoardService";

class ListBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        }
        this.addBoard = this.addBoard.bind(this);
    }

    addBoard() {
        this.props.history.push("/create_boards");
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Board List</h2>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>boardNum</th>
                            <th>BoardTitle</th>
                            <th>BoardContent</th>
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
        );
}
}

export default ListBoardComponent;