import React, { Component } from "react"
import ReactMarkdown from "react-markdown"

import source from "./privacy.md"

class WhatsNew extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    fetch(source)
      .then(res => res.text())
      .then(post => this.setState(state => ({ ...state, post })))
      .catch(err => console.error(err))
  }

  render() {
    const { post } = this.state
    return <ReactMarkdown source={post} />
  }
}

export default WhatsNew
