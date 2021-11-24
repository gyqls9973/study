import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import BoardService from "../Service/BoardService";

const UpdateBoardComponent = (props) => {
    const [state, setState] = useState({
        boardid: props.match.params.boardid,
        title: '',
        content: '',
    });

    let history = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    //게시판 내용 수정
    const handleOnClick = (e) => {
        e.preventDefault();
        BoardService.updateBoards(state, state.boardid).then((res) => {
            setState({
                title: state.title,
                content: state.content,
            });
            history.push("/boards");
        })
        console.log('setState => ' + JSON.stringify(state));
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Board</h3>
                        <div className="card-body">
                            <form onSubmit={handleOnClick}>
                                <div className="form-group">
                                    <label>BoardTitle</label>
                                    <input placeholder="BoardTitle" name="title"
                                           className="form-control" value={state.title}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>BoardContent</label>
                                    <input placeholder="BoardContent" name="content"
                                           className="form-control" value={state.content}
                                           onChange={handleChange}
                                    />

                                </div>
                                <button type="submit" className="btn btn-success">Upload</button>&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => {history.push("/boards")}}>Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
export default UpdateBoardComponent;