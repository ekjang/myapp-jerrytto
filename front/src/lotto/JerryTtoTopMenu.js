import React, {Component} from "react";

class JerryTtoTopMenu extends Component {
    state = {
        title: "Select",
        selectOption: ''
    }

    handleSelect = (e) => {
        console.log(e)
        this.setState({selectValue: e})

    }

    render() {
        return (
            <div className="lotto-top-menu">
                Top Menu 자리~
                {/*<DropdownButton*/}
                {/*    alignRight*/}
                {/*    title={title}*/}
                {/*    id="dropdown-menu-align-right"*/}
                {/*    onSelect={this.handleSelect}*/}
                {/*>*/}
                {/*    <Dropdown.Item eventKey="option-1">메뉴1</Dropdown.Item>*/}
                {/*    <Dropdown.Item eventKey="option-2">메뉴2</Dropdown.Item>*/}
                {/*    <Dropdown.Item eventKey="option-3">메뉴3</Dropdown.Item>*/}
                {/*    <Dropdown.Divider />*/}
                {/*    <Dropdown.Item eventKey="some link">기타</Dropdown.Item>*/}
                {/*</DropdownButton>*/}
                {/*<h4>You selected {selectOption}</h4>*/}
            </div>
        );
    }
}

export default JerryTtoTopMenu;