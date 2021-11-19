import React, {useState} from 'react';

const CreateBoardComponent = (history) => {
    const [state, setState] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        setState({
            title: state.title,
            content: state.content,
        })
        console.log('state => ' + JSON.stringify(state))
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Board</h3>
                        <div className="card-body">
                            <form>
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
                                <button className="btn btn-success" onClick={handleOnClick}>Upload</button>&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => {history.push("/boards")}}>Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateBoardComponent;