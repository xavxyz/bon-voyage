import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PlayButton from '../shared/PlayButton';

export const prefix = 'https://vimeo.com/';

class AddVideo extends React.Component {
  state = {
    uri: prefix,
  };

  handleChange = event => {
    let { value: uri } = event.target;

    if (uri.substr(0, prefix.length) !== prefix) {
      uri = prefix;
    }

    if (!/^\d+$/.test(uri.substr(prefix.length))) {
      uri = prefix;
    }

    this.setState({
      uri,
    });
  };

  viewVideo = event => {
    event.preventDefault();

    const [, videoId] = this.state.uri.split(prefix);

    this.props.history.push({
      pathname: `/${videoId}`,
    });
  };

  render() {
    return (
      <FormWrapper onSubmit={this.viewVideo}>
        <Input value={this.state.uri} onChange={this.handleChange} autoFocus />
        <PlayButton onClick={this.viewVideo} />
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.form`
  display: flex;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    width: 80vw;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  align-self: stretch;

  border: 0;
  outline: 0;
  padding: 0 0.5rem;
  margin-right: 1rem;
  font-size: 2rem;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.1rem;
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 769px) {
    min-width: 500px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding: 0.5rem 0.5rem;
  }
`;

export default withRouter(AddVideo);
