import Row from "react-bootstrap/Row"
import React from "react";
import Button from "react-bootstrap/Button";

export default function Home(props) {
    return (
        <div>
            <br/><br/>
            <h1>
                Bot or Not
            </h1>
            <Row>
                <div>
                    <input id="idInput"
                           type="number"
                           value={props.idValue}
                           onChange={props.handleIdChange}
                           placeholder="Twitter User ID"/>
                    <Button id="analyzeButton"
                            onClick={props.handleSubmitUser}>
                        Analyze!
                    </Button>
                </div>
            </Row>
            <br/>
            <hr/>
        </div>
    )
}