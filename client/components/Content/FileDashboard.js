import React from 'react';
import ReactDom from 'react-dom';

class FileDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ''
        };
    }

    handleChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            this.setState({src: reader.result})
        }, false);

        if (file) reader.readAsDataURL(file);
    }

    render() {
        return(
            <div>
                <h1>File Reader</h1>
                <div>
                    Select a photo to display:
                    <input type="file" id="fileInput" onChange={this.handleChange}/>
                    < br/>
                    {(this.state.src !== '') ? <img src={this.state.src} height="200" alt="Image preview..." /> : null}
                </div>
            </div>
        )
    }
}

module.exports = FileDashboard;