import React, { Component } from "react";
import { renderCountedImages, renderAllImages } from "../logic/renderImgs";
import first from "../img/1.jpg";
import { imgs } from "../logic/imgSrc";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Card,
  CardImg,
  Row,
  Container,
  CardColumns
} from "reactstrap";

class ImageForm extends Component {
  state = {
    file: first,
    color: "#050404",
    imgCount: null
  };

  handleChangeInput = e => {
    this.setState({
      imgCount: parseInt(e.target.value)
    });
  };

  handleChange = e => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
  };

  changeColor = e => {
    this.setState({
      color: e.target.value
    });
  };

  getNumbersFromImgsLength = () =>
    imgs.map((img, index) => <option key={index}>{index + 1}</option>);

  getImgs = () =>
    this.state.imgCount
      ? renderCountedImages(imgs, this.state.imgCount)
      : renderAllImages(imgs);

  render() {
    const styleObj = {
      background: this.state.color
    };

    return (
      <Container style={styleObj}>
        <Row>
          <Col className="box" sm={{ size: 2, order: 1, offset: 2 }}>
            <Form>
              <FormGroup>
                <Label for="color-picker">Background Color</Label>
                <Input
                  type="color"
                  name="color"
                  id="color-picker"
                  placeholder="color"
                  value={this.state.color}
                  onChange={this.changeColor}
                />
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="number-type">Type or select a number</Label>
                <Input
                  onChange={this.handleChangeInput}
                  type="number"
                  min="0"
                  name="number"
                  id="number-type"
                  placeholder="type a number"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.handleChangeInput}
                  defaultValue="10"
                  type="select"
                  name="select"
                  id="number-select"
                >
                  {this.getNumbersFromImgsLength()}
                </Input>
              </FormGroup>
              <hr />
              <FormGroup>
                <Input
                  type="file"
                  name="file"
                  id="upload-file"
                  onChange={this.handleChange}
                />
                <FormText color="muted">upload your picture</FormText>
              </FormGroup>
            </Form>
          </Col>
          <Col className="box" sm={{ size: 6, order: 2, offset: 0 }}>
            <Card>
              <CardImg src={this.state.file} alt="selected" />
            </Card>
          </Col>
        </Row>
        <Row>
          <CardColumns className="all-images">
            {this.getImgs()}
          </CardColumns>
        </Row>
      </Container>
    );
  }
}

export default ImageForm;
