/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import 'whatwg-fetch';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this.fetchData());
  }

  async fetchData() {
    const response = await fetch('https://rebrickable.com/api/v3/lego/colors/?key=a2d852e7a203d7d4fb41f79feaa712ae');

    return response;
    /*if (ok) {
      return json;
    } else {
      return json;
    }*/
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
