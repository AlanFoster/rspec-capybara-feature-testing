import React from 'react/addons';
import { trim, lines} from 'underscore.string';

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from '../src/spectacle';
import _ from 'lodash';

import allImages from './images';

const images = _.mapValues(allImages, (path) => path.replace('/',''));

const trimAllLeft = function(content) {
  const allLines = lines(content);
  const isEmptyLine = (line) => trim(line) === '';
  const mainLines = _.dropRightWhile(_.dropWhile(allLines, isEmptyLine), isEmptyLine);

  if (mainLines.length === 0) return '';

  const firstLine = mainLines[0];
  const firstLineLeftPadding = firstLine.length - trim(firstLine).length;
  const formattedLines = _.map(mainLines, (line) => line.substring(firstLineLeftPadding))

  return formattedLines.join('\n');
};

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

    return _.map(result.scenarios, trimAllLeft);
  };

  const forms = require("raw!./../../website/spec/features/blogs_spec.rb");

  return {
    homepage: require("raw!./../../website/spec/features/homepage_spec.rb"),
    formsSuccess: scenarios(forms)[0],
    formsValidation: scenarios(forms)[1]
  }
})();

const slidesUrl = 'https://github.com/AlanFoster/rspec-capybara-feature-testing';

export default class extends React.Component {
  render() {
    return (
      <div>
        <div className="slides-url"><a href={slidesUrl}>{slidesUrl}</a></div>
        <Deck transition={['zoom', 'slide']} transitionDuration={800}>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.ruby} margin='0px auto 40px' height='293px'/>
            <Heading size={1} fit caps lineHeight={1} textColor='black'>
              Capybara
            </Heading>
            <Heading size={2} fit caps textColor="tertiary">
              Introduction to web testing
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading size={1} fit textColor='primary' textFont='secondary'>
              Why Test?
            </Heading>

            <Image src={images.fire} margin='0px auto 40px' height='293px'/>
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

          <Slide transition={['slide']} bgColor='secondary' textColor='primary'>
            <Image src={images.rspec} margin='0px auto 40px' height='293px'/>

            <Heading size={1} caps textColor='primary'>
              rspec
            </Heading>

            <Heading size={2} caps fit textColor='tertiary'>
              Ruby Testing Framework
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='secondary' textColor='primary'>
            <Heading size={1} caps textColor='primary'>
              Capybara
            </Heading>

            <Heading size={2} caps fit textColor='tertiary'>
              Allows us to test web applications
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='secondary' textColor='primary'>
            <Heading size={1} caps textColor='primary'>
              DSL
            </Heading>

            <Heading size={2} caps fit textColor='tertiary'>
              Domain Specific Language
            </Heading>

            <Appear>
              <CodePane
                lang="ruby"
                source={trimAllLeft(`
                    expect(page).to have_content('Success!')
                  `)}
                margin="20px auto"/>
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
              Common Mishaps...
            </Heading>
            <List textColor="primary">
              <ListItem>Asserting Content / CSS / etc without inbuilt wait for behaviour</ListItem>
              <ListItem>misclicking - Animations, incorrectly clicking a parent etc</ListItem>
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
                  #  Potential Race Condition - page.text may not have the required text yet
                  expect(page.text).to match('Success!')
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

            <Appear>
              <Text textColor='primary'>For example...</Text>
              <CodePane
                lang="ruby"
                source={trimAllLeft(`
                  expect(page).to have_content('Success!')
                  expect(page).to have_selector('.blog--show')
                  expect(page).to have_current_path('/blogs')
                `)}
                margin="20px auto"/>
            </Appear>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading  caps textColor='primary'>
              More Problems...
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading  caps textColor='primary'>
              Animations
            </Heading>

            <Text bold textColor='white'>Hitting a moving target is hard...</Text>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Image src={images.modal} margin='0px auto 40px'/>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Text bold textColor='white'>Initial attempt</Text>

            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                click_on 'Launch demo modal'

                click_on 'button'
                expect(page).to have_content 'some amazing content'
              `)}
              margin="20px auto"/>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading size={4} textColor='primary'>
              But we keep misclicking...
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading  caps textColor='primary'>
              Solution
            </Heading>

            <Text bold textColor='white'>Use sleeps!</Text>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                click_on 'Launch demo modal'

                sleep 1 # let's hope for the best!

                click_on 'button'
                expect(page).to have_content 'some amazing content'
              `)}
              margin="20px auto"/>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading size={4} textColor='primary'>
              But we still keep misclicking...
            </Heading>

            <Appear>
              <Text textColor='white'>
                Particularly on our slow testing servers
              </Text>
            </Appear>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading caps textColor='primary'>
              Solution
            </Heading>

            <Text bold textColor='white'>Use a longer sleep!</Text>

            <Appear>
              <Text bold textColor='white'>Or...</Text>
            </Appear>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading size={4} textColor='white'>Use classes as a semaphore...</Heading>
            <Text bold textColor='white'>(ie, a waiting flag)</Text>

            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                click_on 'Launch demo modal'

                # The .in class is only added once fully opened
                expect(page).to have_selector '.modal.fade.in'

                click_on 'button'
                expect(page).to have_content 'some amazing content'
              `)}
              margin="20px auto"/>
          </Slide>

          <Slide transition={['slide']} bgColor='black'>
            <Heading  caps textColor='primary'>
              More misclicks
            </Heading>

            <CodePane
              lang="html"
              source={trimAllLeft(`
                <div id="google">
                  <a href="http://www.google.com">Google</a>
                </div>
              `)}
              margin="20px auto"/>

            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                find('#google').click
              `)}
              margin="20px auto"/>

            <Appear>
              <Text bold textColor='white'>Always click the required element</Text>

              <CodePane
                lang="ruby"
                source={trimAllLeft(`
                  find('#google > a').click
                `)}
                margin="20px auto"/>
            </Appear>
          </Slide>


          <Slide transition={['slide']} bgColor='black'>
            <Heading caps textColor='primary'>
              Forgetting to run JavaScript
            </Heading>

            <CodePane
              lang="ruby"
              source={trimAllLeft(`
                describe 'JavaScript Example', :js do
              `)}
              margin="20px auto"/>
          </Slide>

          <Slide transition={['spin', 'slide']}>
            <Heading  caps textColor='black'>
              Questions?
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgImage={images.ruby.replace('/', '')} bgDarken={0.75}>
            <Link href={slidesUrl}>
              <Text bold fit textColor='white'>{slidesUrl}</Text>
            </Link>
          </Slide>
        </Deck>
      </div>
    );
  }
}
