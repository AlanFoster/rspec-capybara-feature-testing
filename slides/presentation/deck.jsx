import React from 'react/addons';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle';

import images from './images';

const slidesUrl = 'https://github.com/AlanFoster/react-presentation';

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={800}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Image src={images.ruby.replace('/','')} margin='0px auto 40px' height='293px'/>
          <Heading size={1} fit caps lineHeight={1} textColor='black'>
            Capybara
          </Heading>
          <Heading size={2} fit caps textColor="tertiary">
            Introduction to web testing
          </Heading>
          <Link href={slidesUrl}>
            <Text bold caps textColor='black'>{slidesUrl}</Text>
          </Link>
        </Slide>
        <Slide transition={['slide']} bgColor='black'>
          <Heading size={1} fit textColor='primary' textFont='secondary'>
            Why Test?
          </Heading>

          <Appear>
            <Image src={images.fire.replace('/','')} margin='0px auto 40px' height='293px'/>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <List textColor="primary">
            <ListItem><Appear>Developers make mistakes; forgetting edge cases etc</Appear></ListItem>
            <ListItem><Appear>This leads to defects</Appear></ListItem>
            <ListItem><Appear>Testing finds the presence of bugs; not always the absense</Appear></ListItem>
            <ListItem><Appear>Improve the Product's quality</Appear></ListItem>
            <ListItem><Appear>Remove any defects before they reach an end user</Appear></ListItem>
            <ListItem><Appear>Eliminate Regression Issues</Appear></ListItem>
            <ListItem><Appear>Tracability to requirements</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading size={1} fit textColor='primary' textFont='secondary'>
            How to test
          </Heading>

          <List>
            <ListItem><Appear>Todo</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading size={1} fit textColor='black' textFont='secondary'>
            Manual Testing
          </Heading>

          <List textColor="white">
            <ListItem><Appear>Exploratory testing can find issues</Appear></ListItem>
            <ListItem><Appear>Exploratory testing can find issues</Appear></ListItem>
            <ListItem><Appear>Find regressions</Appear></ListItem>
            <ListItem><Appear>Add a failing scenario to the existing test suite</Appear></ListItem>
            <ListItem><Appear>Parallelise testing</Appear></ListItem>
            <ListItem><Appear>Automate cross-browser testing</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading size={1} fit textColor='black' textFont='secondary'>
            Automation!
          </Heading>

          <List textColor="white">
            <ListItem><Appear>Repeat the same test suite multiple times</Appear></ListItem>
            <ListItem><Appear>Find regressions</Appear></ListItem>
            <ListItem><Appear>Add a failing scenario to the existing test suite</Appear></ListItem>
            <ListItem><Appear>Parallelise testing</Appear></ListItem>
            <ListItem><Appear>Automate cross-browser testing</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgImage={images.ruby.replace('/', '')} bgDarken={0.75}>
          <Appear fid='1'>
            <Heading size={1} caps fit textColor='primary'>
              Capybara
            </Heading>
          </Appear>
          <Appear fid='2'>
            <Heading size={1} caps fit textColor='tertiary'>
              Browser Automation
            </Heading>
          </Appear>
          <Appear fid='3'>
            <Heading size={1} caps textColor='primary'>
              ... in Ruby!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading caps fit>Demo</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <Heading size={1} caps textColor='primary'>
            Basic Example
          </Heading>

          <CodePane
            lang="ruby"
            source={require("raw!./../../website/spec/features/homepage_spec.rb")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor='primary'>
          <Heading size={1} caps textColor='primary'>
            Forms
          </Heading>

          <CodePane
            lang="ruby"
            source={require("raw!./../../website/spec/features/homepage_spec.rb")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor='primary'>
          <Heading caps fit size={1} textColor='tertiary'>
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor='secondary'>
            Combinable Transitions
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <List>
            <ListItem><Appear fid='1'>Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid='2'>Autofit text</Appear></ListItem>
            <ListItem><Appear fid='3'>Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid='4'>React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid='5'>PDF export</Appear></ListItem>
            <ListItem><Appear fid='6'>And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor='tertiary'>
          <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
            Made with love in Seattle by
          </Heading>
          <Link href='http://www.formidablelabs.com'><Image width='100%' src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
