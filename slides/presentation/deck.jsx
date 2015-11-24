import React from 'react/addons';
import { trim, lines} from 'underscore.string';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle';
import _ from 'lodash';

import images from './images';

const trimAllLeft = (content) => _.map(_.tail(lines(content)), (line) => trim(line)).join('\n');

const examples = (() => {
  const scenarios = (input) => {
    var allLines = lines(input);
    var accumulator = { isConsuming: false, scenarios: [], buffer: [] };
    var result = _.reduce(allLines, (memo, nextLine) => {
      if (!memo.isConsuming && trim(nextLine).startsWith('scenario')) {
        memo.isConsuming = true;
      }

      if(memo.isConsuming) {
        memo.buffer = memo.buffer.concat(nextLine)
      }

      if(memo.isConsuming && trim(nextLine).startsWith('end')) {
        memo.isConsuming = false;
        memo.scenarios.push(memo.buffer.join('\n'));
        memo.buffer = [];
      }

      return accumulator;
    }, accumulator);

    return result.scenarios;
  };

  const forms = require("raw!./../../website/spec/features/blogs_spec.rb");

  return {
    homepage: require("raw!./../../website/spec/features/homepage_spec.rb"),
    formsSuccess: scenarios(forms)[0],
    formsValidation: scenarios(forms)[1]
  }
})();

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

          <Image src={images.fire.replace('/','')} margin='0px auto 40px' height='293px'/>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <List textColor="primary">
            <ListItem>Developers make mistakes; forgetting edge cases etc</ListItem>
            <ListItem>Testing finds the presence of bugs; not always the absense</ListItem>
            <ListItem>Improve the Product's quality</ListItem>
            <ListItem>Remove any defects before they reach an end user</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <List textColor="primary">
            <ListItem>Future proof for the next developer</ListItem>
            <ListItem>Eliminate Regression Issues</ListItem>
            <ListItem>Tracability to requirements</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Appear>
            <Heading size={1} fit textColor='primary' textFont='secondary'>
              Testing from the outside in
            </Heading>
          </Appear>

          <Appear>
            <Link href='https://robots.thoughtbot.com/testing-from-the-outsidein'>
              <Text textColor='white'>https://robots.thoughtbot.com/testing-from-the-outsidein</Text>
            </Link>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <List textColor="primary">
            <ListItem>Still applying TDD (Test Driven Development)</ListItem>
            <ListItem>Write high level feature tests first</ListItem>
            <ListItem>From a particular end user's perspective</ListItem>
            <ListItem>We still write lower level tests</ListItem>
            <ListItem>Lower layer tests will pass first, before outer layer tests</ListItem>
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

        <Slide transition={['zoom', 'fade']} bgColor='black'>
          <Heading size={1} caps textColor='primary'>
            Basic Example
          </Heading>

          <CodePane
            lang="ruby"
            source={examples.homepage}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['zoom', 'fade']}  bgColor='black'>
          <Heading size={1} caps textColor='primary'>
            Forms #1
          </Heading>

          <CodePane
            lang="ruby"
            source={examples.formsSuccess}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor='black'>
          <Heading size={1} caps textColor='primary'>
            Forms #2
          </Heading>

          <CodePane
            lang="ruby"
            source={examples.formsValidation}
            margin="20px auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading caps fit size={1} textColor='tertiary'>
            Sounds perfect!
          </Heading>
          <Heading caps fit size={1} textColor='secondary'>
            Right?
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <Heading caps fit size={1} textColor='tertiary'>
            Common Gotchas...
          </Heading>
          <List textColor="primary">
            <ListItem>Asserting Content / CSS / etc without inbuilt wait for behaviour</ListItem>
            <ListItem>Mis-clicking - Animations, incorrectly clicking a parent etc</ListItem>
            <ListItem>Clicking elements before JavaScript listeners are bound</ListItem>
            <ListItem>Forgetting to run JavaScript</ListItem>
            <ListItem>Cross-browser driver issues</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor='black'>
            <Heading size={1} caps textColor='primary'>
              Asserting Content
            </Heading>

            <Text caps textColor='red'>Bad</Text>
            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                #  Potential Race Condition - page.content may not have the required text yet
                expect(page.content).to match('Success!')
              `)}
              margin="20px auto"/>

          <Appear>
            <Text caps textColor='green'>Good</Text>
            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                # Prefer to use capybara's built in matchers
                # which will keep trying until to assert content
                # until Capybara.default_max_wait_time (2 seconds) has surpassed
                expect(page).to have_content('Success!')
              `)}
              margin="20px auto"/>
            </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='black'>
          <Heading size={5} caps textColor='primary'>
            Other useful Capybara rspec matchers...
          </Heading>

          <List textColor="white">
            <ListItem>have_selector / have_css</ListItem>
            <ListItem>have_text / have_content</ListItem>
            <ListItem>have_current_path</ListItem>
          </List>
        </Slide>

        <Slide transition={['spin', 'slide']}>
          <Link href={slidesUrl}>
            <Text bold fit textColor='white'>{slidesUrl}</Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
