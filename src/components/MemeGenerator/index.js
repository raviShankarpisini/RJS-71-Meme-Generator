import {Component} from 'react'

import {
  MainContainer,
  Heading,
  Label,
  Input,
  Button,
  AppContainer,
  ImageContainer,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    initialUrl: '',
    initialTopText: '',
    initialBottomText: '',
    initialFontSize: fontSizesOptionsList[0].displayText,
  }

  onChangeUrl = event => {
    this.setState({initialUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({initialTopText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({initialBottomText: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({initialFontSize: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    const {
      initialBottomText,
      initialFontSize,
      initialUrl,
      initialTopText,
    } = this.state

    this.setState({
      url: initialUrl,
      topText: initialTopText,
      fontSize: initialFontSize,
      bottomText: initialBottomText,
    })
  }

  render() {
    const {
      initialBottomText,
      initialFontSize,
      initialUrl,
      initialTopText,
      topText,
      bottomText,
      fontSize,
      url,
    } = this.state
    return (
      <AppContainer>
        <MainContainer as="form" data-testid="meme">
          <Heading>Meme Generator</Heading>
          <Label for="imageUrl">Image URL</Label>
          <Input
            type="input"
            id="imageUrl"
            onChange={this.onChangeUrl}
            value={initialUrl}
            placeholder="Enter the Image URL"
          />
          <Label for="topText">Top Text</Label>
          <Input
            type="input"
            id="topText"
            onChange={this.onChangeTopText}
            value={initialTopText}
            placeholder="Enter the Top Text"
          />
          <Label for="bottomText">Bottom Text</Label>
          <Input
            type="input"
            id="bottomText"
            onChange={this.onChangeBottomText}
            value={initialBottomText}
            placeholder="Enter the Bottom Text"
          />
          <Label for="select">Font Size</Label>
          <Input
            id="select"
            as="select"
            onChange={this.onChangeSelect}
            value={initialFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <Input as="option" value={each.displayText} key={each.optionId}>
                {each.displayText}
              </Input>
            ))}
          </Input>
          <Button onClick={this.onClickGenerate} type="submit">
            Generate
          </Button>
        </MainContainer>
        <ImageContainer src={url}>
          <Paragraph font={fontSize}>{topText}</Paragraph>
          <Paragraph font={fontSize}>{bottomText}</Paragraph>
        </ImageContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
